/**
 * 道友攻略站 · 侧边栏高亮模块
 */

export function initSidebarHighlight(): void {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const navLinks = nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
  const sections = document.querySelectorAll<HTMLElement>('section');

  const sidebarObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const link = nav.querySelector<HTMLAnchorElement>('a[href="#' + e.target.id + '"]');
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(s => sidebarObserver.observe(s));
}