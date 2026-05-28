export interface NavItem {
  href: string;
  label: string;
  group?: string;
}

/** 首页导航栏：只展示三大分类入口，带分组标签，不展开子页面 */
export const homeNavItems: NavItem[] = [
  { group: "攻略分类", href: "/kaixiang/", label: "📦 开箱攻略" },
  { href: "/richang/", label: "🛒 日常运营" },
  { href: "/yangcheng/", label: "🏛️ 养成系统" },
];