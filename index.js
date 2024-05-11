const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const lista = ['Cachorro','Gato','Lagarta']

//endpoint Read All [GET] / Animal
app.get('/animal', function (req,res){
  res.send(lista)
})

app.listen(3000, function (req, res){
  console.log("Carregando http://localhost:3000/")
})