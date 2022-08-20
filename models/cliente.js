const mongoose = require('mongoose')

const Cliente = new mongoose.Schema({
    idPessoa: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    nuCarteiraMotorista: {
        type: Number,
        required: true
    },
    anoVencimentoCarteira: {
        type: Number,
        required: true,
    },
    foto: {
        type: String,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('Cliente', Cliente);