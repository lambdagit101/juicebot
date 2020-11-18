const Discord = require('discord.js');
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
		const heavenembed = new Discord.MessageEmbed()
			.setTitle(`${user.username} has risen`)
			.setColor(embedcolor)
			.setImage(`https://vacefron.nl/api/heaven?user=${user.displayAvatarURL({ format: 'png', size: 512 })}`)
			.setFooter(`Invoked by ${message.author.username}, provided by vacefron.nl`, message.author.avatarURL());
		message.channel.send(heavenembed);
};

module.exports.help = {
    name: "heaven",
    description: "Adds someone's profile picture over an image of heaven.",
    aliases: ['arise']
};
