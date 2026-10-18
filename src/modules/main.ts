/**
 * 道友攻略站 · 主入口模块
 */

import { initTheme } from './theme';
import { initTOC } from './toc';
import { initSidebar } from './sidebar';
import { initBackToTop } from './back-to-top';
import { initAccordion } from './accordion';

/**
 * 初始化所有交互模块
 */
export function initDaoyouApp(): void {
  initTheme();
  initSidebar();
  initBackToTop();
  initTOC();
  initAccordion();
}

export { initTOC } from './toc';
