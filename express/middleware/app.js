var express = require('express');
var app = express();

// *****************应用层中间件*****************
// 此示例显示没有安装路径的中间件函数。应用程序每次收到请求时执行该函数
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// 此示例显示安装在 /user/:id 路径中的中间件函数。在 /user/:id 路径中为任何类型的 HTTP 请求执行此函数
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// 此示例显示一个路由及其处理程序函数（中间件系统）。此函数处理针对 /user/:id 路径的 GET 请求
app.get('/user/:id', function (req, res, next) {
  res.send('USER');
});

// 以下是在安装点使用安装路径装入一系列中间件函数的示例。 它演示一个中间件子堆栈，用于显示针对 /user/:id 路径的任何类型 HTTP 请求的信息。
app.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// 要跳过路由器中间件堆栈中剩余的中间件函数，调用 next('route') 将控制权传递给下一个路由
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id == 0) next('route');
  // otherwise pass the control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.render('regular');
});

// handler for the /user/:id path, which renders a special page
app.get('/user/:id', function (req, res, next) {
  res.render('special');
});


// **************************** 路由器层中间件 **********************************
// 路由器层中间件的工作方式与应用层中间件基本相同，差异之处在于它绑定到 express.Router() 的实例
var router = express.Router();
// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id == 0) next('route');
  // otherwise pass control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.render('regular');
});

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id);
  res.render('special');
});

// mount the router on the app
app.use('/', router);

// *************************** 错误处理中间件 ********************
// 错误处理中间件函数的定义方式与其他中间件函数基本相同，差别在于错误处理函数有四个自变量而不是三个，专门具有特征符 (err, req, res, next)
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// ************************** 内置中间件 **************************
// express.static(root, [options])

// express.json 

// express.urlencoded


// ************************** 第三方中间件 ************************
// cookie-parser

var cookieParser = require('cookie-parser');
// load the cookie-parsing middleware
app.use(cookieParser());

app.listen(3000);