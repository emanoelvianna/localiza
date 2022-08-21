const express = require('express')
const router = express.Router()

const CarroController = require('../controllers/carroController')

router.post('/carro', CarroController.inserir)
router.get('/carro/tipo', CarroController.buscarPeloTipo)
router.get('/carro/placa', CarroController.buscarPelaPlaca)
router.delete('/carro', CarroController.deletar)

module.exports = router