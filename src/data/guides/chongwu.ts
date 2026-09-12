import type { GuideData } from './types';

export const chongwuGuide: GuideData = {
  id: 'chongwu',
  title: '五、宠物',
  icon: '🐾',
  category: '开箱攻略',
  categoryHref: '/kaixiang/',
  updateDate: '2026-09-01',
  version: '鹂版本',
  sourceUrl: 'https://www.taptap.cn/moment/123858008127046416',
  sourceAuthor: '笑语@TapTap',
  sections: [
    {
      title: '曦幻宠物',
            blocks: [
        {
          type: 'info',
          content: '9月宠物极大概率不出新，所以主题有两次牛，神石有两次鹂。9月第一次接入宠物活动的白嫖开鹂，可以升1星。开牛会差20碎片没法升1星，除非愿意花200神石补上差的碎片。',
          tiers: 'xh'
        },
        {
          type: 'card',
          title: '四选箱',
          content: '开<b>牛</b>',
          tiers: 'xh'
        },
        {
          type: 'info',
          content: '有0星鹂的白嫖这次挪用20四选箱开鹂，神石活动升1星鹂，而且也不影响下次宠物主题牛升1星。没有鹂的白嫖用未来牛1星后多出来的四选箱，结合神石的三选箱也是能开1星鹂的。',
          tiers: 'xh'
        },
        {
          type: 'card',
          title: '三选箱',
          content: '开<b>鹂</b>',
          tiers: 'xh ll'
        },
        {
          type: 'card',
          title: '二选箱',
          content: '猫、鲨哪个能合成/升星就开哪个，都能合成升星开<b>鲨</b>',
          tiers: 'xh ll'
        }
      ]
    },
    {
      title: '琉璃宠物',
            blocks: [
        {
          type: 'card',
          title: '5、6选箱',
          content: '1星狮 → 1星狼 → 3星狮 → 3星狼 → 5星狮 → 5星狼',
          tiers: 'jx ll'
        },
        {
          type: 'card',
          title: '3、4选箱',
          content: '1星貔 → 1星蝶 → 5星貔 → 5星蝶',
          tiers: 'jx ll',
          note: '蝶上不了阵就只用开0星。'
        },
        {
          type: 'card',
          title: '1、2选箱',
          content: '1星鹰 → 1星豚 → 5星鹰 → 5星豚',
          tiers: 'jx ll',
          note: '豚上不了阵就只用开0星。'
        }
      ]
    },
    {
      title: '金霄宠物',
            blocks: [
        {
          type: 'card',
          title: '5、6选箱',
          content: '1星牡丹 → 开完所有图鉴 → 5星牡丹 → 平均升星',
          tiers: 'ct jx'
        },
        {
          type: 'card',
          title: '1234选箱',
          content: '开图鉴后平均升星',
          tiers: 'ct jx'
        }
      ]
    },
    {
      title: '赤魇及以下宠物',
            blocks: [
        {
          type: 'info',
          content: '全部开图鉴后随便升星。',
          tiers: 'zx ct'
        }
      ]
    }
  ]
};
