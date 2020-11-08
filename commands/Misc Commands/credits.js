const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const creditsembed = new Discord.MessageEmbed()
        .setTitle(require('../../config.json').botname)
		.setColor("BLURPLE")
        .setDescription('Made by ' + require('../../config.json').creator +' using discord.js.\n\n**Contributor list: **' + require('../../config.json').contributors.join(', ') + '.\nThank you all for helping!')
        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(creditsembed);
};

module.exports.help = {
    name: "credits",
    description: "Shows info about the main collaborators and project creator.",
    aliases: []
};