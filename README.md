# DaoYou - 道友请留步攻略站

基于 Astro 5 构建的静态攻略站，部署在 GitHub Pages：https://aximoliya.github.io/DaoYou

## 开发

```bash
npm install
npm run build:assets   # 首次必须执行一次，生成 PNG 图片资源（见下）
npm run dev            # http://localhost:4321/DaoYou/
npm run build          # 产物输出到 dist/
npm run preview        # 本地预览 dist
```

## 图片资源

`public/` 下的社交分享图与 PWA 图标由脚本从 SVG 栅格化而来，**不手工维护**：

| 产物 | 来源 | 说明 |
| --- | --- | --- |
| `og-image.png` (1200×630) | `og-image.svg` | 社交平台不渲染 SVG，分享卡片必须是 PNG |
| `apple-touch-icon.png` (180×180) | `favicon.svg` | iOS 不支持 SVG 图标 |
| `pwa-192x192.png` / `pwa-512x512.png` | `favicon.svg` | PWA manifest 图标 |

改过 `og-image.svg` 或 `favicon.svg` 后重新执行 `npm run build:assets`。

`npm run build` 前会自动校验这些文件是否存在（`prebuild` 钩子），缺失时直接失败并给出提示，
避免把 404 的分享图部署上线。

## 项目结构

```
src/
├── pages/          # 路由（文件路径即 URL）；404.astro 为全站兜底页
├── components/     # 可复用组件（AppShell 三栏骨架、GuideRenderer 攻略正文渲染等）
├── layouts/        # BaseLayout：head 元信息、主题防闪烁
├── modules/        # 客户端交互：主题、侧栏、目录、回顶部、手风琴
├── lib/url.ts      # BASE / withBase()，内部链接一律用它拼接
├── styles/         # _variables.css 设计令牌 + base / components / redesign
└── data/           # 站点内容：导航、攻略正文、测评正文
tools/
└── make-assets.mjs # 图片资源生成与校验
```

## 约定

- 内部链接不要手写 `${BASE}xxx`，统一用 `src/lib/url.ts` 的 `withBase()`。
  项目 `base` 为 `/DaoYou`，而 `import.meta.env.BASE_URL` 返回的是**不带尾斜杠**的值，
  直接拼接会得到 `/DaoYoukaixiang/` 这类坏链接（分享图 URL 也曾因此丢掉 base 变成 404）。
- 依赖站外 CDN 会增加首屏阻塞风险，国内访问尤其明显；标题字体目前只使用系统字体栈。

## 部署

推送到 `master` 分支会触发 GitHub Actions（`.github/workflows/deploy.yml`）自动构建并发布到
GitHub Pages。工作流使用 `actions/upload-pages-artifact` + `actions/deploy-pages` 发布
`dist/` 产物，**不使用** `gh-pages` 分支。

### 部署状态

![GitHub Pages](https://github.com/aximoliya/DaoYou/actions/workflows/deploy.yml/badge.svg)

## 技术栈

- [Astro 5](https://astro.build/) - 静态站点生成器（`output: 'static'`）
- TypeScript - 类型安全（`astro/tsconfigs/strict`）
- CSS Variables - 亮色/暗色主题
- GitHub Pages - 静态托管

## 注意事项

1. **Node 版本**: 构建使用 Node.js 20（GitHub Actions 配置），本地开发建议 Node 20+。
2. **基础路径**: `base: '/DaoYou'` 用于适配 GitHub Pages 子路径部署。

## 许可证

MIT
