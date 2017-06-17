# 项目名称 #

# 版本号 #
> v1.0

# svn #

# 技术栈 #

2. [Webpack2](https://github.com/webpack/webpack)
4. [Eslint](https://github.com/eslint/eslint)
5. [Postcss](https://github.com/postcss/postcss)

## Dev 开发模式
> 热加载运行 localhost:3000

npm run dev

访问页面[http://localhost:3000](http://localhost:3000)

## Build 产品模式
>代码压缩打包

第一步: npm run build  
第二步: node app.js

访问页面[http://localhost:3000](http://localhost:3000)

## Watch 监听模式
>代码压缩打包，热加载

第一步: npm run watch
第二步: node app.js

访问页面[http://localhost:3000](http://localhost:3000)

## 文件结构

├── src  # 主文件夹
│   ├── assets  # 公用资源
│   │   ├── img
│   │   │   └── logo.png
│   │   ├── js
│   │   └── css
│   ├── components # 公用组件
│   └── pages  # 页面
│       └── login # login.html (folder name can be customized)
│               ├── app.js   # entry js (入口js文件名必须为app)
│				└── app.html # template html (html模板文件名必须为app)               
├── LICENSE
├── .babelrc          # babel config (es2015 default)
├── .eslintrc.js      # eslint config (eslint-config-vue default)
├── server.js         # port 3000
├── package.json
├── postcss.config.js # postcss (autoprefixer default)
├── webpack.config.js
└── README.md
```

## Dist Folder Structure

```bash
├── assets
│   ├── css
│   │   ├── login.css
│   │   ├── login.css.map
│   │   ├── vendors.css
│   │   └── vendors.css.map
│   └── js
│       ├── login.js
│       └── vendors.js
├── login.html
└── logo.png 
```