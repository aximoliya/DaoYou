/**
 * 道友攻略站 · 主题切换模块 (默认浅色国风，可切深色)
 */

export function initTheme(): void {
  const root = document.documentElement;

  // 初始：默认浅色；仅当保存为 dark 时应用
  if (localStorage.getItem('daoyou-theme') === 'dark') {
    root.setAttribute('data-theme', 'dark');
  }

  const toggle = document.getElementById('theme-toggle') as HTMLButtonElement | null;
  if (!toggle) return;

  const sync = () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    // 图标由 CSS 依据 html[data-theme] 切换，这里只同步无障碍文案
    toggle.title = isDark ? '切换到浅色' : '切换到深色';
    toggle.setAttribute('aria-label', isDark ? '切换到浅色' : '切换到深色');
  };
  sync();

  toggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
      root.removeAttribute('data-theme');
      localStorage.setItem('daoyou-theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('daoyou-theme', 'dark');
    }
    sync();
  });
}
