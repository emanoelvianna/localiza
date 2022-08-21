const Esportivo = require("../models/esportivo");
const Carro = require('../models/carro');

module.exports = class EsportivoController {

    static async inserir(req, res) {
        console.log(req.body)

        const carro = await Carro.findOne({ placa: req.body.placa });

        const esportivo = new Esportivo({
            idCarro: carro._id,
            tp100km: req.body.tp100km,
            melhorias: req.body.melhorias
        });

        esportivo.save(esportivo).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || `Erro ao tentar inserir os dados do carro esportivo: ${esportivo}.`
            });
        });
    }

}