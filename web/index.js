const express = require('express')
const app = express()
const port = 80
var path = require('path');

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, '/frontend/views'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

require('./backend/routes')(app);