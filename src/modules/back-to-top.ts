/**
 * 道友攻略站 · 回到顶部模块
 */

export function initBackToTop(): void {
  if (document.getElementById('back-to-top')) return;

  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.innerHTML = '▲';
  btn.setAttribute('aria-label', '回到顶部');
  btn.title = '回到顶部';
  document.body.appendChild(btn);

  let scrollTimer: ReturnType<typeof setTimeout>;
  
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, 50);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}