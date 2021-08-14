# 介绍
  这是一个基于 rollup 的 React组件开发模版，会将组件打包umd格式的包，打包到dist文件夹下，example/index.html 可以验证你的组件，在此index.html中使用browser require.js的方式引入你的组件，验证你的组件效果（通过执行npm run start，然后访问http://127.0.0.1:3000/index.html 可以访问此页面）。

  本包，默认支持typescript，你可以在src/下新建自己想要的.ts或.tsx文件，并且可以在根目录中新建types文件夹用来存放typescript的声明文件
```javascript
// https://requirejs.org/ // require.js
require(['ModuleName'], function (ModuleName) {})
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="lib/react.development.js"></script>
    <script src="lib/react-dom.development.js"></script>
    <script src="lib/vue.js"></script>
    <script src="bundle.js"></script>
    <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
    <script src="lib/require.js"></script>
    <title>example</title>
</head>
<body>
    <div id="app"></div>
    <div id="root"></div>
    <script type="text/babel">
      require(['./bundle.js'], function(Mod) {
        ReactDOM.render(<Mod text="hello world" />, document.getElementById("app"))
      })
    </script>
</body>
</html>
```
## Install
```bash
npm install # 安装依赖
npm run start # 启动服务
npm run build # 打包
```

## Publish
修改package.json
  name，改成你自己期望的组件名称
  main，改成你期望的入口地址

## 修改 rollup.config.js
你可以根据你自己的需求，从新定制打包规范