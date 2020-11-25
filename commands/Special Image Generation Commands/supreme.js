const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);

module.exports.run = async (client, message, args) => {
		let link = await alexclient.image.supreme(args.join(' '));
		let attachment = new Discord.MessageAttachment(link, "supreme.png");
		message.channel.send(attachment);
};

module.exports.help = {
    name: "supreme",
    description: "Makes a Supreme styled logo.",
    aliases: ['richify']
};
