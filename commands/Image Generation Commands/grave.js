const Discord = require('discord.js');
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    try {
      const avatarembed = new Discord.MessageEmbed()
	        .setColor(embedcolor)
          .setTitle("Rest in peace")
          .setImage(`https://vacefron.nl/api/grave?user=${user.displayAvatarURL({ format: 'png', size: 512 })}`)
          .setFooter(`Invoked by ${message.author.username}, provided by vacefron.nl`, message.author.avatarURL());
      message.channel.send(avatarembed);
    } catch (err) {
      console.log(err);
    }
};

module.exports.help = {
    name: "grave",
    description: "Creates a simple grave with someone's profile picture.",
    aliases: []
};
