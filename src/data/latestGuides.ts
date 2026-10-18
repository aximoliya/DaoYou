/**
 * 道友攻略站 · 首页「最新攻略」列表数据
 * 手动维护：新攻略完成后在此追加一条（越新越靠前）
 */

export interface LatestGuide {
  title: string;
  href: string;
  tag: string;
  date: string;
  category: string;
  icon: string;
  /** 缩略图渐变，格式 "起始色,结束色" */
  grad: string;
}

export const latestGuides: LatestGuide[] = [
  {
    title: '开箱攻略 9.27 更新：星姬改版（豹雉）、天书丹心、元神曦幻三',
    href: '/kaixiang/xingji/',
    tag: '版本更新',
    date: '2026-09-27',
    category: '星姬',
    icon: 'star',
    grad: '#FDA9BC,#F58DA8',
  },
  {
    title: '归墟葬星图测评：技能讲解与全天书搭配',
    href: '/reviews/guixu/',
    tag: '道具测评',
    date: '2026-09-27',
    category: '道具测评',
    icon: 'orb',
    grad: '#A2A1FA,#7C7BF0',
  },
  {
    title: '天书搭配推荐：曦幻丹心/洛水/邪魔/归墟强度与出书顺序',
    href: '/kaixiang/tianshu/',
    tag: '天书攻略',
    date: '2026-09-27',
    category: '天书',
    icon: 'book',
    grad: '#709BFC,#4E83F7',
  },
  {
    title: '曦幻三神仙开箱：3选箱 / 2选箱 / 1选箱路线',
    href: '/kaixiang/shenxian/',
    tag: '神仙攻略',
    date: '2026-09-27',
    category: '神仙',
    icon: 'user',
    grad: '#6DA2FC,#4E83F7',
  },
  {
    title: '幻仙开箱：女魃 / 火鼠 / 腾蛇白泽升星路线',
    href: '/kaixiang/huanxian/',
    tag: '幻仙攻略',
    date: '2026-09-27',
    category: '幻仙',
    icon: 'sparkles',
    grad: '#6FCFA4,#45B98A',
  },
];
