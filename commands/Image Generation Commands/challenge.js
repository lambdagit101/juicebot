const Discord = require('discord.js');
const { prefix } = require('..../config.json');

module.exports.run = async (client, message, args) => {
    const argus = message.content.slice(prefix.length).trim().split(' ');
			var text = argus.slice(1, argus.length);
			var finalresult = text.join("%20");
            try {
				const cmmembed = new Discord.MessageEmbed()
				.setColor("BLURPLE")
				.setTitle(`${message.author.username}, who has solved this challenge?`)
				.setImage(`https://api.alexflipnote.dev/challenge?text=${finalresult}`)
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
				message.channel.send(cmmembed);
			} catch (err) {
				console.log(err);
            }
};

module.exports.help = {
    name: "challenge",
    description: "Makes a custom Minecraft Challenge Complete box.",
    aliases: []
};
