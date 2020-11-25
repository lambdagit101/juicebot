const Discord = require('discord.js');
const canvacord = require('canvacord');

module.exports.run = async (client, message, args) => {
		try {
			var user = message.mentions.users.first() || message.author;
		  let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
		  let image = await canvacord.Canvas.trash(avatar);
		  let attachment = new Discord.MessageAttachment(image, "trash.png");
			const magembed = new Discord.MessageEmbed()
				.setTitle(`Trash`)
				.setImage(`attachment://trash.png`)
				.setColor(embedcolor)
				.setFooter(`Invoked by ${message.author.username}, provided by Canvacord`, message.author.avatarURL());
			message.channel.send(magembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "trash",
    description: "Turns you or someone into trash.",
    aliases: []
};
