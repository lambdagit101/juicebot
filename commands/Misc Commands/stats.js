const Discord = require('discord.js');
const { prefix, botname, gitlink, creator } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    const hembed = new Discord.MessageEmbed()
        .setTitle(`${botname} stats`)
		.setColor("BLURPLE")
		.setThumbnail('https://cdn.discordapp.com/emojis/773794480134160395.png')
		.addFields(
			{ name: 'Total guilds', value: client.guilds.cache.size, inline: true },
			{ name: 'Total users', value: client.users.cache.size, inline: true },
			{ name: 'Prefix', value: 'jb/', inline: true },
			{ name: 'Help page', value: '[Click here](https://juicebotdocs.shitpost.business/)' }
		)
        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
    message.channel.send(hembed);
};

module.exports.help = {
    name: "stats",
    description: "Shows bot statistics.",
    aliases: ['statistics']
};