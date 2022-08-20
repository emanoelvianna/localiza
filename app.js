const express = require('express')
const database = require('./configs/database')

// conexão com o banco de dados
console.log(database.url);

database.mongoose
  .connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Conexão estabelecida com o banco de dados!");
  }).catch(err => {
    console.log("Não conseguiu conectar com o banco de dados!", err);
    process.exit();
  });

// 
const app = express();

// definindo que vamos enviar e receber JSON na requisição
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
var pessoaRoute = require('./routes/pessoaRoute');
app.use('/', pessoaRoute);

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);