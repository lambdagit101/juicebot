const Discord = require('discord.js');
const canvacord = require('canvacord');

module.exports.run = async (client, message, args) => {
		try {
			var user = message.mentions.users.first() || message.author;
	    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
	    let image = await canvacord.Canvas.shit(avatar);
	    let attachment = new Discord.MessageAttachment(image, "ohshit.png");
			const magembed = new Discord.MessageEmbed()
				.setTitle(`An interesting title`)
				.setImage(`attachment://ohshit.png`)
				.setColor(embedcolor)
				.setFooter(`Invoked by ${message.author.username}, provided by Canvacord`, message.author.avatarURL());
			message.channel.send(magembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "ohshit",
    description: "Steps in shit.",
    aliases: []
};
