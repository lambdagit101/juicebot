const Discord = require('discord.js');
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
  try {
		const impostembed = new Discord.MessageEmbed()
			.setTitle(`${args[0].replace(/%20/g, ' ').replace(/-/g, ' ')} was ejected`)
			.setImage(`https://vacefron.nl/api/ejected?name=${args[0].replace(/-/g, '%20')}&impostor=${args[2]}&crewmate=${args[1]}`)
			.setColor(embedcolor)
			.setFooter(`Invoked by ${message.author.username}, provided by vacefron.nl`, message.author.avatarURL());
		message.channel.send(impostembed);
	} catch (err) {
		console.log(err);
  }
};

module.exports.help = {
    name: "eject",
    description: "Ejects someone. Like in Among Us!",
    aliases: []
};
