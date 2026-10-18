import type { GuideData } from './types';

export const xingjiGuide: GuideData = {
  id: 'xingji',
  title: '三、星姬',
  icon: 'star',
  category: '开箱攻略',
  categoryHref: '/kaixiang/',
  updateDate: '2026-09-27',
  version: '豹雉版本',
  sourceUrl: 'https://www.taptap.cn/moment/123858008127046416',
  sourceAuthor: '笑语@TapTap',
  sections: [
    {
      title: '曦幻星姬',
      blocks: [
        {
          type: 'flow',
          steps: ['1星豹', '1星雉', '豹雉双1星', '按3/5/7星节点平均升，优先雉'],
          note: '4选箱'
        },
        {
          type: 'info',
          content: '先开豹是因为更容易替换鹿，并且豹+牛强于雉+鹿（其实这两组合强度几乎没区别，强度差异是牛鹿传灵造成的），后续优先升雉是因为雉比豹强一点点。',
        },
        {
          type: 'warn',
          content: '本代星姬<b>同时升两个远强于单升</b>，不要像之前一样只升一个了。',
        },
        {
          type: 'info',
          content: '白嫖可以在带有星姬的主题活动用两张30额度，或者一张30额度加充两个6元，换10星姬碎片，补上星姬升3星时的碎片缺口。',
        },
        {
          type: 'info',
          content: '预算有限本期主题只能选择一个道具0升1星的，优先升星姬。',
        },
        {
          type: 'warn',
          content: '新区星姬打不过女魃，但星姬的使用时长要比女魃长很多，而且后续女魃离开主核位置后，强度不如星姬。',
        },
        {
          type: 'flow',
          steps: ['1鹿', '0牛', '一直升鹿'],
          note: '2选箱 · 如果鹿上不了阵就0鹿后开0牛'
        },
        {
          type: 'info',
          content: '一直升鹿传灵更强，另一个传灵位置由琉璃的鼠代替。',
        },
        {
          type: 'card',
          title: '星级替换',
          content: '雉豹 ↔ 牛鹿',
          note: '详见原帖配图'
        }
      ]
    },
    {
      title: '琉璃星姬',
      blocks: [
        {
          type: 'info',
          content: '<b>4选箱：</b>开完图鉴后一直升鼠。',
        },
        {
          type: 'info',
          content: '如果后续有免费的2选箱来源，那就由2选箱开蛇燕图鉴，如果2选箱里还有九天星魂、星陨石之类的高级材料，开完图鉴后只选材料。',
        }
      ]
    },
    {
      title: '金霄及以下',
      blocks: [
        {
          type: 'text',
          content: '开完图鉴后单升，随便单升哪个。如果箱子里还有九天星魂、星陨石之类的高级材料，开完图鉴后只选材料。'
        }
      ]
    }
  ]
};
