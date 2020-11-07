const Discord = require('discord.js');
const { prefix } = require('..../config.json');

module.exports.run = async (client, message, args) => {
    const argus = message.content.slice(prefix.length).trim().split(' ');
			var text = argus.slice(1, argus.length);
			var finalresult = text.join("%20");
            try {
				const meembed = new Discord.MessageEmbed()
				.setTitle(`${message.author.username} called a meeting`)
				.setColor("BLURPLE")
				.setImage(`https://vacefron.nl/api/emergencymeeting?text=${finalresult}`)
				.setFooter(`Invoked by ${message.author.username}, provided by vacefron.nl`, message.author.avatarURL());
				message.channel.send(meembed);
			} catch (err) {
				console.log(err);
            }
};

module.exports.help = {
    name: "meeting",
    description: "Calls an emergency meeting with YOUR reason.",
    aliases: ['emergencymeeting']
};
