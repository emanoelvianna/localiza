const mongoose = require('mongoose')

const Pessoa = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    idade: {
        type: Number,
        required: true
    },
    dtNascimento: {
        type: Date,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    endereco: {
        type: String,
        required: true
    },
}, { versionKey: false });

module.exports = mongoose.model('Pessoa', Pessoa);