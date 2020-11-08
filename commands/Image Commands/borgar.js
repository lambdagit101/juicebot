const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const borgarembed = new Discord.MessageEmbed()
            .setTitle('Borgar')
            .setImage('https://cdn.discordapp.com/attachments/736196476837036102/749324531943997502/borgar.PNG')
			.setColor("BLURPLE")
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(borgarembed);
};

module.exports.help = {
    name: "borgar",
    description: "I do not care what race you are, I do not care what sexuality you are, but the borgar command is the one we need the most.",
    aliases: []
};