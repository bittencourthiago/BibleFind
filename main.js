const Discord = require("discord.js");

//criando bot
const bot = new Discord.Client();

const findBible = require("./biblia/biblia-find");
const abrevs = require('./biblia/abrevs')

bot.login('NzI1OTE3MTM0NjM4ODA5MDkw.XvVtgw.7GmuDrxb6iM7TX-wLQ5UH8G95xg');

bot.once('ready', () => {
    console.log(`Bot online: ${bot.user.tag}!`);
});

//mensagem de boas vindas
bot.on('guildMemberAdd', membro => {
    membro.send(`Seja bem-vindo(a)`);
});

//monitorando mensagens
bot.on('message', msg => {

    indexChar = (char) => msg.content.indexOf(char) >= 0;

    if (msg.content == '/oi') {
        msg.reply('olá hehe');
    }
    if (indexChar('/nvi')) {

        findBible(msg);

    }
    if (indexChar('/abrev')) {

        abrevs(msg)

    }

});
