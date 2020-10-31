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
		const user = message.mentions.users.first() || message.author;
		const args = message.content.slice(PREFIX.length).trim().split(' ');
		const text = args.slice(2, args.length).join(' ');
		const image = await canvacord.Canvas.phub({user.username, text, user.displayAvatarURL({ format: 'png', size: 512 })});
		
        const borgarembed = new Discord.MessageEmbed()
            .setTitle(`${user.username}, why are you here?`)
            .setImage(image.toBuffer(), `phub${message.author.id}.png`)
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(borgarembed);
        return;
    }

});
