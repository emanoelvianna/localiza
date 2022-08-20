const express = require('express')
const mongoose = require('mongoose')
const database = require('./configs/database')

const app = express();

// definindo que vamos enviar e receber JSON na requisição
app.use(express.json()) 

app.use(express.urlencoded({extended:true}))

// routes
var pessoaRoute = require('./routes/pessoaRoute');

app.use('/', pessoaRoute);

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);