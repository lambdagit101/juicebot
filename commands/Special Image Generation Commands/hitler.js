const Discord = require('discord.js');
const canvacord = require('canvacord');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
	var user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await canvacord.Canvas.hitler(avatar);
    let attachment = new Discord.MessageAttachment(image, "hitler.png");
    return message.channel.send(attachment);
};

module.exports.help = {
    name: "hitler",
    description: "Makes someone worse than hitler.",
    aliases: []
};
