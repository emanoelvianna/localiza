const mongoose = require('mongoose')

const Utilitario = mongoose.Schema({
    idCarro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carro',
        required: true
    },
    tpo100km: {
        type: Number,
        required: false
    },
    melhorias: {
        type: [String],
        required: false
    },
}, { versionKey: false });

module.exports = mongoose.model('Utilitario', Utilitario);