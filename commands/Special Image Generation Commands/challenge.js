const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);

module.exports.run = async (client, message, args) => {
		let link = await alexclient.image.challenge(args.join(' '));
		let attachment = new Discord.MessageAttachment(link, "challenge.png");
		message.channel.send(attachment);
};

module.exports.help = {
    name: "challenge",
    description: "Makes a custom Minecraft Challenge Complete box.",
    aliases: ['chal']
};
