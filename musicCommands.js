const { client } = require('./index');
const { prefix } = require("./config.json");
const Discord = require('discord.js');
const MusicBot = require('discord-music-system');
 
const bot = new MusicBot({
    botPrefix: prefix,
    ytApiKey: process.env.YT_APIKEY,
    botClient: client
});

client.on("message", async (message) => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.toLowerCase().startsWith(`${prefix}`)) {
        bot.onMessage(message);
    }
});
