const Discord = require("discord.js");
const randomanime = require("random-anime");
const { embedcolor } = require('../../config.json');

module.exports.run = (client, message, args) => {
    const anime = randomanime.anime();
    const embed = new Discord.MessageEmbed().setImage(anime).setColor(embedcolor).setTitle(":>").setFooter(`Invoked by ${message.author.username}, provided by random-anime`, message.author.avatarURL());
    message.channel.send(embed);
}


module.exports.help = {
    name: "anime",
    description: "Sends random anime images.",
    aliases: []
}
