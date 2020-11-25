const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
		try {
			let link = await alexclient.image.pornhub({text: args[0].replace(/-/g, ' '), text2: args[1].replace(/-/g, ' ')});
			let attachment = new Discord.MessageAttachment(link, "pornhub.png");
			const pornembed = new Discord.MessageEmbed()
				.setTitle(`${message.author.username} is horny`)
				.attachFiles({ attachment: `attachment://pornhub.png`, name: "pornhub.png" })
				.setImage(`attachment://pornhub.png`)
				.setColor(embedcolor)
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
			message.channel.send(pornembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "pornhub",
    description: "Creates a custom PornHub logo, you horny boy.",
    aliases: ['phub']
};
