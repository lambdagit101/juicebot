const Discord = require('discord.js');
const fetch = require('node-fetch');
const { embedcolor } = require('../../config.json');
const ksoftsikey = `Bearer ${process.env.KSOFTSI_TOKEN}`

module.exports.run = async (client, message, args) => {
		var addinfo = [];
		const banList = await message.guild.fetchBans();
		const bannedUser = banList.find(user => user.id === args[0]);
		if (bannedUser) {
			addinfo.push('This user is banned from this server.');
		}
		var user = client.users.cache.find(user => user.id === args[0]) || message.author;
		let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
		const { is_banned } = await fetch(`https://api.ksoft.si/bans/check?user=${args[0]}`, { method: 'get', headers: { 'Authorization': ksoftsikey, 'User-Agent': message.author.id }}).then(response => response.json());
		if (!message.guild.member(user.id)) {
			addinfo.push('This user is not in the server.') ;
		};
		if (is_banned == true) {
			addinfo.push('This person has been caught breaking Discord TOS in the past (according to [KSoft.Si Bans](https://bans.ksoft.si/share?user=${user.id})).')
		}
		const infembed = new Discord.MessageEmbed()
			.setTitle(`Information about ${user.username}`)
			.setColor(embedcolor)
			.setThumbnail(user.displayAvatarURL({format: 'png', size: 512}))
			.addFields(
				{ name: 'Account Creation Date', value: user.createdAt, inline: true },
				{ name: 'Presence', value: user.presence.status, inline: true },
			)
			.setFooter(`Invoked by ${message.author.username}, provided by KSoft.Si Bans`, message.author.avatarURL());
		if (addinfo.length) {
				infembed.addFields(
					{name: 'Additional Information', value: addinfo.join('\n')}
				);
		}
		message.channel.send(infembed);
};

module.exports.help = {
    name: "info",
    description: "Gets information about a user.",
    aliases: []
};
