const Discord = require('discord.js');
const { prefix, botname, gitlink, creator } = require('../../config.json');

module.exports.run = async (client, message, args) => {
	const promises = [
			client.shard.fetchClientValues('guilds.cache.size'),
			client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
		];

		return Promise.all(promises)
			.then(results => {
				const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
				const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
				const hembed = new Discord.MessageEmbed()
					.setTitle(`${botname} stats`)
					.setColor("BLURPLE")
					.setThumbnail('https://cdn.discordapp.com/emojis/773794480134160395.png')
					.addFields(
						{ name: 'Total guilds', value: totalGuilds, inline: true },
						{ name: 'Total users', value: totalMembers, inline: true },
						{ name: 'Prefix', value: 'jb/', inline: true },
						{ name: 'Help page', value: '[Click here](https://juicebotdocs.shitpost.business/)' }
					)
					.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
				message.channel.send(hembed);
			})
			.catch(console.error);
};

module.exports.help = {
    name: "stats",
    description: "Shows bot statistics.",
    aliases: ['statistics']
};