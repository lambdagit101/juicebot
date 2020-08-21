const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch')

client.on('message', async (message) => 
{
    if (message.author.bot) return;
    if (!message.guild) return;
	// Nothing for now. Removed trivia completely
});
