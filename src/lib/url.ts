/**
 * 道友攻略站 · URL 工具
 *
 * ⚠️ 关键：Astro 的 import.meta.env.BASE_URL 在本项目返回 "/DaoYou"（无尾斜杠），
 * 直接拼接会得到 "/DaoYoukaixiang/..." 这种坏链接。
 * 所有内部链接一律使用 withBase()，不要再手写 ${BASE}xxx。
 */

const RAW = import.meta.env.BASE_URL || '/';

/** 保证以单个 "/" 结尾的 base，例如 "/DaoYou/" */
export const BASE: string = RAW.endsWith('/') ? RAW : RAW + '/';

/** 拼接内部链接：withBase('kaixiang/shenxian/') → '/DaoYou/kaixiang/shenxian/' */
export function withBase(path = ''): string {
  return BASE + String(path).replace(/^\//, '');
}
