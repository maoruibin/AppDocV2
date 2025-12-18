## 目标
- 将 `/oldDoc/docs` 的全部文档与静态资源迁移到当前 v2 站点下，保持原有路由结构与内容。
- 升级配置到 VuePress v2（默认主题），导航与侧边栏映射正确、样式与图片正常显示。
- 优化首页为 v2 的 `home: true` 风格，清晰展示个人多个项目入口。
- 保持可运行（dev 与 build 正常），并在当前 Node 版本下继续使用 webpack 打包器。

## 现状调研
- 旧文档结构（VuePress 1.x）：
  - 顶层分类：`/inbox/`、`/cang/`、`/light/`、`/picplus/`、`/rssplus/`（各自含多页面与 README/首页）。
  - 公共资源：`oldDoc/docs/.vuepress/public/img/*`，以及自定义样式 `oldDoc/docs/.vuepress/styles.css`。
  - 主题配置：`oldDoc/docs/.vuepress/config.js` 中定义 `nav`、`sidebar`、`head`、`markdown-it-task-lists`。
  - 构建产物：`oldDoc/docs/.vuepress/dist/*`（无需迁移）。
- 新站当前配置（VuePress v2）：`docs/.vuepress/config.js:1`
  - 已启用 `defaultTheme`、`webpackBundler()`；v2 语法与结构可用。

## 迁移策略
1. 内容复制
   - 将 `oldDoc/docs/{inbox,cang,light,picplus,rssplus}/` 全量拷贝到新站 `docs/` 对应目录；保留文件名与相对路径，确保路由一致。
   - 将 `oldDoc/docs/README.md` 合并为新站首页草稿，后续按 v2 首页优化方案重写。
2. 静态资源
   - 将 `oldDoc/docs/.vuepress/public/img/*` 合并到 `docs/.vuepress/public/img/`，保证 Markdown 中 `/img/...` 引用不变即可生效。
   - 不拷贝 `oldDoc/docs/.vuepress/dist/*`（构建产物）。
3. 自定义样式
   - 将 `oldDoc/docs/.vuepress/styles.css` 合并到 v2 推荐位置：`docs/.vuepress/styles/index.scss`（或 `index.css`）；按需微调选择器兼容 v2 默认主题。
   - 保留 favicon 与 logo：在 `head` 中设置 `<link rel="icon" href="/img/favicon-32.png">`，并让首页或主题使用 `/img/logo-192.png`。

## 配置迁移（v1 → v2）
- 所有修改在 `docs/.vuepress/config.js:1`：
  - `head`：保留 favicon 设置。
  - `markdown.extendsMarkdown`：继续启用 `markdown-it-task-lists`。
  - `theme: defaultTheme({ ... })`：
    - 导航 `navbar`：将 v1 的 `nav` 与下拉分组映射到 v2 的 `navbar` 结构（含外链与分组 `items`）。
    - 侧边栏 `sidebar`：为各前缀（`/inbox/`、`/cang/`、`/light/`、`/picplus/`、`/rssplus/`）分别构建 v2 风格分组对象（`text`、`collapsible`、`children`），与旧配置保持顺序一致。
  - `bundler: webpackBundler({ ... })`：保留并继续注入 `sassOptions.silenceDeprecations: ['legacy-js-api']`，确保无 Sass 旧 API 警告（参考官方说明）。

## 首页优化（v2 home 页面）
- 使用 v2 的首页 Frontmatter：
  - 在 `docs/README.md` 顶部添加：
    - `home: true`、`title`、`heroText`、`heroImage: /img/logo-192.png`、`actions`（快速入口按钮）。
    - `features`：为 `inbox`、`cang`、`light`、`picplus`、`rssplus` 各自提供简短描述与链接。
- 结果：首页更直观展示多个项目，用户一键进入对应文档。

## 插件与增强
- 搜索：按需加入 `@vuepress/plugin-search`（与当前 v2 版本对齐的 rc 版，必要时使用 `legacy-peer-deps` 解决 peer 依赖），配置中文占比更好的本地搜索。
- 其他默认主题增强（nprogress、back-to-top、copy-code 等）随主题自动启用或在主题依赖中提供，无需额外手动配置。

## 兼容与风险
- 打包器：由于当前 Node 版本与 Vite 7 存在要求差异，保留 webpack 打包器以确保稳定运行；后续如升级 Node（≥20.19），可切回 `viteBundler()` 提升开发体验。
- Sass API：根据官方说明，legacy JS API 将在 Dart Sass 2.0.0 移除；我们已静默告警且保持兼容（Webpack 支持现代 API）。
- 链接兼容：拷贝后逐项点击验证目录与页面是否 404，若存在大小写或扩展名差异，微调侧边栏与文件名。

## 验证计划
1. 本地启动：`npm run docs:dev`，访问各前缀首页与主要页面，检查导航与侧边栏。
2. 资源检查：随机抽取多张图片与 favicon、logo 是否正常显示。
3. 构建验证：`npm run docs:build`，输出到 `docs/.vuepress/dist` 并本地静态预览，确保构建产物完整。

## 交付内容
- 已迁移的文档目录与公共资源。
- 更新后的 v2 配置（导航与侧边栏完整映射）。
- 优化后的首页（`home` 风格，含项目卡片与快速入口）。
- 运行与构建通过的站点。