const about = { version: '1.0', type: 'Nova Versão Internacional' }
const Discord = require("discord.js");

//criando bot
const bot = new Discord.Client();

const watchMessage = require('./View/watchMessage')
const memberAdd = require('./View/memberAdd')


bot.login('*****************************************')

bot.once('ready', () => {
    console.log(`Bot online: ${bot.user.tag}!`)
});

bot.on('guildMemberAdd', membro => memberAdd.message(membro));

bot.on('message', msg =>  watchMessage.waitFor(msg));