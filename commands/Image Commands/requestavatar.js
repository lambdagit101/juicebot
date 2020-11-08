const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
                const avatarembed = new Discord.MessageEmbed()
                    .setTitle('Here is your requested avatar!')
                    .setImage(user.displayAvatarURL({ format: 'png', size: 512 }))
					.setColor("BLURPLE")
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(avatarembed);
};

module.exports.help = {
    name: "requestavatar",
    description: "Sends the avatar of the person you mentioned. Sends your profile picture if it was unable to retrieve the picture.",
    aliases: ['avatar']
};