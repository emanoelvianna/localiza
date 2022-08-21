const mongoose = require('mongoose')

const Carro = mongoose.Schema({
    placa: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    quilometragem: {
        type: Number,
        required: false
    },
    diaria: {
        type: Number,
        required: true
    },
    observacao: {
        type: String,
        required: false
    }
}, { versionKey: false });

module.exports = mongoose.model('Carro', Carro);