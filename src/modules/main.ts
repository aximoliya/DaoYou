/**
 * 道友攻略站 · 主入口模块
 */

import { initTheme } from './theme';
import { getPageMeta } from './breadcrumb';
import { initTOC } from './toc';
import { initMobileMenu } from './mobile-menu';
import { initBackToTop } from './back-to-top';
import { initSidebarHighlight } from './sidebar-highlight';
import { initAccordion } from './accordion';

/**
 * 初始化所有交互模块
 */
export function initDaoyouApp(): void {
  // 获取页面元数据
  const pageMeta = getPageMeta();

  // 初始化各模块
  initTheme();
  initBackToTop();
  initTOC();
  initMobileMenu();
  initSidebarHighlight();
  initAccordion();

}

// 导出给外部使用
export { initTOC } from './toc';
export { getPageMeta } from './breadcrumb';