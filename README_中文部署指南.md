# Songyun Chen — GitHub Pages 学术个人主页

**网站类型**：无需服务器、无需 Node.js、无需额外主题插件的纯静态学术个人主页。主页为英文，部署步骤及维护说明为中文。

## 一、文件结构

```
index.html                      英文主页
cv.html                         精简版学术履历（支持浏览器打印为 PDF）
.nojekyll                       让 GitHub Pages 直接托管静态文件
assets/css/styles.css           全站设计样式、颜色及移动端适配
assets/js/main.js               深浅色切换、移动端菜单、论文筛选
assets/images/favicon.svg       浏览器小图标
assets/images/social-card.svg   社交媒体分享配图
README_中文部署指南.md           本部署及修改指南
```

## 二、建议使用的仓库名称

假设您的 GitHub 用户名是 `songyunchen`，请创建名为 `songyunchen.github.io` 的 **Public** 仓库。若使用其他 GitHub 用户名，请把前面部分改成实际用户名。

用户网站默认地址：

`https://实际用户名.github.io/`

请勿直接照抄示例用户名，除非那就是您自己的实际 GitHub 账户。

## 三、上传与发布（无需代码环境）

1. 访问 https://github.com/new ，创建公共仓库，名称必须为 `实际用户名.github.io`。
2. 下载并解压本项目 ZIP。把 **压缩包内的文件和 assets 文件夹** 上传到刚建立的仓库根目录。不要额外包一层 `songyunchen-github-pages` 目录，否则主页无法从根网址读取。
3. 确认 GitHub 仓库根目录能直接看到 `index.html`、`cv.html` 和 `assets/`。
4. 打开 GitHub 仓库 **Settings → Pages**。
5. **Build and deployment → Source**：选择 `Deploy from a branch`。
6. **Branch**：选择 `main`，目录选择 `/(root)`，点击 `Save`。
7. 稍后访问 `https://实际用户名.github.io/` 检查网站。

如果 GitHub 浏览器上传没有保留文件夹结构，可使用 GitHub Desktop（https://desktop.github.com/）把文件放入仓库后提交和推送，或者使用以下命令：

```bash
git clone https://github.com/实际用户名/实际用户名.github.io.git
cd 实际用户名.github.io
# 将本项目的 index.html、cv.html、assets/ 等拷贝到这个目录
git add .
git commit -m "Publish academic website"
git push origin main
```

部署官方文档：
- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 四、网站已加入的内容

- Songyun Chen / 陈松云，Professor of Linguistics
- Guangzhou Maritime University, School of International Exchange, Vice Dean
- PhD, Beijing Foreign Studies University (2021)
- 研究兴趣：Corpus Linguistics、Academic Discourse、EAP/ESP、Metadiscourse、Emotion and Evaluation
- 5 篇真实代表论文，均含 DOI 链接，包含 2026 年 10 月在线发表的 Applied Linguistics 论文
- ORCID: https://orcid.org/0000-0002-1403-7459
- ResearchGate 个人主页链接
- 工作联系邮箱：chensongyun@gzmtu.edu.cn
- Teaching、Academic Service、Contact、CV 等栏目

**重要**：网站内容来自用户先前提供的职业资料和出版社公开论文记录；教学和研究陈述包含为网页撰写的概括性文字，正式公开前请检查是否完全符合您希望呈现的个人经历。请特别确认电子邮箱是否愿意公开。

## 五、如何修改网页内容

### 修改个人简介和各栏目
使用 VS Code 或 GitHub 网页编辑器打开 `index.html`，可以搜索如下文字定位修改：

- `Songyun Chen` — 姓名
- `I am a Professor of Linguistics` — About Me 个人简介
- `Research interests.` — 研究方向
- `Selected publications.` — 代表论文
- `Teaching & mentoring.` — 教学经历
- `Academic service.` — 学术服务
- `chensongyun@gzmtu.edu.cn` — 联系邮箱

`cv.html` 是独立的学术履历页面，个人经历或论文更新时需同步修改。

### 增加论文
在 `index.html` 搜索 `<div class="publication-list">`，复制一个 `<article class="publication" ...>...</article>` 的完整论文块，修改年份、题目、作者、期刊、DOI。类别使用 `data-category="emotion"` 或 `data-category="discourse"`；同时更新“全部论文”筛选按钮显示的篇数 `05`。

再在 `cv.html` 的 Selected publications 列表内增加相应 `<li>` 条目。

### 更换本人照片（推荐）
默认使用了一个设计化 `SC` 字母形象，**并非本人照片**。若已有正式学术肖像：

1. 把照片保存为 `assets/images/profile.jpg`。
2. 打开 `index.html`，搜索：

   `<div class="portrait-space"><span>SC</span></div>`

3. 改为：

   `<div class="portrait-space"><img src="assets/images/profile.jpg" alt="Portrait of Songyun Chen"></div>`

4. 在 `assets/css/styles.css` 文件末尾新增：

```css
.portrait-space img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
```

### 更换配色及字体
打开 `assets/css/styles.css`，修改最上面的 `:root` CSS 色值。

- `--paper`：主背景
- `--ink`：文字颜色
- `--gold`：强调色
- `--navy`：深蓝色区块
- `--serif`：标题字体

首页支持深浅色切换；用户手动选择后，浏览器会记住该设置。

## 六、如何导出 PDF 版 CV

打开网站的 `View CV` 页面，点击 `Print / Save as PDF`，在浏览器打印设置里选择“另存为 PDF”，即可得到排版友好的 A4 学术履历。

这个功能只生成浏览器端的打印 PDF；网站没有提供一个可直接下载的个人履历 PDF 文件。如果希望 CV 直接下载，请将您自己的 `CV.pdf` 上传到仓库，并将链接改为 `href="CV.pdf"`。

## 七、常见问题

- **出现 404**：先检查仓库名、`index.html` 是否位于仓库根目录，以及 Settings → Pages 的部署分支。
- **有文字但没有样式**：检查 `assets/css/styles.css` 是否保留在准确位置。
- **手机导航不显示**：确认 `assets/js/main.js` 存在。
- **仍显示旧页面**：稍等 Pages 构建结束后刷新浏览器或用隐私模式查看。
- **邮箱隐私**：邮箱公开后可能被搜索引擎收录，确认愿意公开后再使用。
- **论文版权**：站点只链接 DOI，不自动分发可能受版权保护的出版社 PDF；自行上传论文全文前须核实出版社自存档政策。

## 八、内容维护建议

建议每次论文见刊后同步更新 `index.html`、`cv.html`；每年核对职务和邮箱。论文题目、卷期页码、文章编号应以出版社记录为准。

---

设计特点：英文主站、学术风格、无第三方依赖、SEO 元数据、ORCID 链接、响应式布局、无障碍键盘导航、深浅色切换、论文分类筛选、可打印 CV。
