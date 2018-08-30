const Banco = require('./banco_testes');
const RequisicaoSlack = require('./requisicao');

//Fonte: https://github.com/slackapi/node-slack-sdk
class SlackApi {

    constructor() { }

    avisarProximoFila(nmUser) {

        const requisicaoSlack = new RequisicaoSlack();
        for (let usuario of Banco.tbUsuarios) {
            if (nmUser == usuario.nmUsuaio) {
                requisicaoSlack.enviarRequisicaoOpen(usuario.idSlackUsuario);
            }
        }

    }
}

module.exports = SlackApi;