const Discord = require('discord.js');
const canvacord = require('canvacord');
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
		try {
			var user = message.mentions.users.first() || message.author;
	    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
	    let image = await canvacord.Canvas.wasted(avatar);
	    let attachment = new Discord.MessageAttachment(image, "wasted.png");
			const magembed = new Discord.MessageEmbed()
				.setTitle(`${user.username} was obliterated by the Orbital Cannon`)
				.attachFiles({ attachment: link, name: "wasted.png" })
				.setImage(`attachment://wasted.png`)
				.setColor(embedcolor)
				.setFooter(`Invoked by ${message.author.username}, provided by Canvacord`, message.author.avatarURL());
			message.channel.send(magembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "wasted",
    description: "Makes a GTA Wasted image using your or someone else's profile picture.",
    aliases: []
};
