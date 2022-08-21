const express = require('express')
const router = express.Router()

const EsportivoController = require('../controllers/esportivoController')

router.post('/esportivo', EsportivoController.inserir)

module.exports = router