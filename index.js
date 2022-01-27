const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const menu = 1;
client.on('ready', () => {
    console.log(`Bot connected as: ${client.user.tag}!!!`)
})

client.on('message', message => {
    // Recibiendo mensaje
    console.log(message.content);
    if (message.content === 'Cuánto es 12 + 1?') {
        message.reply('Es décimo tercero');
        message.reply('caiste perro es 13');

    }
    if (message.content === 'EN QUE LENGUAJE TE PROGRAMARON?' || message.content === 'en que lenguaje te programaron?' || message.content === 'En qué lenguaje te programaron?') {
        message.reply('En JS');
        message.reply('Por?');
    }

})

client.login('OTM2Mjg2NTY0OTQ0ODcxNDI1.YfK-0A.hN4qiHnxNUcmeRDmxxoTmhmCHHg');