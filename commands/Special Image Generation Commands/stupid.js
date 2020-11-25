const Discord = require('discord.js');
const canvacord = require('canvacord');
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
		try {
			let messagec = args.join(' ');
	    let image = await canvacord.Canvas.ohno(messagec);
	    let attachment = new Discord.MessageAttachment(image, "ohno.png");
			const magembed = new Discord.MessageEmbed()
				.setTitle(`Isn't that stupid, ${message.author.username}?`)
				.attachFiles({ attachment: `attachment://ohno.png`, name: "ohno.png" })
				.setImage(`attachment://ohno.png`)
				.setColor(embedcolor)
				.setFooter(`Invoked by ${message.author.username}, provided by Canvacord`, message.author.avatarURL());
			message.channel.send(magembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "stupid",
    description: "Oh no, it's stupid!",
    aliases: []
};
