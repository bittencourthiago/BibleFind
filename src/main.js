const about = { version: '1.0', type: 'Nova Versão Internacional' }
const Discord = require("discord.js");

//criando bot
const bot = new Discord.Client();

const watchMessages = require('./View/WatchMessage')
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
bot.on('message', msg =>  watchMessages.waitFor(msg));