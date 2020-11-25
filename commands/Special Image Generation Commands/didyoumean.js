const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);

module.exports.run = async (client, message, args) => {
		let link = await alexclient.image.didyoumean(args[0].replace(/-/g, ' '), args[1].replace(/-/g, ' '));
		let attachment = new Discord.MessageAttachment(link, "didyoumean.png");
		message.channel.send(attachment);
};

module.exports.help = {
    name: "didyoumean",
    description: "Best way to correct somebody.",
    aliases: ['correction']
};
