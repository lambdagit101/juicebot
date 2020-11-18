const Discord = require('discord.js');
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    var text = args.slice(0, args.length);
		var finalresult = text.join("%20");
      try {
				const meembed = new Discord.MessageEmbed()
				    .setTitle(`${message.author.username} called a meeting`)
				    .setColor(embedcolor)
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
