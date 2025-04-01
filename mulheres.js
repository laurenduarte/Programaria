const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

const app = express()
app.use(express.json())
const porta = 3333

//LISTA MULHERES
const mulheres = [
    {
        id: '1',
        nome: 'Lauren Duarte', 
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Estudante de Análise e Desenvolvimento de Sistemas'
    },
    {
        id: '2',
        nome: 'Simara Conceição',
        imagem: 'https://bit.ly/3LJIyOF',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        id: '3',
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da Programaria'
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response){
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}


//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.use(router.post('/mulheres', criaMulher))
app.listen(porta, mostraPorta)