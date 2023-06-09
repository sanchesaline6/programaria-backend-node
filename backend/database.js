const mongoose = require('mongoose')
const uri = 'mongodb+srv://admin:yEcqb3I4Skx4yfKM@programariacluster.nluskpq.mongodb.net/?retryWrites=true&w=majority'

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