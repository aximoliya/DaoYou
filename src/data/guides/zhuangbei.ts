import type { GuideData } from './types';

export const zhuangbeiGuide: GuideData = {
  id: 'zhuangbei',
  title: '九、装备',
  icon: '🛡️',
  category: '开箱攻略',
  categoryHref: '/kaixiang/',
  updateDate: '2026-09-01',
  version: '曦幻二版本',
  sections: [
    {
      title: '装备替换',
      badge: 'xh',
      blocks: [
        {
          type: 'info',
          content: '💡 高品质装备0星或0阶即可替换低品质装备满星或满阶。'
        }
      ]
    },
    {
      title: '曦幻装备',
            blocks: [
        {
          type: 'text',
          content: '从上往下代表开启顺序，数字=化神阶数，优先武器护符。'
        },
        {
          type: 'card',
          title: '升级路线',
          content: '',
          tiers: 'll xh',
          note: '1. 主核1\n2. 主核11\n3. 主核11，副核11，三核11\n4. 主核111，副核11，三核11\n5. 主核1111，副核11，三核11\n6. 主核1111，副核1111，三核1111\n7. 主核1111，副核1111，三核1111，四核0，五核0，六核0\n8. 主核2211，副核2211，三核2211，四核0，五核0，六核0\n9. 主核2211，副核2211，三核2211，四核000，五核000，六核000（先四核3个0，再五核3个0）\n10. 按核度排序升满'
        }
      ]
    },
    {
      title: '琉璃装备',
            blocks: [
        {
          type: 'text',
          content: '优先给曦幻装备回响，武器/护符回响5阶后（更建议这样，花费的碎片更少），或者武器/护符/盔甲/鞋子回响3阶后，再给下一个单位回响或佩戴，佩戴升1111阶化神，主副三核都这样弄好后，按核度排序升满回响或化神。'
        }
      ]
    },
    {
      title: '金霄装备',
            blocks: [
        {
          type: 'text',
          content: '优先给琉璃装备回响，怎么弄跟上面琉璃装备写的一样。全体都装上满阶金霄装备后，才把金霄装备拿去熔铸。'
        }
      ]
    },
    {
      title: '赤魇及以下',
            blocks: [
        {
          type: 'text',
          content: '升满一套后才开下一套，三套升满后，给四五六核各一套0阶的，之后多余的都给更高品质装备熔铸了，注意四个部位平均开。'
        }
      ]
    }
  ]
};
