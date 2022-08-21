const express = require('express')
const database = require('./configs/database')

// conexão com o banco de dados
database.mongoose
  .connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Conexão estabelecida com o banco de dados.");
  }).catch(err => {
    console.log("Não conseguiu conectar com o banco de dados.", err);
    process.exit();
  });

// criando uma aplicação express
const app = express();

// definindo que vamos enviar e receber JSON na requisição
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// definindo nossas rotas
var promocaoRoute = require('./routes/promocaoRoute');
app.use('/', promocaoRoute);

var clienteRoute = require('./routes/clienteRoute');
app.use('/', clienteRoute);

var funcionarioRoute = require('./routes/funcionarioRoute');
app.use('/', funcionarioRoute);

var carroRouter = require('./routes/carroRouter');
app.use('/', carroRouter);

var esportivoRouter = require('./routes/esportivoRouter');
app.use('/', esportivoRouter);

var utilitarioRouter = require('./routes/utilitarioRouter');
app.use('/', utilitarioRouter);

var reservaRoute = require('./routes/reservaRoute');
app.use('/', reservaRoute);

// definindo nossa porta e host
const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Servidor executando na porta ${PORT}.`);
});