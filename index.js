const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function (req, res){
  console.log("Carregando http://localhost:3000/")
})