/**
 * 道友攻略站 · 面包屑元数据模块
 * 面包屑渲染由 Breadcrumb.astro 组件负责。
 */

export interface PageMeta {
  page: string;
  current: string;
  title: string;
}

export function getPageMeta(): PageMeta {
  return {
    page: document.documentElement.dataset.page || '',
    current: document.documentElement.dataset.current || '',
    title: document.title || '',
  };
}