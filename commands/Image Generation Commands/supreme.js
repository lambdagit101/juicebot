const Discord = require('discord.js');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
		var text = args.slice(0, args.length);
		var finalresult = text.join("%20");

		const heavenembed = new Discord.MessageEmbed()
			.setTitle(`${message.author.username} is rich`)
			.setColor("BLURPLE")
			.setImage(`https://api.alexflipnote.dev/supreme?text=${finalresult}`)
			.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
			message.channel.send(heavenembed);
};

module.exports.help = {
    name: "supreme",
    description: "Makes a Supreme styled logo.",
    aliases: ['richify']
};
