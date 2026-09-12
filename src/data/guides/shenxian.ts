import type { GuideData } from './types';

export const shenxianGuide: GuideData = {
  id: 'shenxian',
  title: '一、神仙',
  icon: '👤',
  category: '开箱攻略',
  categoryHref: '/kaixiang/',
  updateDate: '2026-09-01',
  version: '曦幻三版本',
  sourceUrl: 'https://www.taptap.cn/moment/123858008127046416',
  sourceAuthor: '笑语@TapTap',
  sections: [
    {
      title: '品质说明',
      blocks: [
        {
          type: 'text',
          content: '品质后面的数字代表神仙出来的顺序与强度。打开游戏首页右下角更多→天地通鉴→神仙图鉴，琉璃品质排第一的就是琉璃一，数字越大越强，其他品质同理。'
        }
      ]
    },
    {
      title: '曦幻',
            blocks: [
        {
          type: 'card',
          title: '3选箱',
          content: '按曦幻三主族3星→副族3星→主族5星→副族5星的顺序开。',
          tiers: 'xh'
        },
        {
          type: 'info',
          content: '刚玩一两个月的，可以主族曦幻三先升5星，这个阶段战斗太快了，副族活不下来，3+3星打不过单5星。',
          tiers: 'xh'
        },
        {
          type: 'card',
          title: '2选箱',
          content: '按曦幻二主族3星→副族3星→主族5星→副族5星的顺序开。',
          tiers: 'xh ll'
        },
        {
          type: 'card',
          title: '1选箱',
          content: '按曦幻一主族3星→副族3星→主族5星→副族5星的顺序开。',
          tiers: 'xh ll'
        },
        {
          type: 'warn',
          content: '如果曦幻二三 3星可以开副族了，曦幻一就算才 1 星也跟着开副族。',
          tiers: 'xh ll'
        },
        {
          type: 'warn',
          content: '<b>3选箱绝对不能开曦幻二，2选箱绝对不能开曦幻一。</b>',
          tiers: 'xh ll'
        }
      ]
    },
    {
      title: '琉璃及以下',
            blocks: [
        {
          type: 'info',
          content: '还在上阵就升星，没上阵了就开四族图鉴。三选箱优先开神仙三，二选箱优先开神仙二。',
          tiers: 'll'
        }
      ]
    }
  ]
};
