const Discord = require('discord.js');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    var text = args.slice(0, args.length);
		var finalresult = text.join("%20");
            try {
				const cmmembed = new Discord.MessageEmbed()
				.setTitle(`${message.author.username} wants someone to solve this captcha`)
				.setColor("BLURPLE")
				.setImage(`https://api.alexflipnote.dev/captcha?text=${finalresult}`)
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
				message.channel.send(cmmembed);
			} catch (err) {
				console.log(err);
            }
};

module.exports.help = {
    name: "customcaptcha",
    description: "Creates custom checkbox reCAPTCHA v2 styled images.",
    aliases: []
};
