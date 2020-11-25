const Discord = require('discord.js');
const canvacord = require('canvacord');

module.exports.run = async (client, message, args) => {
		try {
			var user = message.mentions.users.first() || message.author;
	    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
	    let image = await canvacord.Canvas.affect(avatar);
	    let attachment = new Discord.MessageAttachment(image, "affected.png");
			const cembed = new Discord.MessageEmbed()
				.setTitle(`That sure affected the baby`)
				.setImage(`attachment://affected.png`)
				.setColor(embedcolor)
				.setFooter(`Invoked by ${message.author.username}, provided by Canvacord`, message.author.avatarURL());
			message.channel.send(cembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "affect",
    description: "Creates an affected baby.",
    aliases: []
};
