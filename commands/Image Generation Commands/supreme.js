const Discord = require('discord.js');
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
		const richembed = new Discord.MessageEmbed()
			.setTitle(`${message.author.username} is rich`)
			.setColor(embedcolor)
			.setImage(`https://api.alexflipnote.dev/supreme?text=${args.join('%20')}`)
			.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
		message.channel.send(richembed);
};

module.exports.help = {
    name: "supreme",
    description: "Makes a Supreme styled logo.",
    aliases: ['richify']
};
