/**
 * 道友攻略站 · 浮动目录模块
 */

interface TOCItem {
  el: HTMLElement;
  id: string;
  text: string;
}

let tocPanel: HTMLElement | null = null;
let tocItems: TOCItem[] = [];
let tocScrollTimer: ReturnType<typeof setTimeout>;

function buildTOC(): void {
  if (!tocPanel) return;
  
  const isHub = !document.getElementById('nav');
  if (isHub) return;

  // 清除旧链接
  tocPanel.querySelectorAll('a').forEach(a => a.remove());

  const sections = document.querySelectorAll<HTMLElement>('section');
  let currentSection: HTMLElement | null = null;

  sections.forEach(s => {
    if (!s.classList.contains('hidden') && s.id && s.id !== 'about') {
      const rect = s.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (!currentSection || rect.top < currentSection.getBoundingClientRect().top) {
          currentSection = s;
        }
      }
    }
  });

  if (!currentSection) {
    tocPanel.classList.remove('show');
    return;
  }

  const titleEl = currentSection.querySelector('h2');
  const title = titleEl ? titleEl.textContent?.replace(/[🆕🛒🏛️👤📖⭐🧚🐾⚔️💎🔮📦📋🔬⚔️🌀☁️🏔️🤝👗🧧⛏️🎖️🏠🛡️🐉🏛️♻️👹🏆🏞️🔒]/g, '').trim() : '';
  const tocTitle = tocPanel.querySelector('.toc-title');
  if (tocTitle) tocTitle.textContent = '📑 ' + (title || '本节');

  const items: TOCItem[] = [];
  let idx = 0;

  currentSection.querySelectorAll('h3').forEach(el => {
    if ((el as HTMLElement).closest('.tier-hidden')) return;
    const id = 'toc-' + currentSection.id + '-' + (idx++);
    if (!el.id) el.id = id;
    items.push({
      el: el as HTMLElement,
      id,
      text: el.textContent?.replace(/[🔬⚔️📋🆕]/g, '').trim().substring(0, 28) || ''
    });
  });

  currentSection.querySelectorAll('.card-title').forEach(el => {
    if ((el as HTMLElement).closest('.tier-hidden')) return;
    const card = (el as HTMLElement).closest('.card');
    const id = 'toc-' + currentSection.id + '-' + (idx++);
    if (card && !card.id) card.id = id;
    items.push({
      el: card || el as HTMLElement,
      id,
      text: el.textContent?.trim().substring(0, 28) || ''
    });
  });

  if (items.length <= 1) {
    tocPanel.classList.remove('show');
    return;
  }

  const closeNav = () => {
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('overlay');
    if (nav) nav.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
  };

  items.forEach(item => {
    const a = document.createElement('a');
    a.href = '#' + item.id;
    a.textContent = item.text;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      item.el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (window.innerWidth <= 768) closeNav();
    });
    tocPanel!.appendChild(a);
  });

  tocPanel.classList.add('show');
  tocItems = items;
}

export function initTOC(): void {
  tocPanel = document.getElementById('toc-panel');

  // 监听品质筛选变化
  document.addEventListener('tier-changed', () => {
    clearTimeout(tocScrollTimer);
    tocScrollTimer = setTimeout(buildTOC, 100);
  });

  // Scroll spy
  window.addEventListener('scroll', () => {
    if (!tocPanel || !tocPanel.classList.contains('show')) return;
    clearTimeout(tocScrollTimer);
    tocScrollTimer = setTimeout(() => {
      const links = tocPanel!.querySelectorAll('a');
      let activeIdx = -1;
      tocItems.forEach((item, i) => {
        if (item.el.getBoundingClientRect().top < 150) activeIdx = i;
      });
      links.forEach((l, i) => l.classList.toggle('active', i === activeIdx));
    }, 100);
  }, { passive: true });

  // Section observer
  const tocObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.classList.contains('hidden')) {
        buildTOC();
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll<HTMLElement>('section').forEach(s => {
    if (s.id && s.id !== 'about') tocObserver.observe(s);
  });

  setTimeout(buildTOC, 500);
}