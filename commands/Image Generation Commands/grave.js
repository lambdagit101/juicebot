const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
        if (user) {
            try {
                const avatarembed = new Discord.MessageEmbed()
					.setColor("BLURPLE")
                    .setTitle('Rest in peace')
                    .setImage(`https://vacefron.nl/api/grave?user=${user.displayAvatarURL({ format: 'png', size: 512 })}`)
                    .setFooter(`Invoked by ${message.author.username}, provided by vacefron.nl`, message.author.avatarURL());
                message.channel.send(avatarembed);
            } catch (err) {
                console.log(err);
            }
        } else {
            const avatarembed = new Discord.MessageEmbed()
                .setTitle('Rest in peace')
				.setColor("BLURPLE")
                .setImage(`https://vacefron.nl/api/grave?user=${message.author.displayAvatarURL({ format: 'png', size: 512 })}`)
                .setFooter(`Invoked by ${message.author.username}, provided by vacefron.nl`, message.author.avatarURL());
            message.channel.send(avatarembed);
        }
};

module.exports.help = {
    name: "grave",
    description: "Creates a simple grave with someone's profile picture.",
    aliases: []
};