const mongoose = require('mongoose')
require('dotenv').config()
const uri = process.env.MONGO_URL

async function conectaBancoDeDados(){
    try{
        console.log('Conexão com banco de dados inciada...')

        await mongoose.connect(uri)
    }
    catch(erro) {
        console.log(erro)
    }
    

}

module.exports = conectaBancoDeDados