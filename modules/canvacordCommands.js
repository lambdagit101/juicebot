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
		var image = await canvacord.Canvas.phub({username, finalresult, pfp});
		const attachment = new MessageAttachment(image.toBuffer(), `phub${message.author.id}.png`);
        message.channel.send(`${message.author.username}, what are you doing here?`, attachment);
	}

});
**/
