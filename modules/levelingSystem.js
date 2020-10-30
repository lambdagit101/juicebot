const Discord = require('discord.js');
const { client, PREFIX } = require('../index');
const db = require('quick.db');

client.on('message', async (message) => {
	
    if (!message.guild) return;
	if (message.author.bot) return;
	
	// Coming soon

	if (!message.content.startsWith(PREFIX)) return;
	
});
