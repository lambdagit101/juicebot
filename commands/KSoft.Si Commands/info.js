const Discord = require('discord.js');
const fetch = require('node-fetch');
const ksoftsikey = `Bearer ${process.env.KSOFTSI_TOKEN}`

module.exports.run = async (client, message, args) => {
		var user = client.users.cache.find(user => user.id === args[0]) || message.author;
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
		var addinfo = [];
		const { is_banned } = await fetch(`https://api.ksoft.si/bans/check?user=${args[0]}`, { method: 'get', headers: { 'Authorization': ksoftsikey, 'User-Agent': message.author.id }}).then(response => response.json());
		const isinserver = if (!guild.member(user.id)) { addinfo.push('This user is not in the server.') };
		if (is_banned = true) {
			addinfo.push('This person has been caught breaking Discord TOS in the past.')
		}
		const infembed = new Discord.MessageEmbed()
			.setTitle(`Information about ${user.username}`)
			.setColor("BLURPLE")
			.setThumbnail(user.displayAvatarURL({format: 'png', size: 512}))
			.addFields(
				{ name: 'Account Creation Date', value: user.createdAt, inline: true },
				{ name: 'Presence', value: user.presence.status, inline: true },
				{ name: 'Additional Information', value: addinfo.join('\n') }
			)
			.setFooter(`Invoked by ${message.author.username}, provided by KSoft.Si`, message.author.avatarURL());
		message.channel.send(infembed);
};

module.exports.help = {
    name: "info",
    description: "Gets information about a user.",
    aliases: []
};
