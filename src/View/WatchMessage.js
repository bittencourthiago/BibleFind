const findBible = require("../biblia/biblia-find")
const abrevs = require('../biblia/abrevs')

module.exports = {
    waitFor(msg, about){
        indexChar = (char) => msg.content.indexOf(char) >= 0;

        if (msg.content == 'bible -v') {
            msg.reply(`Seja bem vindo a BibleVerses '${about.version}' versão da bíblia: ${about.type}`);
        }
        if (indexChar('/nvi')) {

            findBible(msg);

        }
        if (indexChar('/abrev')) {

            abrevs(msg)

        }
    }
}