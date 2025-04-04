const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const conectaBancoDeDados = require("./bancoDeDados") //importei o arquivo banco de dados
conectaBancoDeDados() //chamei a função bdd

const Mulher = require("./mulherModel")

const app = express()
app.use(express.json())
const porta = 3333


//GET
function mostraMulheres(request, response) {
    try{
        const mulheresVindasDoBandoDeDados = await Mulher.find()

        response.json(mulheresVindasDoBandoDeDados)
    } catch(erro) {
        console.log(erro)
    }
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

//PATCH
function corrigeMulher(request, response){
    function encontraMulher(mulher){
        if(mulher.id === request.params.id){
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}

//DELETE
function deletaMulher(request, response){
    function todasMenosEla(mulher){
        if(mulher.id !== request.params.id){
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

app.use(router.get('/mulheres', mostraMulheres))
app.use(router.post('/mulheres', criaMulher))
app.use(router.patch('/mulheres/:id', corrigeMulher))
app.use(router.delete('/mulheres/:id', deletaMulher))

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta)