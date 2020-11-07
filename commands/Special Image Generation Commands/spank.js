const Discord = require('discord.js');
const canvacord = require('canvacord');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
	var user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await canvacord.Canvas.slap(avatar, message.mentions.users[1].displayAvatarURL({ dynamic: false, format: 'png' }));
    let attachment = new Discord.MessageAttachment(image, "spank.png");
    return message.channel.send(attachment);
};

module.exports.help = {
    name: "spank",
    description: "Spanks someone.",
    aliases: ['slap']
};
