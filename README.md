# node-playground

node js 相关知识练习操场

## express

1. express-generator
   > 快速生成 express 框架应用程序

   ```bash
   npx express-generator
   ```

2. basic-routing

   > 路由用于确定应用程序如何响应对特定端点的客户机请求，包含一个 URI（路径）和一个特定的 HTTP 请求方法（POST、GET）。每个路由可以具有一个或多个处理程序函数，这些函数在路由匹配时执行<br />
   > express 可以使用字符串或者字符串模式以及正则表达式来匹配路由。使用 [path-to-regexp](https://www.npmjs.com/package/path-to-regexp) 来匹配路径

   ```js
   app.METHOD(PATH, HANDLER)
   ```

3. static-files
   > 为应用程序指定如图像、css文件之类的静态资源目录

   ```js
   express.static(root, [options])
   ```
