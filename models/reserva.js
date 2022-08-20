const mongoose = require('mongoose')

const Reserva = new mongoose.Schema({
    idCarro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carro',
        required: true
    },
    idCliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carro',
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    dtInicio: {
        type: Date,
        required: true,
    },
    dtFim: {
        type: Date,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('Reserva', Reserva);