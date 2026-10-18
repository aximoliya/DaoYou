/**
 * 生成社交分享图与 PWA 图标
 *
 * 用 Astro 已装的 sharp 把 public/*.svg 栅格化成 PNG：
 *   - og-image.svg → og-image.png              1200x630（社交平台不渲染 SVG）
 *   - favicon.svg  → apple-touch-icon.png      180x180 （iOS 不渲染 SVG）
 *   - favicon.svg  → pwa-192x192.png / pwa-512x512.png
 *
 * 用法:
 *   node tools/make-assets.mjs           # 生成
 *   node tools/make-assets.mjs --check   # 只校验产物是否存在（prebuild 用）
 *
 * 注意: 改过 public/og-image.svg 或 favicon.svg 后要重新执行一次生成命令。
 */
import { readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = (f) => path.join(root, 'public', f);

const OUTPUTS = [
  { file: 'og-image.png', from: 'og-image.svg', width: 1200, height: 630, pad: 0 },
  { file: 'apple-touch-icon.png', from: 'favicon.svg', width: 180, height: 180, pad: 22 },
  { file: 'pwa-192x192.png', from: 'favicon.svg', width: 192, height: 192, pad: 23 },
  { file: 'pwa-512x512.png', from: 'favicon.svg', width: 512, height: 512, pad: 61 },
];

const CHECK_ONLY = process.argv.includes('--check');

/** 带内边距的方形图标：把 SVG 画在纯色底上，避免 iOS / maskable 裁切 */
const iconSvg = (svg, size, pad) => {
  const inner = size - pad * 2;
  const body = svg
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#5E90F9"/>
  <g transform="translate(${pad} ${pad}) scale(${inner / 100})">${body}</g>
</svg>`;
};

/** prebuild 校验：产物缺失就让构建失败，而不是把 404 的分享图部署上线 */
function check() {
  const missing = OUTPUTS.filter((o) => !existsSync(pub(o.file)));
  if (missing.length) {
    console.error('\n[make-assets] 缺少以下图片资源：');
    for (const m of missing) console.error(`  - public/${m.file}`);
    console.error('\n请先执行： npm run build:assets\n');
    process.exit(1);
  }
  console.log(`[make-assets] 资源校验通过（${OUTPUTS.length} 个文件）`);
}

async function generate() {
  const sharp = (await import('sharp')).default;

  for (const o of OUTPUTS) {
    const svg = (await readFile(pub(o.from), 'utf8')).trim();
    // 必须传 Buffer：sharp 收到字符串会当作文件路径处理
    const source = Buffer.from(o.pad ? iconSvg(svg, o.width, o.pad) : svg);

    // 调色板 PNG：这些图以平色/渐变色块为主，256 色量化视觉无损
    // （实测 og-image 全彩 156KB → 调色板 99KB，PSNR 58.7dB），图标收益同样明显
    await sharp(source)
      .resize(o.width, o.height, { fit: 'fill' })
      .png({ compressionLevel: 9, palette: true, colours: 256, dither: 1.0, effort: 8 })
      .toFile(pub(o.file));

    const { size } = await stat(pub(o.file));
    console.log(`  ${o.file.padEnd(22)} ${o.width}x${o.height}  ${(size / 1024).toFixed(1)} KB`);
  }
  console.log('[make-assets] 生成完成');
}

if (CHECK_ONLY) check();
else await generate();
