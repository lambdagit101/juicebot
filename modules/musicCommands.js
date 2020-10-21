const { client, PREFIX } = require('../index'); // Import the client from index.js
const Discord = require('discord.js');
const MusicBot = require('discord-music-system');
 
const bot = new MusicBot({
    botPrefix: PREFIX,
    ytApiKey: process.env.YT_APIKEY,
    botClient: client
});
client.on("message", async (message) => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(PREFIX)) return;

    if (message.content.toLowerCase().startsWith(`${PREFIX}`)) {
        bot.onMessage(message);
        return;
    }
});
