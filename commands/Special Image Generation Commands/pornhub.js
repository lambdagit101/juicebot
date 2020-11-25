const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);

module.exports.run = async (client, message, args) => {
		let link = await alexclient.image.pornhub({text: args[0].replace(/-/g, ' '), text2: args[1].replace(/-/g, ' ')});
		let attachment = new Discord.MessageAttachment(link, "pornhub.png");
		message.channel.send(attachment);
};

module.exports.help = {
    name: "pornhub",
    description: "Creates a custom PornHub logo, you horny boy.",
    aliases: ['phub']
};
