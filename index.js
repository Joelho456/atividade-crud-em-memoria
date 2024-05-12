const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const lista = ['Cachorro','Gato','Lagarta']

//endpoint Read All [GET] /animal
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

// Sinalizando para o Express que estamos usando JSON no Body
app.use(express.json())

// Endpoint Create [POST] /animal
app.post('/animal', function (req, res){
  // Acessando o Body da Requisição
   const body = req.body

   // Acessamos a propriedade 'nome' do body
   const novoItem = body.nome

   // Adicionamos na lista
   lista.push(novoItem)

   // Exibimos uma mensagem de sucesso
  res.send('Item adicionado com sucesso: ' + novoItem)
  })

app.listen(3000, function (req, res){
  console.log("Carregando http://localhost:3000/")
})