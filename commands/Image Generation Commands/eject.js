const Discord = require('discord.js');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    const argus = message.content.slice(prefix.length).trim().split(' ');
	var name = argus[1];
	var color = argus[2];
	var crewpostor = argus[3];
    try {
		const impostembed = new Discord.MessageEmbed()
			.setTitle(`${name.replace(/%20/g, ' ').replace(/-/g, ' ')} was ejected`)
			.setImage(`https://vacefron.nl/api/ejected?name=${name.replace(/-/g, '%20')}&impostor=${crewpostor}&crewmate=${color}`)
			.setColor("BLURPLE")
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
