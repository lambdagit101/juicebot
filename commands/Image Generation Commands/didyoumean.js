const Discord = require('discord.js');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
            try {
				const cmmembed = new Discord.MessageEmbed()
				.setTitle(`Correction.`)
				.setColor("BLURPLE")
				.setImage(`https://api.alexflipnote.dev/didyoumean?top=${args[0].replace(/-/g, '%20')}&bottom=${args[1].replace(/-/g, '%20')}`)
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
				message.channel.send(cmmembed);
			} catch (err) {
				console.log(err);
            }
};

module.exports.help = {
    name: "didyoumean",
    description: "Best way to correct somebody.",
    aliases: []
};
