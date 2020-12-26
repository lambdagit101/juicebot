const Discord = require("discord.js");

module.exports.run = (client, message,args) =>{
        let serverembed = new Discord.MessageEmbed()
        .setDescription("Information of server:")
        .setColor('RANDOM')
        .setThumbnail(message.guild.iconURL)
        .addField("Name of server:", message.guild.name)
        .addField("Created at", message.guild.createdAt)
        .addField("you joined at", message.member.joinedAt)
        .addField("Total members:", message.guild.memberCount);

        message.channel.send(serverembed);
}

module.exports.help = {
    name: "serverinfo",
    aliases: []
}
