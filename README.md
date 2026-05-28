# DaoYou - 导游指南静态站点

基于 Astro 5.0 构建的静态网站，已配置 GitHub Pages 自动部署。

## 项目结构

```
src/
├── pages/          # 页面组件
├── components/     # 可复用组件
├── layouts/        # 布局组件
├── modules/        # 工具模块
├── styles/         # 样式文件
└── data/           # 数据文件（如导航项）
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。每次推送到 `main` 分支时，工作流会自动构建并部署到 `gh-pages` 分支。

**访问地址**: https://aximoliya.github.io/DaoYou

### 部署状态

![GitHub Pages](https://github.com/aximoliya/DaoYou/actions/workflows/deploy.yml/badge.svg)

## 技术栈

- [Astro 5.0](https://astro.build/) - 静态站点生成器
- TypeScript - 类型安全
- CSS Variables - 暗色/亮色主题支持
- GitHub Pages - 静态托管

## 注意事项

1. **Node 版本**: 项目使用 Node.js v20 构建（GitHub Actions 配置），本地开发建议使用 Node 20+。
2. **构建输出**: 配置为纯静态输出（`output: 'static'`）。
3. **基础路径**: 已配置 `base: '/DaoYou'` 以适配 GitHub Pages 子路径部署。

## 许可证

MIT