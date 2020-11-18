const Discord = require('discord.js');
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    var text = args.slice(0, args.length);
		var finalresult = text.join("%20");
      try {
				const cmmembed = new Discord.MessageEmbed()
				.setTitle(`Someone wants their mind changed`)
				.setColor(embedcolor)
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
    aliases: ['cmm']
};
