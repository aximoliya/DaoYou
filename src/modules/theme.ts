/**
 * 道友攻略站 · 主题切换模块
 */

export function initTheme(): void {
  const saved = localStorage.getItem('daoyou-theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  // 创建主题切换按钮
  const toggle = document.createElement('button');
  toggle.className = 'theme-toggle';
  toggle.setAttribute('aria-label', '切换亮色/暗色主题');
  toggle.title = '切换主题';
  toggle.textContent = saved === 'light' ? '☀' : '🌙';

  toggle.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('daoyou-theme', 'dark');
      toggle.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('daoyou-theme', 'light');
      toggle.textContent = '☀';
    }
  });

  const nav = document.getElementById('nav');
  if (nav) {
    const footer = nav.querySelector('.nav-footer');
    if (footer) {
      footer.appendChild(toggle);
    } else {
      const nf = document.createElement('div');
      nf.className = 'nav-footer';
      nf.appendChild(toggle);
      nav.appendChild(nf);
    }
  }
}