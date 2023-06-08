const porta = 3333
const express = require('express');
const app = express()
const router = express.Router()

const mulher = {
    nome: 'Aline Sanches',
    imagem: './assets/images/profile_image.jpeg',
    minibio: 'Analista de Sistemas migrando para área de dados'
}

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da Programaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Hacker Antirracista'
    }
]
app.use(router.get('/ola', mostraOlaMundo))
app.use(router.get('/mulher', mostraInfoMulher))
app.use(router.get('/mulheres', mostraInfoMulheres))
app.use(router.get('/hora', mostraHora))

app.listen(porta, mostraPorta)

function mostraOlaMundo(request, response) {
    response.send('Olá Mundo')
}

function mostraPorta(){
    console.log('O servidor está escutando na porta' , porta)
}

function mostraInfoMulher(request, response) {
    response.json(mulher)
}

function mostraInfoMulheres(request, response){
    response.json(mulheres)
}

function mostraHora(request, response){
    const data = new Date();
    const hora = data.toLocaleTimeString();

    response.send(hora);
}