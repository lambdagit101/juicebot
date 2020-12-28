const Discord = require('discord.js');
const { prefix, botname, gitlink, creator, embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    const hembed = new Discord.MessageEmbed()
        .setTitle(`Hi, My name is ${botname}!`)
		    .setDescription(`Are you looking for the command list? [Click here](https://juicebot.lambdaguy101.com/)`)
		    .setColor(embedcolor)
        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
    message.channel.send(hembed);
};

module.exports.help = {
    name: "help",
    description: "Sends you the link to the help page.",
    aliases: []
};
