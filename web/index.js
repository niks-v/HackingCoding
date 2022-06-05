const express = require('express')
const app = express()
const port = 80

app.set('view engine', 'pug')

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

require('./routes')(app);