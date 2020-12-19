module.exports = {
    molding(body, msg) {
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
}