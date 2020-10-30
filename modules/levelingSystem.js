const Discord = require('discord.js');
const { client, PREFIX } = require('../index');
const db = require('quick.db');

client.on('message', async (message) => {
	
    if (!message.guild) return;
	if (message.author.bot) return;
	
	// Coming soon

	if (!message.content.startsWith(PREFIX)) return;
    if (message.content.toLowerCase().startsWith(`${PREFIX}rank`)) {
		var user = message.mentions.users.first() || message.author;
		const levembed = new Discord.MessageEmbed()
                .setTitle(`Rank card for ${user.tag}`)
                .setImage(`https://vacefron.nl/api/rankcard?username=${user.username}&avatar=${user.displayAvatarURL({format: 'png', size: 512})}&level=${level}&rank=${Math.floor(Math.random() * 10)}&currentxp=${Math.floor(Math.random * 10)}&nextlevelxp=0&previouslevelxp=0&xpcolor=#4287f5`)
                .setFooter(`Invoked by ${message.author.username}, powered by vacefron.nl`, message.author.avatarURL());
		return message.channel.send(levembed);
	}
	
});
