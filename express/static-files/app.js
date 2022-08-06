const express = require('express')
const path = require('path')

const app = express()


app.use(express.static(path.resolve(__dirname + 'public')))
// http://localhost:3000/images/bg.png

app.use('/static', express.static(path.resolve(__dirname + 'public')))
// http://localhost:3000/static/images/bg.png


app.listen(3000, () => {
  console.log('server run...')
})