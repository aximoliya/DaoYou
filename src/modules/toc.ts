/**
 * 道友攻略站 · 浮动目录模块
 */

/** 与 Icon.astro 中 list / close 保持一致的路径 */
const LIST_PATHS =
  '<path d="M8.4 6.6h11.2"/><path d="M8.4 12h11.2"/><path d="M8.4 17.4h11.2"/>' +
  '<circle cx="4.6" cy="6.6" r="1.15" fill="currentColor" stroke="none"/>' +
  '<circle cx="4.6" cy="12" r="1.15" fill="currentColor" stroke="none"/>' +
  '<circle cx="4.6" cy="17.4" r="1.15" fill="currentColor" stroke="none"/>';
const CLOSE_PATHS = '<path d="M5.6 5.6 18.4 18.4M18.4 5.6 5.6 18.4"/>';

function svgIcon(paths: string, size = 18): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
}

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
  
  const isHub = !document.getElementById('sidebar');
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
  const title = titleEl ? (titleEl.textContent || '').trim() : '';
  const tocTitle = tocPanel.querySelector('#toc-title-text');
  if (tocTitle) tocTitle.textContent = title || '本节';

  const items: TOCItem[] = [];
  let idx = 0;

  currentSection.querySelectorAll('h3').forEach(el => {
    const id = 'toc-' + currentSection.id + '-' + (idx++);
    if (!el.id) el.id = id;
    items.push({
      el: el as HTMLElement,
      id,
      text: (el.textContent || '').trim().substring(0, 28)
    });
  });

  currentSection.querySelectorAll('.card-title').forEach(el => {
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
    const nav = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (nav) nav.classList.remove('open');
    if (overlay) { overlay.classList.remove('show'); overlay.style.display = 'none'; }
  };

  items.forEach(item => {
    const a = document.createElement('a');
    a.href = '#' + item.id;
    a.textContent = item.text;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      item.el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (window.innerWidth <= 860) closeNav();
    });
    tocPanel!.appendChild(a);
  });

  tocPanel.classList.add('show');
  tocItems = items;
}

export function initTOC(): void {
  tocPanel = document.getElementById('toc-panel');

  // 移动端目录浮动按钮
  const isMobile = window.innerWidth <= 860;
  if (isMobile && tocPanel) {
    let toggleBtn = document.querySelector('.toc-toggle') as HTMLButtonElement;
    if (!toggleBtn) {
      toggleBtn = document.createElement('button');
      toggleBtn.className = 'toc-toggle';
      toggleBtn.setAttribute('aria-label', '目录');
      toggleBtn.title = '本节目录';
      // 两个 SVG 图标叠放，由 .is-open 切换显示（与全站图标风格一致）
      toggleBtn.innerHTML = svgIcon(LIST_PATHS) + svgIcon(CLOSE_PATHS);
      document.body.appendChild(toggleBtn);
    }

    toggleBtn.addEventListener('click', () => {
      if (!tocPanel) return;
      if (tocPanel.classList.contains('show')) {
        tocPanel.classList.remove('show');
        toggleBtn!.classList.remove('is-open');
      } else {
        tocPanel.classList.add('show');
        toggleBtn!.classList.add('is-open');
        buildTOC();
      }
    });

    // 目录为空自动隐藏时，同步复位按钮
    const observer = new MutationObserver(() => {
      if (tocPanel && !tocPanel.classList.contains('show')) {
        toggleBtn!.classList.remove('is-open');
      }
    });
    observer.observe(tocPanel, { attributes: true, attributeFilter: ['class'] });
  }

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