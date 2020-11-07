const Discord = require('discord.js');
const { prefix } = require('./config.json');

module.exports.run = async (client, message, args) => {
    const argus = message.content.slice(prefix.length).trim().split(' ');
			var text = argus.slice(1, argus.length);
			var finalresult = text.join("%20");
            try {
				const cmmembed = new Discord.MessageEmbed()
				.setTitle(`${message.author.username} wants their mind changed`)
				.setColor("BLURPLE")
				.setImage(`https://vacefron.nl/api/changemymind?text=${finalresult}`)
				.setFooter(`Invoked by ${message.author.username}, provided by vacefron.nl`, message.author.avatarURL());
				message.channel.send(cmmembed);
			} catch (err) {
				console.log(err);
            }
};

module.exports.help = {
    name: "changemymind",
    description: "Changes minds.",
    aliases: []
};
