import type { GuideData } from './types';

export const duoxuanGuide: GuideData = {
  id: 'duoxuan',
  title: '十、道具多选箱',
  icon: '📦',
  category: '开箱攻略',
  categoryHref: '/kaixiang/',
  updateDate: '2026-09-01',
  version: '曦幻三版本',
  sourceUrl: 'https://www.taptap.cn/moment/123858008127046416',
  sourceAuthor: '笑语@TapTap',
  sections: [
    {
      title: '曦幻多选箱',
            blocks: [
        {
          type: 'card',
          title: '多宝密藏',
          content: '曦幻装备 ＞ 神仙',
          tiers: 'xh'
        }
      ]
    },
    {
      title: '琉璃多选箱',
            blocks: [
        {
          type: 'card',
          title: '琉璃123选箱',
          content: '宠物 ＞ 幻仙 ＞ 灵武 ＞ 元神',
          tiers: 'll'
        },
        {
          type: 'card',
          title: '琉璃4选箱',
          content: '烛升1星 ＞ 貔升1星 ＞ 谛听升1星 ＞ 貔蝶图鉴 ＞ 谛听毕方图鉴 ＞ 烛升星 ＞ 貔升星 ＞ 谛听升星',
          tiers: 'll'
        },
        {
          type: 'card',
          title: '天魔奖励',
          content: '篌 ＞ 将 ＞ 元神',
          tiers: 'll'
        }
      ]
    },
    {
      title: '金霄多选箱',
            blocks: [
        {
          type: 'card',
          title: '金霄1234选箱',
          content: '1兔 ＞ 开图鉴 ＞ 5兔 ＞ 随便',
          tiers: 'jx'
        },
        {
          type: 'card',
          title: '金霄56选箱',
          content: '1赑屃1牡丹 ＞ 开图鉴 ＞ 只开赑屃牡丹一直到5星 ＞ 剑 ＞ 其他',
          tiers: 'jx'
        }
      ]
    },
    {
      title: '赤魇以下多选箱',
            blocks: [
        {
          type: 'info',
          content: '先开图鉴，图鉴优先级：<b>幻仙 ＞ 宠物 ＞ 灵武 ＞ 元神</b>。图鉴全开完后，选择箱只开元神。',
          tiers: 'ct zx qy hc'
        }
      ]
    }
  ]
};
