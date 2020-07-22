function bibleBot() {

    const about = { version: '1.0', type: 'Nova Versão Internacional' }
    const Discord = require("discord.js");

    //criando bot
    const bot = new Discord.Client();

    const findBible = require("./biblia/biblia-find");
    const abrevs = require('./biblia/abrevs')

    bot.login('NzI1OTE3MTM0NjM4ODA5MDkw.XvVtgw.7GmuDrxb6iM7TX-wLQ5UH8G95xg');

<<<<<<< HEAD
    bot.once('ready', () => {
        console.log(`Bot online: ${bot.user.tag}!`);
    });

    //mensagem de boas vindas
    bot.on('guildMemberAdd', membro => {
        membro.send(`Seja bem-vindo hehe`);
    });

    //monitorando mensagens
    bot.on('message', msg => {
=======
//mensagem de boas vindas
bot.on('guildMemberAdd', membro => {
    membro.send(`Seja bem-vindo(a)`);
});

//monitorando mensagens
bot.on('message', msg => {
>>>>>>> b6dff4821174be1e568ef8679ed7d2ebc90a5027

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

<<<<<<< HEAD
}

bibleBot()
=======
});
>>>>>>> b6dff4821174be1e568ef8679ed7d2ebc90a5027
