const Carro = require("../models/carro");

module.exports = class CarroController {

    static async inserir(req, res) {
        console.log(req.body)

        const carro = new Carro({
            placa: req.body.placa,
            ano: req.body.ano,
            modelo: req.body.modelo,
            tipo: req.body.tipo,
            quilometragem: req.body.quilometragem,
            diaria: req.body.diaria,
            observacao: req.body.observacao,
        });

        carro.save(carro).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || `Erro ao tentar inserir os dados da carro: ${carro}.`
            });
        });
    }

    static async buscarPeloTipo(req, res) {
        Carro.find({ tipo: req.body.tipo }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || `Erro ao tentar buscar carro pelo tipo: ${req.body.tipo}.`
            });
        });
    }

    static async buscarPelaPlaca(req, res) {
        Carro.findOne({ placa: req.body.placa }).then(data => {
            console.log(data)
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || `Erro ao tentar buscar carro pela placa: ${req.body.placa}.`
            });
        });
    }

    static async deletar(req, res) {
        const { id } = req.query;

        Carro.findByIdAndRemove(id, { useFindAndModify: false }).then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Não conseguiu encontrar carro com id: ${id}.`
                });
            } else {
                res.send({
                    message: `Carro com id: ${id} deletado com sucesso.`
                });
            }
        }).catch(err => {
            res.status(500).send({
                message: `Erro ao tentar deletar carro com id: ${id}.`
            });
        });
    }

}
