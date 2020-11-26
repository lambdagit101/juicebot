const Discord = require('discord.js');
const canvacord = require('canvacord');
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
		try {
			var user = message.mentions.users.first() || message.author;
	    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
	    let image = await canvacord.Canvas.rainbow(avatar);
	    let attachment = new Discord.MessageAttachment(image, "rainbow.png");
			const magembed = new Discord.MessageEmbed()
				.setTitle(`Don't know what to say about this`)
				.attachFiles({ attachment: image, name: "rainbow.png" })
				.setImage(`attachment://rainbow.png`)
				.setColor(embedcolor)
				.setFooter(`Invoked by ${message.author.username}, provided by Canvacord`, message.author.avatarURL());
			message.channel.send(magembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "rainbow",
    description: "Rainbow-ifies a profile picture.",
    aliases: []
};
