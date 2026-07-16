# 操作手册

## 仓库关系

```
ccoderJava.github.io          ← 首页仓库（用户站点）
├── index.html                ← 首页
├── CNAME                     ← ccoder.cc
├── README.md                 ← 本文件

ccoderJava/blog               ← 博客仓库
├── _posts/                   ← 文章（Markdown）
├── .vuepress/config.js       ← 博客配置
├── deploy.sh                 ← 本地部署脚本
└── .github/workflows/main.yml ← CI 自动部署
```

| 仓库 | 分支 | 域名 | 用途 |
|------|------|------|------|
| `ccoderJava.github.io` | `master` | `ccoder.cc` | 个人首页 |
| `blog` | `master` | — | 博客源码 |
| `blog` | `gh-pages` | `blog.ccoder.cc` | 博客静态站点（构建产物，勿手动编辑） |

---

## 修改首页

首页是 `ccoderJava.github.io` 仓库里一个单文件 `index.html`。

```bash
# 1. 克隆仓库
git clone git@github.com:ccoderJava/ccoderJava.github.io.git
cd ccoderJava.github.io

# 2. 编辑 index.html
# 3. 本地预览
open index.html

# 4. 提交推送
git add index.html
git commit -m "describe your change"
git push
```

> **注意**：不要删除 `CNAME` 文件，否则自定义域名会失效。

---

## 修改博客

### 新文章

在 `_posts/` 下按年份创建 `.md` 文件：

```markdown
---
title: 文章标题
date: 2026-01-01 12:00:00
author: 聪聪
category: 分类名
tags:
  - 标签1
  - 标签2
---

文章正文...
```

### 文章分类组织

| 目录 | 内容 |
|------|------|
| `_posts/2021/` | 按年份归档的技术文章 |
| `_posts/mianshi/` | 面试知识点 |
| `_posts/offer/` | 算法题 |

其他页面放在 `_notes/`，需设置 `article: false`。

### 配置修改

博客配置文件 `.vuepress/config.js`，可调整：
- 导航栏 `navbar`
- 页脚 `footer`
- 评论 `comment`
- SEO / PWA / 搜索等插件

### 自定义样式

`.vuepress/styles/index.scss` — 明暗主题颜色、首页卡片样式

---

## 本地开发与部署

```bash
# 启动开发服务器（热更新）
yarn run dev     # → http://localhost:8000

# 构建 + 本地部署到 GitHub Pages
yarn run deploy  # 构建 dist/ → 推送到 blog 的 gh-pages 分支

# 仅构建
yarn run dist    # 产物在 dist/ 目录
```

### 自动部署

推送到 `blog` 仓库的 `master` 分支会触发 GitHub Actions，自动构建并部署到 `gh-pages` 分支。

---

## 注意事项

1. **使用 yarn 而非 npm**，`.yarnrc` 已配置 `--ignore-engines`
2. **不要手动编辑 `dist/` 或 `gh-pages` 分支**，均由构建脚本自动生成
3. **首页仓库的 `CNAME` 和 `blog/dist/` 里的 `CNAME` 都要保留**，前者控制 `ccoder.cc`，后者控制 `blog.ccoder.cc`
4. **首页仓库不要放 `blog/` 目录**，博客独立部署在自己的仓库
5. **DNS 记录不要删**：
   - `ccoder.cc` → 4 条 A 记录指向 GitHub Pages IP
   - `www.ccoder.cc` → CNAME 指向 `ccoderJava.github.io`
   - `blog.ccoder.cc` → CNAME 指向 `ccoderJava.github.io`
6. **favicon 统一用 blog 仓库的**，首页通过 `<link href="/blog/favicon.ico">` 引用，更换时在博客仓库 `.vuepress/public/` 下替换
