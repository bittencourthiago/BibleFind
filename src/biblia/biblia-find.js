const request = require('request');
const tratament  = require('./tratament')

var findBible = function(msg) {

    pedido = msg.content;

    request(`https://bibleapi.co/api/verses${pedido}`, function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);

        if (response && response.statusCode == 200) {

            tratament.molding(body, msg)

        } else if (response && response.statusCode == 404) {

            msg.reply('Não encontrado')

        } else if (error = 'ENOTFOUND') {

            msg.reply('Falha na conexão')

        }

    });

}

module.exports = findBible;