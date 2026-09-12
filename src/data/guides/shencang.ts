import type { GuideData } from './types';

export const shencangGuide: GuideData = {
  id: 'shencang',
  title: '神藏系统',
  icon: '🏛️',
  category: '养成系统',
  categoryHref: '/yangcheng/',
  updateDate: '2026-03-14',
  version: '3.14 版本',
  sourceUrl: 'https://www.taptap.cn/moment/758015604505446931',
  sourceAuthor: '笑语@TapTap',
  sections: [
    {
      title: '核心建议',
      badge: 'xh',
      blocks: [
        {
          type: 'info',
          content: '📋 来源：笑语@TapTap · 6158浏览 · 测试用攻击法人族号，均升实际只会比写的更强'
        },
        {
          type: 'warn',
          content: '<b>核心建议：</b>每有一个节点4(道宫)就升下一个节点4，全体节点4后主副核按节点平均升满，之后再按核度单升。'
        },
        {
          type: 'warn',
          content: '⚠️ 之前删掉的心斋养成可以在置换商店换神藏养成。如果没剩心斋养成，那是你不小心喂建木了。'
        }
      ]
    },
    {
      title: '战力测试',
      badge: 'xh',
      blocks: [
        {
          type: 'heading',
          level: 3,
          text: '🔬 战力测试（使用 8,597 天之炁）'
        },
        {
          type: 'table',
          headers: ['升级路线', '战力', '评价'],
          rows: [
            ['单升', '264,655', '基准'],
            ['单升（多给117天之炁触发节点4）', '265,319', ''],
            ['均2后单升', '264,147', '比单升低'],
            ['均3后单升', '267,652', ''],
            ['均4后单升', '270,997', '⭐ 最高'],
            ['1~5核均4后单升', '270,238', ''],
            ['1~4核均4后单升', '268,222', ''],
            ['1~3核均4后单升', '266,316', '']
          ]
        }
      ]
    },
    {
      title: '胜率测试',
      badge: 'xh',
      blocks: [
        {
          type: 'heading',
          level: 3,
          text: '⚔️ 胜率测试（每项200场，先手胜率）'
        },
        {
          type: 'table',
          headers: ['对比', '胜率', '平均回合'],
          rows: [
            ['均4 vs 单升', '71% vs 46%', '7.56 vs 6.98'],
            ['均4 vs 特意多给的单升', '59% vs 48%', '7.36 vs 7.04'],
            ['均4 vs 均3', '60.5% vs 54%', '7.05 vs 7.12'],
            ['均4 vs 1~5核均4', '54% vs 57%', '7.10 vs 7.28']
          ]
        },
        {
          type: 'info',
          content: '💡 结论：<b>全体均4最强</b>，比单升高25%胜率，比均3高6.5%。1~5核均4和6核均4最终一样。'
        }
      ]
    }
  ]
};
