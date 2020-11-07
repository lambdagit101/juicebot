const Discord = require('discord.js');
const canvacord = require('canvacord');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
	var user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
	let username = user.username;
	let messagec = args.join(' ');
    let image = await canvacord.Canvas.phub({username, messagec, avatar});
    let attachment = new Discord.MessageAttachment(image, "phub.png");
    return message.channel.send(attachment);
};

module.exports.help = {
    name: "phub",
    description: "Creates a PornHub comment.",
    aliases: []
};
