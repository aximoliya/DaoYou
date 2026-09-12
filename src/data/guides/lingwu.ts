import type { GuideData } from './types';

export const lingwuGuide: GuideData = {
  id: 'lingwu',
  title: '六、灵武',
  icon: '⚔️',
  category: '开箱攻略',
  categoryHref: '/kaixiang/',
  updateDate: '2026-09-01',
  version: '曦幻二版本',
  sections: [
    {
      title: '灵武通用',
      badge: 'xh',
      blocks: [
        {
          type: 'info',
          content: '💡 灵武最强的放阵容最右边上阵，剩下品质与星级最高的6个护佑神仙，最后剩下的才去协力/附灵。'
        }
      ]
    },
    {
      title: '灵武星级替换',
      badge: 'xh',
      blocks: [
        {
          type: 'heading',
          level: 3,
          text: '曦幻·笔 → 琉璃·刃'
        },
        {
          type: 'table',
          headers: ['笔星级', '单挑', '实战搭配'],
          rows: [
            ['0星', '换 1~2星刃（大概率换1星刃）', '换 2~3星刃'],
            ['1星', '换 3~4星刃（大概率≈4星刃）', '换 5星刃（稳定远超）'],
            ['2星', '换 4~5星刃（大概率≈5星刃）', '—']
          ],
          tiers: 'll xh'
        },
        {
          type: 'info',
          content: '⚠️ 笔不能护佑，不放出战等于没有。1笔换5刃 = 1笔出战5刃护佑 vs 5刃出战，二打一。'
        }
      ]
    },
    {
      title: '琉璃灵武',
            blocks: [
        {
          type: 'table',
          headers: ['箱子', '开法'],
          rows: [
            ['4、5选箱', '1星烛 → 1星刃 → 刃烛平均升星优先烛。'],
            ['2、3选箱', '1星篌 → 1星将 → 1星伞 → 篌将平均升星优先篌，伞不用管。']
          ],
          tiers: 'jx ll'
        }
      ]
    },
    {
      title: '金霄灵武',
            blocks: [
        {
          type: 'table',
          headers: ['箱子', '开法'],
          rows: [
            ['5选箱', '1星剑 → 0星符 → 一直开剑。'],
            ['4选及以下箱', '开完图鉴后平均升星，随便升哪个。']
          ],
          tiers: 'ct jx'
        },
        {
          type: 'info',
          content: '还在新手村或者刚出村不久，并且有高于金霄品质的灵武，可以先开1星符，护佑比剑强。后续接到一次星姬或灵武活动，人人都有0星姬或1灵武后，符就基本废了，而剑护佑与共鸣各有一个无限级效果还有用。跟上面一样，还在新手村或者刚出村不久可以先开1星符。',
          tiers: 'ct jx'
        }
      ]
    },
    {
      title: '赤魇及以下',
            blocks: [
        {
          type: 'text',
          content: '开完图鉴后平均升星，随便升哪个。如果是在新手村内获得的赤魇灵武箱，可以先升1星杵或1星鼎后再开图鉴，没更高品质灵武优先杵，有更高品质灵武优先鼎。'
        }
      ]
    }
  ]
};
