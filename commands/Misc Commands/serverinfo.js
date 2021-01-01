const Discord = require("discord.js");
const { embedcolor } = require('../../config.json');

module.exports.run = (client, message, args) =>{
        if message.guild return;
        let serverembed = new Discord.MessageEmbed()
        .setTitle(`Information about ${message.guild.name}:`)
        .setColor(embedcolor)
        .setThumbnail(message.guild.iconURL)
        .addField("Created at", message.guild.createdAt)
        .addField("You joined at", message.member.joinedAt)
        .addField("Nitro Boosters:", message.guild.premiumSubscriptionCount)
        .addField("Total members:", message.guild.memberCount)
        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());

        message.channel.send(serverembed);
}

module.exports.help = {
    name: "serverinfo",
    aliases: []
}
