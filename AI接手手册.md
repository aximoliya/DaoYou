# AI 接手手册 · 道友攻略站 (DaoYou)

> 配套文档：《项目档案.md》讲「这是什么」；本文讲「怎么改」。
> 最后更新：2026-09-28（UI 重设计 v5）

---

## 1. 项目概况

| 项 | 值 |
|----|-----|
| 项目 | 道友攻略站 —— 手游《道友请留步》静态攻略站 |
| 目录 | `D:\ma\daoyou` |
| 框架 | Astro 5 + TypeScript，纯静态 |
| 分支 | `master` |
| 远程 | `https://github.com/aximoliya/DaoYou.git` |
| 线上 | `https://aximoliya.github.io/DaoYou` |
| base | `/DaoYou` |
| 页面数 | 19 |
| 内容来源 | TapTap 作者「笑语」 |

---

## 2. 项目运行方式

在项目根目录（`D:\ma\daoyou`）执行：

```bash
npm install          # 安装依赖（仅首次）
npm run dev          # 开发服务器，http://localhost:4321/DaoYou/
npm run build        # 构建生产版本 → dist/
npm run preview      # 预览 dist/，http://localhost:4321/DaoYou/
```

> ⚠️ 部署是 `git push` 后由 GitHub Actions 自动跑 `npm run build` 并发布。
> **未经用户明确许可，绝对不要 `git push`。**

---

## 3. 项目修改规范

### 全局规则
1. **先验证再声称完成**。改完必须 `npm run build`，并且用实际文件内容确认（`read_file` / 脚本读 `dist/*.html`），不要只凭执行日志下结论。
2. **内容改动只动 `src/data/`**，不要改 `.astro` 模板。
3. **样式改动走 CSS 变量**，不要在组件里写死颜色。
4. **保持小而美**：不加 CMS、用户系统、评论、多语言、新框架。
5. 中文输出，进度用 P0/P1/P2 表达。

### 路径前缀
站点 base 是 `/DaoYou`，所有手写链接必须：

```astro
const BASE = import.meta.env.BASE_URL;   // = '/DaoYou/'
<a href={`${BASE}kaixiang/`}>…</a>
```
（相对链接 `<a href="shenxian/">` 也可，但跨目录时容易出错。）

### 主题
- **默认浅色**（`:root` 即浅色国风）。
- 深色是覆盖：`[data-theme="dark"] { … }`，定义在 `_variables.css`。
- 切换逻辑在 `src/modules/theme.ts`，按钮 id 是 `#theme-toggle`（在 `TopBar.astro`）。
- 首屏防闪烁脚本内联在 `BaseLayout.astro` 的 `<head>`。

---

## 4. 页面修改位置

### 想改某个攻略页的内容？
**不要改 `.astro`**，改对应的数据文件：

| 页面 | 数据文件 |
|------|----------|
| 神仙 | `src/data/guides/shenxian.ts` |
| 天书 | `src/data/guides/tianshu.ts` |
| 星姬 | `src/data/guides/xingji.ts` |
| 幻仙 | `src/data/guides/huanxian.ts` |
| 宠物 | `src/data/guides/chongwu.ts` |
| 灵武 | `src/data/guides/lingwu.ts` |
| 元神 | `src/data/guides/yuanshen.ts` |
| 法宝 | `src/data/guides/fabao.ts` |
| 装备 | `src/data/guides/zhuangbei.ts` |
| 道具多选箱 | `src/data/guides/duoxuan.ts` |
| 商店购买 | `src/data/guides/shop.ts` |
| 活动购买兑换 | `src/data/guides/huodong.ts` |
| 神藏系统 | `src/data/guides/shencang.ts` |
| 归墟葬星图测评 | `src/data/reviews/guixu.ts` |

页面文件本身只是一行：`<GuideRenderer guide={xxxGuide} currentPath="…" />`

### 想改首页？
`src/pages/index.astro` —— Hero、4 个精选入口、`latestGuides`、全部分类。
首页「最新攻略」列表数据在 `src/data/latestGuides.ts`。

### 想改导航？（左侧栏 / 页脚 / 热门标签）
`src/data/sidebarNav.ts`（侧栏结构 + `hotTags`）、`src/components/SiteFooter.astro`。

### 想改上一篇/下一篇的顺序？
`src/data/navItems.ts` 里的 `kaixiangNavItems` / `richangNavItems` / `yangchengNavItems` / `reviewsNavItems`。

### 想改搜索能搜到的东西？
`src/components/GlobalSearch.astro` 顶部的 `pages` 数组。**新增页面必须在此补一条。**

---

## 5. 样式修改位置

| 文件 | 负责 |
|------|------|
| `src/styles/_variables.css` | ★ 设计令牌：颜色/字号/间距/圆角/阴影/字体（浅色 + 深色覆盖） |
| `src/styles/base.css` | 重置 + 三栏布局（`.app-shell` / `.topbar` / `.sidebar` / `.app-main` / `.rail` / `.site-footer`）+ 响应式 |
| `src/styles/components.css` | 攻略正文组件：卡片、表格、流程、徽章、面包屑、TOC、翻页 |
| `src/styles/redesign.css` | ★ v5 新组件：Hero、分类卡、攻略列表、模块卡、右栏卡、顶栏搜索 |
| `src/styles/main.css` | 按顺序 `@import` 以上四个（改顺序会改变层叠优先级） |

### 常见改色
```css
/* 想换主色 → 只改 _variables.css 里的 --accent 一族 */
--accent: #4E83F7;
--accent-hover: #3A6FE8;
--accent-soft: #EAF1FE;
--accent-gradient: linear-gradient(135deg, #6DA2FC, #4E83F7);
```

### 想改布局断点
`base.css`：`1180px`（收起右栏）、`860px`（切移动端抽屉）。
改断点时记得同步 `src/modules/toc.ts` 和 `src/modules/sidebar.ts` 里的 `innerWidth <= 860`。

---

## 6. 数据修改位置

### 攻略内容
`src/data/guides/*.ts`，格式见《项目档案.md》「数据结构说明」。

一个最小示例：

```ts
{
  title: '曦幻天书',
  badge: 'xh',                        // 可选：品质徽章
  blocks: [
    { type: 'card',  title: '主核', content: '丹心 ≈ 洛水 ≥ 邪魔 ≥ 归墟' },
    { type: 'info',  content: '说明文字…' },
    { type: 'warn',  content: '<b>强调警告</b>' },
    { type: 'flow',  steps: ['A', 'B', 'C'], note: '出书顺序' },
    { type: 'route', items: ['第一条', '第二条'] },
    { type: 'table', headers: ['列1','列2'], rows: [['a','b']] },
    { type: 'text',  content: '普通段落' },
    { type: 'heading', level: 3, text: '小标题' },
  ]
}
```

> `content` / `items` / `note` 支持 HTML（走 `set:html`），可用 `<b>` `<br>` 等。

### 品质徽章
代码 → 颜色映射写死在 `GuideRenderer.astro` 与 `components.css`：
`xh`曦幻 / `ll`琉璃 / `jx`金霄 / `ct`赤魇 / `zx`紫虚 / `qy`青曜 / `hc`幻彩

### 时效标记
每个数据文件顶部的 `updateDate` 和 `version`，由 `TimeBadge.astro` 渲染成 `更新：<version> · <date>`。

---

## 7. 新增页面的方法

### A. 新增一个「详情页」（最常见）

1. 在 `src/data/guides/` 建 `xxx.ts`：
   ```ts
   import type { GuideData } from './types';
   export const xxxGuide: GuideData = {
     id: 'xxx', title: '十一、新系统', icon: '🆕',
     category: '开箱攻略', categoryHref: '/kaixiang/',
     updateDate: '2026-10-01', version: '版本名',
     sections: [ /* … */ ],
   };
   ```
2. 建页面 `src/pages/kaixiang/xxx.astro`（3 行）：
   ```astro
   ---
   import GuideRenderer from '../../components/GuideRenderer.astro';
   import { xxxGuide } from '../../data/guides/xxx';
   ---
   <GuideRenderer guide={xxxGuide} currentPath="/kaixiang/xxx/" />
   ```
3. **登记四处**（缺一不可）：
   - `src/data/navItems.ts` → 加入 `kaixiangNavItems`（决定上一篇/下一篇）
   - `src/data/sidebarNav.ts` → 加入对应分组的 `children`（侧栏）
   - `src/data/latestGuides.ts` → 加一条（首页）
   - `src/components/GlobalSearch.astro` → `pages` 数组加一条（搜索）
4. `npm run build` 验证。

### B. 新增一个「分类总览页」

参考 `src/pages/kaixiang/index.astro`：用 `AppShell` 包裹 + `Breadcrumb` + `TimeBadge` + `.hub-grid` 卡片。
同时更新 `src/data/navItems.ts` 加一份 `xxxNavItems`，并在 `src/data/sidebarNav.ts` 加一个分组。

---

## 8. 新增功能的方法

### 新增前端交互
1. 在 `src/modules/` 建 `my-feature.ts`，导出 `initMyFeature()`。
2. 在 `src/modules/main.ts` 里 import 并调用。
3. 需要组件挂载点时，在对应 `.astro` 里放容器元素 + id。
4. 脚本随 `BaseLayout.astro` 底部 `<script>` 打包加载（`import { initDaoyouApp } from '../modules/main.ts'`）。

### 现有交互模块
| 模块 | 作用 |
|------|------|
| `theme.ts` | 深浅主题（`#theme-toggle`） |
| `sidebar.ts` | 侧栏折叠状态持久化 + 移动端抽屉（`#sidebar` / `#hamburger` / `#overlay`） |
| `toc.ts` | 生成目录、滚动高亮、移动端抽屉（`#toc-panel`） |
| `back-to-top.ts` | `#back-to-top` |
| `accordion.ts` | 手风琴（当前无页面使用） |

> ⚠️ 侧栏的 id 是 **`sidebar`**，**不是 `nav`**。旧代码里所有 `#nav` 引用已废弃。
> 页面根元素不要用 `<nav>`，历史上的全局 `nav { position: fixed }` 曾把布局撑坏。侧栏用的是 `<aside class="sidebar">`。

### 新增 Astro 组件
放 `src/components/`，用 `BaseLayout` / `AppShell` 组合。布局类组件请沿用 `Slot` 约定（`AppShell` 支持 `slot="rail"` 往右栏塞内容）。

---

## 9. 开发注意事项

### ⚠️ 关键陷阱
1. **不要 `git push`**，除非用户明确要求。
2. **base 前缀**：手写内部链接必须带 `import.meta.env.BASE_URL`。
3. **`<details>` 折叠分组**：`Sidebar.astro` 用原生 `<details>`，`sidebar.ts` 负责恢复 `open` 状态；首次访问默认全展开。
4. **TOC 依赖 `section[id]`**：`toc.ts` 扫描 `section[id]` 和其中的 `h3` / `.card-title`。详情页根 `<section>` 必须有 `id`（`GuideRenderer` 用 `guide.id`）。
5. **右栏在 ≤1180px 隐藏**：需要移动端也看到的内容（如 TOC）必须额外提供抽屉按钮。
6. **搜索索引是手写的**：忘记更新 `GlobalSearch.astro` 的 `pages` 数组，新页面就搜不到。
7. **样式文件 import 顺序**：`main.css` 里 `redesign.css` 必须在 `components.css` 之后，否则新组件样式会被覆盖。

### 🖼️ 首页 Hero 图
- 文件：`public/hero-banner.webp`（主）+ `public/hero-banner.png`（兜底）
- 组件：`src/components/HeroBanner.astro`（`<picture>` 双格式）
- 标题文字**已内嵌在图中**，所以页面里用 `sr-only` 的 `<h1>` 保留 SEO/无障碍语义 —— 换图时别在图上再加一层文字。
- 原图 934×235（≈4:1）。控制高度的是 `redesign.css` 里的 `aspect-ratio: 934/235`；换比例不同的图要同步改这个值。
- ≤640px 时切 `aspect-ratio: 2.1/1` + `object-position: 26%`，保证左侧标题不被裁掉。
- 换图流程：`PIL` 转 WebP（q≈85 即可，原 PNG 373KB → WebP 39KB），两张都放 `public/`。

### 🔗 外部依赖
- 标题字体 `Ma Shan Zheng` 来自 Google Fonts（`BaseLayout.astro` 中 `<link>`）。若需离线，须改自托管。
- 无其他外部运行时依赖。

### 📝 内容编写指南
- 内容忠实转述 TapTap 原文，不要自行推断数值。
- 每次更新内容，同步改该数据文件的 `updateDate` / `version`。
- 批量更新内容时，同时更新：`src/pages/index.astro` 底部日期、`latestGuides.ts`、`GlobalSearch.astro` 关键词。

### 🚀 快速上手检查清单
```
[ ] npm install && npm run dev      → 本地能打开
[ ] 读懂 src/data/guides/types.ts   → 数据结构
[ ] 读一个数据文件 + 对应 .astro     → 理解数据驱动
[ ] 读 AppShell.astro + base.css    → 理解三栏外壳
[ ] 读 _variables.css               → 理解设计令牌
[ ] 改一句话 → build → 确认 dist 产物真的变了
```
