import type { GuideData } from './types';

export const huanxianGuide: GuideData = {
  id: 'huanxian',
  title: '四、幻仙',
  icon: '🧚',
  category: '开箱攻略',
  categoryHref: '/kaixiang/',
  updateDate: '2026-09-01',
  version: '女魃版本',
  sourceUrl: 'https://www.taptap.cn/moment/123858008127046416',
  sourceAuthor: '笑语@TapTap',
  sections: [
    {
      title: '曦幻幻仙',
            blocks: [
        {
          type: 'card',
          title: '4选箱',
          content: '开<b>女魃</b>',
          tiers: 'xh'
        },
        {
          type: 'info',
          content: '有0星火鼠或80火鼠碎片的白嫖暂时不开，等书阁挪用20或40四选箱升1星火鼠。未来再挪用五选箱升1星女魃，等幻仙6出来后，未来半年书阁都是五选箱，挪用少量五选影响不大。或者不挪用碎片，在书阁使用98+10或198+10额度，补20或40幻仙碎片填上缺口。',
          tiers: 'xh'
        },
        {
          type: 'card',
          title: '3选箱',
          content: '开<b>火鼠</b>',
          tiers: 'xh ll'
        },
        {
          type: 'card',
          title: '2选箱',
          content: '九婴鲲鹏哪个能合成升星就开哪个，都能合成升星优先<b>鲲鹏</b>',
          tiers: 'xh ll'
        }
      ]
    },
    {
      title: '琉璃幻仙',
            blocks: [
        {
          type: 'card',
          title: '5、6选箱',
          content: '曦幻幻仙有星先开1星腾蛇，曦幻幻仙没星先开1星白泽，之后腾蛇白泽平均升星，优先腾蛇。',
          tiers: 'jx ll',
          note: '腾蛇对手有4个曦幻幻仙的情况下（品级压制的原因），腾蛇白泽强度差不多，最多腾蛇强一点差距极其微小。对手曦幻幻仙越少，腾蛇比白泽越强。'
        },
        {
          type: 'flow',
          steps: ['1星毕方', '0星谛听', '一直升毕方'],
          tiers: 'll',
          note: '3、4选箱'
        },
        {
          type: 'info',
          content: '如果毕方上不了阵，那就不升1星毕方先开图鉴。',
          tiers: 'll'
        },
        {
          type: 'flow',
          steps: ['1星天狗', '0星应龙', '一直升天狗'],
          tiers: 'll',
          note: '1、2选箱'
        },
        {
          type: 'info',
          content: '如果天狗上不了阵，那就不升1星天狗先开图鉴。',
          tiers: 'll'
        }
      ]
    },
    {
      title: '金霄幻仙',
            blocks: [
        {
          type: 'flow',
          steps: ['1星赑屃', '开完所有图鉴', '5星赑屃', '随便升，单升5星去协阵'],
          tiers: 'ct jx',
          note: '5、6选箱'
        },
        {
          type: 'flow',
          steps: ['1星三兔', '开完所有图鉴', '5星三兔', '随便升，单升5星去协阵'],
          tiers: 'ct jx',
          note: '1234选箱'
        }
      ]
    },
    {
      title: '赤魇及以下幻仙',
            blocks: [
        {
          type: 'info',
          content: '开完图鉴后随便升哪个，一个一个单升5星去协阵。',
          tiers: 'zx ct'
        }
      ]
    }
  ]
};
