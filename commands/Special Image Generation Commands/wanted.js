const Discord = require('discord.js');
const canvacord = require('canvacord');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
	var user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await canvacord.Canvas.wanted(avatar);
    let attachment = new Discord.MessageAttachment(image, "wanted.png");
    return message.channel.send(attachment);
};

module.exports.help = {
    name: "wanted",
    description: "Wants... you?",
    aliases: []
};
