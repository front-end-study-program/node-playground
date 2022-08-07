var express = require('express');
var router = express.Router();

// ********************* 路由路径 ****************************
router.all('/secret/*', (req, res, next) => {
  console.log('Accessing the secret section ...');
  next();
})

router.get('/secret/test', (req, res) => {
  res.send('secret test')
})

/**
 * 基于字符串匹配的路由
 */
router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/about', function (req, res) {
  res.send('about');
});


/**
 * 基于字符串模式匹配的路由
 */
// ?：匹配一次或者不匹配
// 此路由路径将匹配 acd 和 abcd。
router.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

// +：匹配一次或者多次
// 此路由路径将匹配 abcd、abbcd、abbbcd 等 
router.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});


// *：匹配零次或者多次任意字符
// 此路由路径将匹配 abcd、abxcd、abRABDOMcd、ab123cd 等。
router.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});

// (*)?：括号内的内容匹配零次或者一次
// 此路由路径将匹配 /abe 和 /abcde。
router.get('/ab(cd)?e', function(req, res) {
  res.send('ab(cd)?e');
 });


/**
 * 基于正则表达式的路由匹配
 */
// 此路由路径将匹配名称中具有“a”的所有路由
router.get(/a/, function(req, res) {
  res.send('/a/');
});

// 此路由路径将匹配 butterfly 和 dragonfly，但是不匹配 butterflyman、dragonfly man 等。
router.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});

module.exports = router;