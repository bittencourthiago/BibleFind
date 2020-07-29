function bibleBot() {

    const about = { version: '1.0', type: 'Nova Versão Internacional' }
    const Discord = require("discord.js");


    //criando bot
    const bot = new Discord.Client();

    const findBible = require("./biblia/biblia-find");
    const abrevs = require('./biblia/abrevs')

    bot.login('*****************************************');

    bot.once('ready', () => {
        console.log(`Bot online: ${bot.user.tag}!`);
    });

    //mensagem de boas vindas
    bot.on('guildMemberAdd', membro => {
        membro.send(`Seja bem-vindo hehe`);
    });

    //monitorando mensagens
    bot.on('message', msg => {

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
    });

}

bibleBot()
