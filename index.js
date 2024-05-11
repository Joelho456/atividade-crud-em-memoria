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

// Endpoint Read By ID [GET] /animal/:id
app.get('/animal/:id',function (req,res){

  // Acessando o parâmetro da rota id
  const id = req.params.id

  // Acessa o item na lista usando o ID -1
  const item = lista[id - 1]

 // Enviando o item como resposta
  res.send(item)
})

app.listen(3000, function (req, res){
  console.log("Carregando http://localhost:3000/")
})