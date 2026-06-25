# AI 接手手册 · 道友攻略站 (DaoYou)

> **目标**：仅需阅读本文档+项目档案.md即可在10分钟内理解项目并开始开发。

---

## 1. 项目概况

**道友攻略站**是一个纯静态游戏攻略网站，基于 Astro 5.0 构建，部署在 GitHub Pages。

- **不是**：React/Vue SPA、有后端API、需要数据库
- **是**：生成静态 HTML 的 SSG、纯前端交互、零运行时依赖
- **内容**：手游《道友请留步》的开箱攻略、商店购买指南、养成系统攻略
- **来源**：攻略作者"笑语@TapTap"

---

## 2. 项目运行方式

```bash
# 安装依赖（仅一次，通常在项目根目录）
cd D:\ma\daoyou
npm install

# 启动开发服务器（热更新）
npm run dev
# 默认 http://localhost:4321/DaoYou/

# 构建生产版本
npm run build
# 输出到 dist/

# 预览生产构建
npm run preview
```

**注意**：本地开发访问路径需要带 `/DaoYou/` 前缀（例如 `/DaoYou/kaixiang/`），因为 `astro.config.mjs` 中 `base: '/DaoYou'`。

---

## 3. 项目修改规范

### 全局规则

1. **所有页面链接必须使用 `import.meta.env.BASE_URL`**（即 `/DaoYou/`），不要硬编码路径
2. **页面标题格式**：`"具体页面 · 道友攻略"`，保持一致性
3. **攻略内容来源标注**：必须保留 "笑语@TapTap" 的来源说明
4. **新增组件**：放在 `src/components/`，遵循现有命名规范（PascalCase.astro）
5. **新增交互逻辑**：放在 `src/modules/`，在 `main.ts` 中初始化

### CSS 变量优先

所有颜色/间距/字体必须使用 CSS 变量（定义在 `src/styles/_variables.css`），**禁止硬编码颜色值**。例如：
- ❌ `color: #8B5CF6;`
- ✅ `color: var(--accent);`

### 暗色/亮色双主题

新增样式必须通过 CSS 变量支持双主题。如需添加色调变量，在 `:root` 和 `[data-theme="light"]` 两次定义。

---

## 4. 页面修改位置

### 要改某个页面的内容？

| 页面 | 文件 |
|------|------|
| 首页 | `src/pages/index.astro` |
| 开箱攻略首页 | `src/pages/kaixiang/index.astro` |
| 神仙攻略 | `src/pages/kaixiang/shenxian.astro` |
| 天书攻略 | `src/pages/kaixiang/tianshu.astro` |
| 星姬攻略 | `src/pages/kaixiang/xingji.astro` |
| 幻仙攻略 | `src/pages/kaixiang/huanxian.astro` |
| 宠物攻略 | `src/pages/kaixiang/chongwu.astro` |
| 灵武攻略 | `src/pages/kaixiang/lingwu.astro` |
| 元神攻略 | `src/pages/kaixiang/yuanshen.astro` |
| 法宝攻略 | `src/pages/kaixiang/fabao.astro` |
| 装备攻略 | `src/pages/kaixiang/zhuangbei.astro` |
| 道具多选箱 | `src/pages/kaixiang/duoxuan.astro` |
| 日常运营首页 | `src/pages/richang/index.astro` |
| 商店购买 | `src/pages/richang/shop.astro` |
| 活动购买兑换 | `src/pages/richang/huodong.astro` |
| 养成系统首页 | `src/pages/yangcheng/index.astro` |
| 神藏系统 | `src/pages/yangcheng/shencang.astro` |

**页面结构模式（详情页标准模板）**：
```astro
<BaseLayout title="页面标题" page="分类" current="页面标识">
  <NavBar currentPage="/当前路径/" navItems={navItems} />
  <main>
    <Breadcrumb items={[{href:'...',label:'...'}, {label:'当前页'}]} />
    <SearchBar />          <!-- 可选 -->
    <TierBar />            <!-- 可选 -->
    <section id="xxx">
      <h2>标题</h2>
      <!-- 攻略内容 -->
    </section>
  </main>
  <TOCPanel />             <!-- 可选 -->
  <BackToTop />
</BaseLayout>
```

---

## 5. 样式修改位置

| 要改什么 | 文件 |
|----------|------|
| 颜色、字体、间距等设计Token | `src/styles/_variables.css` |
| 全局基础样式（reset、导航栏、body布局） | `src/styles/base.css` |
| 组件样式（卡片、表格、徽章、搜索、TOC…） | `src/styles/components.css` |

**样式文件加载链**：
```
main.css → _variables.css (Token定义)
        → base.css      (基础重置+导航)
        → components.css (组件样式)
```

**新增组件时的样式**：添加到 `components.css` 末尾，用 `/* ===== 组件名 ===== */` 注释分隔。

---

## 6. 数据修改位置

### 导航菜单数据

有两种，各司其职：

| 文件 | 用途 |
|------|------|
| `src/data/navItems.ts` | **全局导航**（详情页左侧sidebar用） |
| `src/lib/navItems.ts` | **首页简化导航**（Hub页三大分类） |

新增页面后，必须在 `src/data/navItems.ts` 的对应数组中添加 NavItem。

### 品质等级系统

品质等级定义在 `src/components/TierBar.astro` 的默认 `tiers` 数组。如需添加新品质等级：
1. `_variables.css` 添加颜色Token（如 `--new`、`--new-bg`）
2. `components.css` 添加 `.badge-new` 样式
3. `TierBar.astro` 的 `tiers` 数组添加新选项

---

## 7. 新增页面的方法

### 步骤

1. **在 `src/pages/` 对应分类目录创建 `.astro` 文件**（例如 `src/pages/kaixiang/xinzeng.astro`）
2. **复制已有详情页作为模板**（推荐复制 `shenxian.astro`）
3. **修改页面 Frontmatter**：
   ```astro
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';
   // ... 其他 import
   const navItems = kaixiangNavItems;  // 选择对应导航数组
   ---
   ```
4. **设置 BaseLayout props**：`title`、`page`（分类）、`current`（页面标识）
5. **更新 NavBar**：`currentPage` 设为新页面路径
6. **更新导航数据**：在 `src/data/navItems.ts` 中向对应数组添加新条目
7. **构建验证**：`npm run build` 确认 dist 中生成了对应 HTML

### 分类总览页 vs 详情页

- **分类总览页**（如 `kaixiang/index.astro`）：使用 `hub-grid` + `hub-card` 布局，列出子页面链接，**无** SearchBar/TierBar/TOCPanel
- **详情页**（如 `kaixiang/shenxian.astro`）：包含 `SearchBar` + `TierBar` + `TOCPanel`，攻略内容用 `<section>` + `.card` + `.flow` + `table` 等组件编写

---

## 8. 新增功能的方法

### 新增前端交互功能

1. 在 `src/modules/` 创建新 TS 文件（如 `new-feature.ts`）
2. 导出初始化函数（如 `export function initNewFeature(): void`）
3. 在 `src/modules/main.ts` 的 `initDaoyouApp()` 中调用
4. 如需与搜索/筛选联动，使用 CustomEvent 机制：
   ```typescript
   // 触发
   document.dispatchEvent(new CustomEvent('my-event', { detail: { ... } }));
   // 监听
   document.addEventListener('my-event', handler);
   ```

### 现有事件系统
| 事件名 | 触发时机 | 用途 |
|--------|---------|------|
| `tier-changed` | TierBar 按钮点击 | 通知 TOC 重建 + 搜索重跑 |

### 新增 Astro 组件

1. 在 `src/components/` 创建 `.astro` 文件
2. 如果需要前端 JS，同时创建同名 `.ts` 模块
3. 在需要的页面中 import 并使用
4. 在 `components.css` 添加样式

---

## 9. 开发注意事项

### ⚠️ 关键陷阱

1. **路径基址**：所有 `<a href>` 必须使用 `BASE_URL` 或确保以 `/DaoYou/` 开头
2. **静态输出**：不能使用 Astro 的 SSR 特性（`output: 'static'`），如 `Astro.cookies`、API routes
3. **data-tiers 属性**：品质筛选依赖此属性。攻略内容块如需被筛选，必须添加正确的 `data-tiers="xh ll jx"` 属性
4. **section id**：TOC 模块通过 `section#id` 识别内容区域，每个大章节必须有 id
5. **两个 navItems 文件**：别改错！`src/data/navItems.ts` 是全站导航，`src/lib/navItems.ts` 仅首页用
6. **不要删除 BackToTop 组件之二选一**：`BackToTop.astro`渲染一个按钮，`back-to-top.ts`又创建一个。目前通过 id 检查避免重复，如果重构请注意
7. **BOM 警告**：`huodong.astro` 开头有 UTF-8 BOM 字符，编辑时注意
8. **GitHub Pages 部署**：push 到 master 分支会自动触发部署。dist 目录在 .gitignore 中，不要提交

### 🔗 外部依赖

- **无运行时依赖**：交互模块均为原生 JS/TS，不需要 npm 包
- **仅构建依赖**：`astro`、`@astrojs/sitemap`、`typescript`

### 📝 内容编写指南

使用这些 HTML 类名来编写攻略内容：

| 类名 | 用途 |
|------|------|
| `.card` / `.card-title` | 玻璃质感卡片（攻略建议块） |
| `.flow` / `.step` / `.arrow` | 开箱路线流（步骤→箭头→步骤） |
| `table` | 数据对比表（星级替换、胜率等） |
| `.info` | 提示信息（紫色左边框） |
| `.warn` | 警告信息（红色左边框） |
| `.badge-{xh/ll/jx/ct/zx/qy/hc}` | 品质等级徽章 |
| `.route` / `.route li` | 路线列表（→ 符号前缀） |
| `.guide-table` / `.cat-label` | 活动购买表格（分类标签） |

### 🚀 快速上手检查清单

- [ ] 读完了项目档案.md
- [ ] 理解了三个分类（开箱/日常/养成）
- [ ] 知道 `_variables.css` 控制所有颜色
- [ ] 知道 `data/navItems.ts` 控制侧边栏导航
- [ ] 知道详情页模板 = BaseLayout + NavBar + SearchBar + TierBar + TOCPanel + BackToTop
- [ ] 知道所有路径前缀必须带 `/DaoYou/`
- [ ] 知道 `data-tiers` 属性控制品质筛选
- [ ] 知道改 CSS 无需改源码，只需改变量
