const Reserva = require("../models/reserva");
const Cliente = require('../models/cliente');
const Carro = require('../models/carro');

module.exports = class PromocaoController {

    static async inserir(req, res) {
        console.log(req.body)

        const carro = await Carro.findOne({ placa: req.body.placa });
        const cliente = await Cliente.findOne({ cpf: req.body.cpf });

        console.log(cliente)

        const reserva = new Reserva({
            placaCarro: carro.placa,
            cpfCliente: cliente.cpf,
            status: req.body.status,
            dtInicio: req.body.dtInicio,
            dtFim: req.body.dtFim,
        });

        reserva.save(reserva).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || `Erro ao tentar inserir os dados da reserva: ${reserva}.`
            });
        });
    }

    static async buscar(req, res) {
        Reserva.findOne({ cpfCliente: req.body.cpfCliente }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || `Erro ao tentar buscar os dados da reserva com cpf: ${req.body.cpfCliente}.`
            });
        });
    }

    static async atualizar(req, res) {
        console.log(req)

        const { id } = req.query;

        Reserva.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Não conseguiu encontrar reserva com id: ${id}.`
                });
            } else res.send({ message: `Reserva id: ${id} atualizada com sucesso.` });
        }).catch(err => {
            res.status(500).send({
                message: "Erro ao tentar atualizar reserva com id: " + id
            });
        });
    }

}