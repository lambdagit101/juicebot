const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch');
const canvacord = require('canvacord');

// Coming soon! Maybe will make a leveling system with cards using this API
/**
client.on('message', async (message) => 
{
    if (message.author.bot) return;
	if (!message.content.startsWith(PREFIX)) return;
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}phub`)) {
		var username = message.author.username;
		var pfp = message.author.displayAvatarURL({ format: 'png', size: 512 })
		const args = message.content.slice(PREFIX.length).trim().split(' ');
		var text = args.slice(1, args.length);
		var finalresult = text.join("%20");
		var image = new canvacord.phub({username, text, pfp});
		const phubembed = new Discord.MessageEmbed()
                .setTitle(`${username}, what are you doing here?`)
                .setImage(image.toBuffer())
                .setFooter(`Invoked by ${message.author.username}, provided by Canvacord`, message.author.avatarURL());
            message.channel.send(phubembed);
	}

});
**/
