const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);

module.exports.run = async (client, message, args) => {
		let link = await alexclient.image.achievement(args.join(' '));
		let attachment = new Discord.MessageAttachment(link, "achievement.png");
		message.channel.send(attachment);
};

module.exports.help = {
    name: "achievement",
    description: "Makes a custom Minecraft Achievement Get box.",
    aliases: ['ach']
};
