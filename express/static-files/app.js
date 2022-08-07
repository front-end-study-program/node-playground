const express = require('express')
const path = require('path')

const app = express()

console.log('111', path.resolve(__dirname + '/public'))
app.use(express.static(path.resolve(__dirname + '/public')))
// http://localhost:3000/images/bg.jpeg

app.use('/static', express.static(path.resolve(__dirname + '/public')))
// http://localhost:3000/static/images/bg.jpeg


app.listen(3000, () => {
  console.log('server run...')
})