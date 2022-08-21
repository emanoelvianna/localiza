const Utilitario = require("../models/utilitario");
const Carro = require('../models/carro');

module.exports = class UtilitarioController {

    static async inserir(req, res) {
        console.log(req.body)

        const carro = await Carro.findOne({ placa: req.body.placa });

        const utilitario = new Utilitario({
            idCarro: carro._id,
            qtPassageiro: req.body.qtPassageiro,
            tmBagageiro: req.body.tmBagageiro,
            kmLitro: req.body.kmLitro
        });

        utilitario.save(utilitario).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || `Erro ao tentar inserir os dados do carro utilitario: ${utilitario}.`
            });
        });
    }

}