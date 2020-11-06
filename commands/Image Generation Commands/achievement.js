const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const argus = message.content.slice(PREFIX.length).trim().split(' ');
			var text = argus.slice(1, argus.length);
			var finalresult = text.join("%20");
            try {
				const cmmembed = new Discord.MessageEmbed()
				.setColor("BLURPLE")
				.setTitle(`${message.author.username}, who has gotten this achievement?`)
				.setImage(`https://api.alexflipnote.dev/achievement?text=${finalresult}`)
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
				message.channel.send(cmmembed);
			} catch (err) {
				console.log(err);
            }
};

module.exports.help = {
    name: "achievement",
    description: "Makes a custom Minecraft Achievement Get box.",
    aliases: []
};