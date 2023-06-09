const porta = 3333
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express()
const router = express.Router()

const mulher = {
    nome: 'Aline Sanches',
    imagem: './assets/images/profile_image.jpeg',
    minibio: 'Analista de Sistemas migrando para área de dados'
}

let mulheres = [
    {
        id: '1',
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        id: '2',
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da Programaria'
    },
    {
        id: '3',
        nome: 'Nina da Hora',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Hacker Antirracista'
    }
]

app.use(express.json())
app.use(router.get('/', mostraOlaMundo))
app.use(router.get('/mulher', mostraInfoMulher))
app.use(router.get('/mulheres', mostraInfoMulheres))
app.use(router.get('/hora', mostraHora))

app.use(router.post('/mulheres', criaMulher))

app.use(router.patch('/mulheres/:id', atualizaMulher))

app.use(router.delete('/mulheres/:id', removeMulher))
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

function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)
    response.json(mulheres)
}

function atualizaMulher(request, response){
    
    const mulherEncontrada = encontraMulher(request.params.id)

    if(request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }
    if(request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }
    if(request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}

function removeMulher(request, response) {
    const mulherEncontrada = encontraMulher(request.params.id)
    mulheres = mulheres.filter(mulher => mulher.id !== mulherEncontrada.id)
    response.json(mulheres)

}

function encontraMulher(id) {
    
    return mulheres.find(mulher => mulher.id === id)

}