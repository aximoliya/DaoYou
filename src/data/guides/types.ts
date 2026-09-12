/**
 * 攻略数据结构定义
 * 所有攻略页面的数据格式统一在这里定义
 */

/** 基础内容块 */
export interface TextBlock {
  type: 'text';
  content: string;
}

/** 提示信息块 */
export interface InfoBlock {
  type: 'info';
  content: string;
  tiers?: string;
}

/** 警告信息块 */
export interface WarnBlock {
  type: 'warn';
  content: string;
  tiers?: string;
}

/** 卡片块 */
export interface CardBlock {
  type: 'card';
  title: string;
  content: string;
  tiers?: string;
  note?: string;
}

/** 流程步骤块 */
export interface FlowBlock {
  type: 'flow';
  steps: string[];
  tiers?: string;
  note?: string;
}

/** 表格块 */
export interface TableBlock {
  type: 'table';
  headers: string[];
  rows: string[][];
  tiers?: string;
}

/** 路线列表块 */
export interface RouteBlock {
  type: 'route';
  items: string[];
  tiers?: string;
}

/** 标题块 */
export interface HeadingBlock {
  type: 'heading';
  level: 2 | 3;
  text: string;
  badge?: string;
  icon?: string;
}

/** 内容块联合类型 */
export type ContentBlock = 
  | TextBlock 
  | InfoBlock 
  | WarnBlock 
  | CardBlock 
  | FlowBlock 
  | TableBlock 
  | RouteBlock 
  | HeadingBlock;

/** 攻略章节 */
export interface GuideSection {
  title: string;
  badge?: string;
  tiers?: string;
  blocks: ContentBlock[];
}

/** 完整攻略数据 */
export interface GuideData {
  id: string;
  title: string;
  icon: string;
  category: string;
  categoryHref: string;
  updateDate: string;
  version: string;
  sourceUrl?: string;
  sourceAuthor?: string;
  sections: GuideSection[];
}
