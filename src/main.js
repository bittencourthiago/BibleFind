const about = { version: '1.0', type: 'Nova Versão Internacional' }
const Discord = require("discord.js");

const bot = new Discord.Client();

const turnOnBot = require('./View/turnOnBot')
const watchMessage = require('./View/watchMessage')
const memberAdd = require('./View/memberAdd')

bot.login('*****************************************')

bot.once('ready', bot => turnOnBot.message(bot));

bot.on('guildMemberAdd', membro => memberAdd.message(membro));

bot.on('message', (msg, about) =>  watchMessage.waitFor(msg, about));