/**
 * 道友攻略站 · 侧边栏导航数据
 * icon 使用 emoji；group 为可折叠分组
 */

export interface SideNavItem {
  href?: string;
  label: string;
  icon?: string;
  group?: string;
  children?: SideNavItem[];
}

export const sidebarNav: SideNavItem[] = [
  { href: '/', label: '首页', icon: 'home' },
  {
    group: '开箱攻略',
    label: '开箱攻略',
    icon: 'package',
    children: [
      { href: '/kaixiang/', label: '攻略总览', icon: 'grid' },
      { href: '/kaixiang/shenxian/', label: '神仙', icon: 'user' },
      { href: '/kaixiang/tianshu/', label: '天书', icon: 'book' },
      { href: '/kaixiang/xingji/', label: '星姬', icon: 'star' },
      { href: '/kaixiang/huanxian/', label: '幻仙', icon: 'sparkles' },
      { href: '/kaixiang/chongwu/', label: '宠物', icon: 'paw' },
      { href: '/kaixiang/lingwu/', label: '灵武', icon: 'sword' },
      { href: '/kaixiang/yuanshen/', label: '元神', icon: 'gem' },
      { href: '/kaixiang/fabao/', label: '法宝', icon: 'orb' },
      { href: '/kaixiang/zhuangbei/', label: '装备', icon: 'shield' },
      { href: '/kaixiang/duoxuan/', label: '道具多选箱', icon: 'package' },
    ],
  },
  {
    group: '道具测评',
    label: '道具测评',
    icon: 'flask',
    children: [
      { href: '/reviews/', label: '测评总览', icon: 'grid' },
      { href: '/reviews/guixu/', label: '归墟葬星图', icon: 'orb' },
    ],
  },
  {
    group: '日常运营',
    label: '日常运营',
    icon: 'cart',
    children: [
      { href: '/richang/', label: '运营总览', icon: 'grid' },
      { href: '/richang/shop/', label: '商店购买', icon: 'cart' },
      { href: '/richang/huodong/', label: '活动购买兑换', icon: 'ticket' },
    ],
  },
  {
    group: '养成系统',
    label: '养成系统',
    icon: 'landmark',
    children: [
      { href: '/yangcheng/', label: '养成总览', icon: 'grid' },
      { href: '/yangcheng/shencang/', label: '神藏系统', icon: 'landmark' },
    ],
  },
];

/** 首页热门标签 */
export const hotTags: { label: string; href: string }[] = [
  { label: '曜幻二', href: '/kaixiang/shenxian/' },
  { label: '神仙', href: '/kaixiang/shenxian/' },
  { label: '天书', href: '/kaixiang/tianshu/' },
  { label: '星姬', href: '/kaixiang/xingji/' },
  { label: '幻仙', href: '/kaixiang/huanxian/' },
  { label: '元神', href: '/kaixiang/yuanshen/' },
];
