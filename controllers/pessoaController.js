const Pessoa = require("../models/pessoa");

module.exports = class PessoaController {

    static async inserir(req, res) {
        console.log(req.body)

        const pessoa = new Pessoa({
            nome: req.body.nome,
            email: req.body.email,
        });

        pessoa.save(pessoa).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
    }

}