const Discord = require('discord.js');
const canvacord = require('canvacord');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
	var user = message.mentions.users.first() || message.author;
	var user1 = message.mentions.users[1] || message.author;
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
		let avatar2 = user1.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await canvacord.Canvas.kiss(avatar, avatar2);
    let attachment = new Discord.MessageAttachment(image, "jokeOverHead.png");
    return message.channel.send(attachment);
};

module.exports.help = {
    name: "kiss",
    description: "Kisses.",
    aliases: []
};
