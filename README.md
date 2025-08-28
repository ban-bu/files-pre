Case Study1 预览与下载站点

用途：在线预览并下载 `Case Study1.docx`，适合通过 GitHub 连接 Railway 部署。

本地运行：
1) 终端进入 `case-study1-site`，执行：
```bash
npm install
npm start
```
2) 将你的文档放到：`public/files/Case Study1.docx`
3) 打开浏览器访问：`http://localhost:3000`

部署到 Railway（GitHub）：
1) 将该文件夹推送到新的 GitHub 仓库。
2) 在 Railway 选择“New Project → Deploy from GitHub”，授权并选择该仓库。
3) Railway 自动识别 Node 应用（`npm start`），完成后访问提供的域名。
4) 确认仓库中存在 `public/files/Case Study1.docx`，即可在线预览与下载。

自定义文件名：如更换文件名，请修改 `public/index.html` 脚本中 `filePath` 变量及页面文案。

