const mongoose = require('mongoose')

const Utilitario = mongoose.Schema({
    idCarro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carro',
        required: true
    },
    qtPassageiro: {
        type: Number,
        required: false
    },
    tmBagageiro: {
        type: Number,
        required: false
    },
    kmLitro: {
        type: Number,
        required: false
    },
}, { versionKey: false });

module.exports = mongoose.model('Utilitario', Utilitario);