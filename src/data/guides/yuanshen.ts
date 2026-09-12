import type { GuideData } from './types';

export const yuanshenGuide: GuideData = {
  id: 'yuanshen',
  title: '七、元神',
  icon: '💎',
  category: '开箱攻略',
  categoryHref: '/kaixiang/',
  updateDate: '2026-09-01',
  version: '曦幻二版本',
  sections: [
    {
      title: '曦幻元神',
            blocks: [
        {
          type: 'info',
          content: '💡 元神上阵 ＞ 固元，聚神要平均升。'
        },
        {
          type: 'card',
          title: '三条路线',
          content: '',
          tiers: 'ct jx ll xh'
        },
        {
          type: 'route',
          items: [
            '<b>主核是5星曦幻二或4星红莲的：</b>升5星元神后，每有一个2星就开下一个2星。',
            '<b>主核是3~4星曦幻二或3星红莲的：</b>升3星元神后，每有一个2星就开下一个2星。',
            '<b>主核是3星及以下曦幻二或5星及以下主角的：</b>神练石不够把两个元神洗毕业，就升3星元神后，每有一个2星就开下一个2星。神练石够把两个元神洗毕业，就2+1或2+2星后再升主核3星，之后每有一个2星就开下一个2星。这种情况3星比2+1星强一点点或者差不多，主要是2+1星多出一个元神可以洗新神练，洗完新神练后2+1星比3星强。'
          ],
          tiers: 'ct jx ll xh'
        },
        {
          type: 'text',
          content: '<b>上面三条路线后续共同：</b>522222星 → 533333星 → 按核度一个一个升5星。'
        },
        {
          type: 'info',
          content: '💡 注1：测试结果为主核神仙越强，曦幻元神越应该单升，反之则应该开多个元神。元神开箱的神仙星级要求是随版本变更的，现在要求曦幻二，8月以后要求曦幻三。',
          tiers: 'ct jx ll xh'
        },
        {
          type: 'warn',
          content: '⚠️ 注2：任何情况曦幻元神都<b>别开多个1星</b>，经验主义害死人，差不多的碎片打不过开多个2星，比如6个1星激活6个识神技能（消耗1020碎片），4个2星激活8个识神技能（消耗1080碎片），因为4个2星属性更集中的缘故，实际差距并不止2个识神技能。',
          tiers: 'ct jx ll xh'
        }
      ]
    },
    {
      title: '元神星级替换',
      badge: 'xh',
      blocks: [
        {
          type: 'card',
          title: '无新神炼技能/属性情况',
          content: '',
          tiers: 'ct jx ll xh'
        },
        {
          type: 'route',
          items: [
            '0星曦幻元神换<b>3星</b>琉璃元神',
            '1星曦幻元神换<b>4~5星</b>琉璃元神'
          ],
          tiers: 'ct jx ll xh'
        },
        {
          type: 'text',
          content: '如果能把元神聚神拉满，给炮灰0换5都没问题，但就算可以换也不建议换，0换5会掉道行，pve会变弱，pvp的提升约等于没有。'
        },
        {
          type: 'card',
          title: '有4个新神炼技能/属性情况',
          content: '',
          tiers: 'ct jx ll xh'
        },
        {
          type: 'route',
          items: [
            '0星曦幻元神换<b>4~5星</b>琉璃元神',
            '1星曦幻元神换<b>5星</b>琉璃元神'
          ],
          tiers: 'ct jx ll xh'
        }
      ]
    },
    {
      title: '琉璃/金霄/赤魇元神',
            blocks: [
        {
          type: 'text',
          content: '每有一个1星就开下一个1星，6个1星后平均升星。'
        }
      ]
    },
    {
      title: '紫虚元神',
            blocks: [
        {
          type: 'text',
          content: '开3~5个1星后平均升星，先升1后开0，不要开多个0。有1个琉璃元神就开5个紫虚元神，有2个琉璃元神就开4个紫虚元神，有3个琉璃元神就开3个紫虚元神，以此类推。'
        }
      ]
    },
    {
      title: '青曜及以下',
            blocks: [
        {
          type: 'text',
          content: '开完图鉴后重生为碎片给高品质元神吞了，有上阵空位的话，还是优先上阵。'
        }
      ]
    }
  ]
};
