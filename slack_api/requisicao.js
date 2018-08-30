const https = require('https');

const token = process.env.SLACK_TOKEN;

class RequisicaoSlack {

    constructor() { }

    enviarRequisicaoOpen(idSlackUsuario) {

        https.get('https://slack.com/api/im.open?token=' + token + '&user=' + idSlackUsuario, (resp) => {

            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                let conversationId = JSON.parse(data).channel.id;
                console.log(conversationId);
                this.enviarRequisicaoPostMessage(conversationId);
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    }

    enviarRequisicaoPostMessage(conversationId) {

        https.get('https://slack.com/api/chat.postMessage?' +
        'token=' + token + 
        '&channel=' + conversationId + 
        '&text=' + 'Teste Bot', (resp) => {

            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                console.log(JSON.parse(data));
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    }

}

module.exports = RequisicaoSlack;