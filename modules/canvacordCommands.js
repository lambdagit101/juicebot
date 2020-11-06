const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');
const { client, PREFIX } = require('../index');
const fetch = require('node-fetch');
const canvacord = require('canvacord');

client.on('message', async (message) => 
{
    if (message.author.bot) return;
	if (!message.content.startsWith(PREFIX)) return;
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}phub`)) {
		var username = message.author.username;
		var pfp = message.author.displayAvatarURL({ format: 'png', size: 512 });
		const args = message.content.slice(PREFIX.length).trim().split(' ');
		var text = args.slice(1, args.length);
		var finalresult = text.join(" ");
		var image = await canvacord.Canvas.phub(username, finalresult, pfp);
		console.log(args);
		console.log(text);
		console.log(finalresult);
		const attachment = new Discord.MessageAttachment(image, `phub${message.author.id}.png`);
		return message.channel.send(attachment);
	}

});
