import type { GuideData } from './types';

export const fabaoGuide: GuideData = {
  id: 'fabao',
  title: '八、法宝',
  icon: '🔮',
  category: '开箱攻略',
  categoryHref: '/kaixiang/',
  updateDate: '2026-09-01',
  version: '曦幻三版本',
  sourceUrl: 'https://www.taptap.cn/moment/123858008127046416',
  sourceAuthor: '笑语@TapTap',
  sections: [
    {
      title: '通用规则',
      badge: 'xh',
      blocks: [
        {
          type: 'info',
          content: '攻击防御法宝要平均升星，主副核先升攻击防御哪个都行，三核以外先升防御法宝。精炼主核升满后，其他5个单位平均升。熔铸按核度单升。',
          tiers: 'xh'
        }
      ]
    },
    {
      title: '曦幻/琉璃法宝',
      badge: 'll',
      blocks: [
        {
          type: 'flow',
          steps: ['能出手两次的单位给一对1星法宝', '主副核平均3星', '全体1星', '主核5星', '三核3星', '按核度一路5星'],
          tiers: 'll xh'
        },
        {
          type: 'info',
          content: '给能出手两次的单位一对1星法宝（也就是神仙加幻仙一共活1.5~2回合，能出手次数越多，效果越好）。琉璃法宝给曦幻法宝化灵也是这样升，把星理解为阶。',
          tiers: 'll xh'
        }
      ]
    },
    {
      title: '法宝替换',
      blocks: [
        {
          type: 'warn',
          content: '任何品质法宝都是<b>双1星新法宝替换双5星老法宝</b>，要新法宝吞噬掉老法宝，如果不把老法宝吞掉是不能达成替换的，装备与法宝同理。'
        }
      ]
    },
    {
      title: '金霄/赤魇法宝',
            blocks: [
        {
          type: 'info',
          content: '全体都装上1星后（不像曦幻法宝那样有存活需求，就算秒死也装上1星），或者给更高品质法宝化灵1阶后，再平均升主副核，之后按核度一路5星升过去。',
          tiers: 'ct jx'
        },
        {
          type: 'warn',
          content: '注意金霄法宝优先给琉璃法宝化灵，全体琉璃法宝满化灵后，金霄法宝才给曦幻法宝熔铸。',
          tiers: 'ct jx'
        }
      ]
    },
    {
      title: '紫虚及以下法宝',
            blocks: [
        {
          type: 'info',
          content: '按核度单升，其他单位0星就行不用升。',
          tiers: 'zx hc qy'
        }
      ]
    }
  ]
};
