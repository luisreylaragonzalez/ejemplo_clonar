const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/registro', function (req, res) {
    res.send('Hola desde la carpeta registro')
  })
 

  app.get('*', function (req, res) {
    res.send('404 page not found')
  })
app.listen(8080)