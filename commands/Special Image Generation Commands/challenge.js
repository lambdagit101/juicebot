const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);

module.exports.run = async (client, message, args) => {
		try {
			let link = await alexclient.image.challenge({text: args.join(' ')});
			let attachment = new Discord.MessageAttachment(link, "challenge.png");
			const cembed = new Discord.MessageEmbed()
				.setTitle(`Challenge Complete!`)
				.setImage(`attachment://challenge.png`)
				.setColor(embedcolor)
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
			message.channel.send(cembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "challenge",
    description: "Makes a custom Minecraft Challenge Complete box.",
    aliases: ['chal']
};
