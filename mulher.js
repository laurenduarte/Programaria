const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Lauren Duarte',
        imagem: 'https://a-static.mlcdn.com.br/1500x1500/docinho-meninas-super-poderosas-papel-de-arroz-a4-mec-art/mecart/15808316265/cacd650477fa58445d58b3034cd6ddbe.jpeg',
        minibio: 'Estudante de Análise e Desenvolvimento de Sistemas'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)