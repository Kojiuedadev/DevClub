//Subindo servidor
//Modo antigo:
//const http = require('express');

//modo novo:
import express from 'express'; //importa o express
const app = express(); //cria uma aplicação express

app.get('/usuario', (req, res) => { //cria uma rota GET
  res.send('Rota de usuário');//responde com uma mensagem
});

app.post('/usuario', (req, res) => { //cria uma rota POST
  res.send('Usuário salvo com sucesso!');//responde com uma mensagem
});



app.listen(3000, () => console.log('Servidor rodando na porta 3000'));//inicia o servidor na porta 3000

//http://localhost:3000/