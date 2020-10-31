const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch');
const canvacord = require('canvacord');

// More coming soon! Maybe will make a leveling system with cards using this API

client.on('message', async (message) => 
{
    if (message.author.bot) return;
	if (!message.content.startsWith(PREFIX)) return;

    if (message.content.toLowerCase().startsWith(`${PREFIX}phub`)) {
		const args = message.content.slice(PREFIX.length).trim().split(' ');
		var command = args.slice(1, args.length);
		var finalresult = command.join(" ");
		const image = await canvacord.Canvas.phub({message.author.username, finalresult, user.displayAvatarURL({ format: 'png', size: 512 })});
        const attachment = new Discord.MessageAttachment(image.toBuffer(), "phub.png");
        message.channel.send(attachment);
    }
	

});
