const Discord = require('discord.js');
const canvacord = require('canvacord');

module.exports.run = async (client, message, args) => {
	let messagec = args.join(' ');
    let image = await canvacord.Canvas.ohno(messagec);
    let attachment = new Discord.MessageAttachment(image, "ohno.png");
    return message.channel.send(attachment);
};

module.exports.help = {
    name: "stupid",
    description: "Oh no, it's stupid!",
    aliases: []
};
