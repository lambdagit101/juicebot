const Discord = require('discord.js');
const canvacord = require('canvacord');
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
		try {
			var user = message.mentions.users.first() || message.author;
	    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
	    let image = await canvacord.Canvas.jokeOverHead(avatar);
	    let attachment = new Discord.MessageAttachment(image, "jokeOverHead.png");
			const magembed = new Discord.MessageEmbed()
				.setTitle(`/u/${user.username} r/wooosh`)
				.attachFiles({ attachment: attachment, name: "jokeOverHead.png" })
				.setImage(`attachment://jokeOverHead.png`)
				.setColor(embedcolor)
				.setFooter(`Invoked by ${message.author.username}, provided by Canvacord`, message.author.avatarURL());
			message.channel.send(magembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "wooosh",
    description: "Makes a joke go over someone's head.",
    aliases: ['jokeoverhead']
};
