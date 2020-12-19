const request = require('request');


function molding(body, msg) {
    var mensagem = ''
    var all = JSON.parse(body);

    resposta = all.verses
    versiculos = []

    for (i = 0; i < all.verses.length; i++) {

        versiculos[i] = `${resposta[i].number}. ${resposta[i].text}\n`

    }

    for (i = 0; i < versiculos.length; i++) {

        mensagem = `${mensagem}${versiculos[i]}`

        if (i % 10 == 0) {
            msg.reply(mensagem)
            mensagem = ''
        }

    }

}

var findBible = function(msg) {

    pedido = msg.content;


    request(`https://bibleapi.co/api/verses${pedido}`, function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);

        if (response && response.statusCode == 200) {

            molding(body, msg)

        } else if (response && response.statusCode == 404) {

            msg.reply('Não encontrado')

        } else if (error = 'ENOTFOUND') {

            msg.reply('Falha na conexão')

        }

    });

}


module.exports = findBible;