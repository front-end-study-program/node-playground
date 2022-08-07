const express = require('express')
const app = express()

// 设置模板文件所在目录
app.set('views', './views')
// 要使用的模板引擎
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})


app.listen(3000)