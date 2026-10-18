/**
 * 道友攻略站 · 侧边栏模块 (折叠分组状态 + 移动端抽屉)
 */

const STORAGE_KEY = 'daoyou-sidebar-groups';

/** 抽屉式导航的生效宽度，必须与 base.css 里的 1040px 断点保持一致 */
const MOBILE_NAV_MAX = 1040;

export function initSidebar(): void {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');
  if (!sidebar) return;

  // ── 折叠分组状态持久化 ──
  const groups = Array.from(sidebar.querySelectorAll<HTMLDetailsElement>('details.side-group'));
  let saved: Record<string, boolean> = {};
  try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch {}

  groups.forEach((g, i) => {
    const key = String(i);
    // 若该分组包含当前页，强制展开
    const hasActive = !!g.querySelector('.side-item.active');
    if (hasActive) {
      g.open = true;
    } else if (key in saved) {
      g.open = saved[key];
    } else {
      // 首次访问：全部展开，保证导航可见
      g.open = true;
    }
    g.addEventListener('toggle', () => {
      saved[key] = g.open;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    });
  });

  // ── 移动端抽屉 ──
  const open = () => {
    sidebar.classList.add('open');
    overlay?.classList.add('show');
    if (overlay) overlay.style.display = 'block';
    hamburger?.classList.add('is-open');
  };
  const close = () => {
    sidebar.classList.remove('open');
    overlay?.classList.remove('show');
    if (overlay) overlay.style.display = 'none';
    hamburger?.classList.remove('is-open');
  };

  hamburger?.addEventListener('click', () => {
    sidebar.classList.contains('open') ? close() : open();
  });
  overlay?.addEventListener('click', close);
  sidebar.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { if (window.innerWidth <= MOBILE_NAV_MAX) close(); });
  });
}
