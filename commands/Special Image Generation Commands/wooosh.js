const Discord = require('discord.js');
const canvacord = require('canvacord');

module.exports.run = async (client, message, args) => {
	var user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await canvacord.Canvas.jokeOverHead(avatar);
    let attachment = new Discord.MessageAttachment(image, "jokeOverHead.png");
    return message.channel.send(attachment);
};

module.exports.help = {
    name: "wooosh",
    description: "Makes a joke go over someone's head.",
    aliases: ['jokeoverhead']
};
