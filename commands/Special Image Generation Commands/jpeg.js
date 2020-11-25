const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
		try {
			const user = message.mentions.users.first() || message.author;
			let link = await alexclient.image.jpegify({image: user.displayAvatarURL({ format: 'png', size: 512 })});
			let attachment = new Discord.MessageAttachment(link, "jpeg.png");
			const jpembed = new Discord.MessageEmbed()
				.setTitle(`Does ${user.username} look like they know what a JPEG is?`)
				.setImage(`attachment://jpeg.png`)
				.setColor(embedcolor)
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
			message.channel.send(jpembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "jpeg",
    description: "JPEGifies a profile picture.",
    aliases: []
};
