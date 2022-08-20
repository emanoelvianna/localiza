const mongoose = require('mongoose')

const Funcionario = new mongoose.Schema({
    idPessoa: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    dtContratacao: {
        type: Date,
        required: true
    },
    salario: {
        type: Number,
        required: true,
    },
    qtAlugueis: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('Funcionario', Funcionario);