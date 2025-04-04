const mongoose = require("mongoose")

async function conectaBancoDeDados(){
    try{
        console.log("Conexão com o banco de dados iniciou")

          await mongoose.connect("mongodb+srv://Lauren:lauren123@clustermulheres.ud5tmw6.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMulheres")

        console.log("Conexão com o banco de dados feita com sucesso!")
    } catch(erro) {
        console.log(erro)
    }
    
}

    module.exports = conectaBancoDeDados