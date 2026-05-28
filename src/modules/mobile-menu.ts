/**
 * 道友攻略站 · 移动端菜单模块
 */

export function initMobileMenu(): void {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');
  const nav = document.getElementById('nav');

  function openNav(): void {
    if (nav) nav.classList.add('open');
    if (overlay) overlay.classList.add('show');
    if (hamburger) hamburger.textContent = '✕';
  }

  function closeNav(): void {
    if (nav) nav.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    if (hamburger) hamburger.textContent = '☰';
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (nav && nav.classList.contains('open')) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeNav);
  }

  if (nav) {
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 768) closeNav();
      });
    });
  }
}