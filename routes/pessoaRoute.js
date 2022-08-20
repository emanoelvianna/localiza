const express = require('express')
const router = express.Router()

const PessoaController = require('../controllers/pessoaController')

router.post('/pessoa', PessoaController.inserir)

module.exports = router