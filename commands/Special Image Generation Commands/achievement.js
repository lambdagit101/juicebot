const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
		try {
			let link = await alexclient.image.achievement({text: args.join(' ')});
			const achembed = new Discord.MessageEmbed()
				.setTitle(`Achievement Get!`)
				.attachFiles({ attachment: link, name: "achievement.png" })
				.setImage(`attachment://achievement.png`)
				.setColor(embedcolor)
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
			message.channel.send(achembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "achievement",
    description: "Makes a custom Minecraft Achievement Get box.",
    aliases: ['ach']
};
