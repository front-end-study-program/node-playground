const express = require('express')
const app = express()
const path = require('./path')
const handler = require('./handler')

app.use('/path', path)
app.use('/handler', handler)

app.listen(3000, () => {
  console.log('server run...')
})