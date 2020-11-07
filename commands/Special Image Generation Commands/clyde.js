const Discord = require('discord.js');
const canvacord = require('canvacord');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
	let messagec = args.join(' ');
    let image = await canvacord.Canvas.clyde(messagec);
    let attachment = new Discord.MessageAttachment(image, "clyde.png");
    return message.channel.send(attachment);
};

module.exports.help = {
    name: "clyde",
    description: "Simulates a message sent by Clyde.",
    aliases: []
};
