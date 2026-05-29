/**
 * 道友攻略站 · 共享导航数据
 * Astro SSG, 路由格式: /kaixiang/ → dist/kaixiang/index.html
 */

export interface NavItem {
  href: string;
  label: string;
  group?: string;
}

/** 全局导航（首页使用）*/
export const globalNavItems: NavItem[] = [
  { href: '/kaixiang/', label: '开箱攻略总览', group: '开箱攻略' },
  { href: '/kaixiang/shenxian/', label: '一、神仙' },
  { href: '/kaixiang/tianshu/', label: '二、天书' },
  { href: '/kaixiang/xingji/', label: '三、星姬' },
  { href: '/kaixiang/huanxian/', label: '四、幻仙' },
  { href: '/kaixiang/chongwu/', label: '五、宠物' },
  { href: '/kaixiang/lingwu/', label: '六、灵武' },
  { href: '/kaixiang/yuanshen/', label: '七、元神' },
  { href: '/kaixiang/fabao/', label: '八、法宝' },
  { href: '/kaixiang/zhuangbei/', label: '九、装备' },
  { href: '/kaixiang/duoxuan/', label: '十、道具多选箱' },
  { href: '/richang/', label: '日常运营总览', group: '日常运营' },
  { href: '/richang/shop/', label: '商店购买' },
  { href: '/richang/huodong/', label: '活动购买兑换' },
  { href: '/yangcheng/', label: '养成系统总览', group: '养成系统' },
  { href: '/yangcheng/shencang/', label: '神藏系统' },
];

/** 开箱攻略模块导航 */
export const kaixiangNavItems: NavItem[] = [
  { href: '/kaixiang/', label: '开箱攻略总览', group: '开箱攻略' },
  { href: '/kaixiang/shenxian/', label: '一、神仙' },
  { href: '/kaixiang/tianshu/', label: '二、天书' },
  { href: '/kaixiang/xingji/', label: '三、星姬' },
  { href: '/kaixiang/huanxian/', label: '四、幻仙' },
  { href: '/kaixiang/chongwu/', label: '五、宠物' },
  { href: '/kaixiang/lingwu/', label: '六、灵武' },
  { href: '/kaixiang/yuanshen/', label: '七、元神' },
  { href: '/kaixiang/fabao/', label: '八、法宝' },
  { href: '/kaixiang/zhuangbei/', label: '九、装备' },
  { href: '/kaixiang/duoxuan/', label: '十、道具多选箱' },
];

/** 日常运营模块导航 */
export const richangNavItems: NavItem[] = [
  { href: '/richang/', label: '日常运营总览', group: '日常运营' },
  { href: '/richang/shop/', label: '商店购买' },
  { href: '/richang/huodong/', label: '活动购买兑换' },
];

/** 养成系统模块导航 */
export const yangchengNavItems: NavItem[] = [
  { href: '/yangcheng/', label: '养成系统总览', group: '养成系统' },
  { href: '/yangcheng/shencang/', label: '神藏系统' },
];
