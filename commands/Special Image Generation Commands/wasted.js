const Discord = require('discord.js');
const canvacord = require('canvacord');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
	var user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await canvacord.Canvas.wasted(avatar);
    let attachment = new Discord.MessageAttachment(image, "wasted.png");
    return message.channel.send(attachment);
};

module.exports.help = {
    name: "wasted",
    description: "Makes a GTA Wasted image using your or someone else's profile picture",
    aliases: []
};
