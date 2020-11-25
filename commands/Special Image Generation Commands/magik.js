const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);

module.exports.run = async (client, message, args) => {
		const user = message.mentions.users.first() || message.author;
		let link = await alexclient.image.magik({image: user.displayAvatarURL({ format: 'png', size: 512 })});
		let attachment = new Discord.MessageAttachment(link, "magik.png");
		message.channel.send(attachment);
};

module.exports.help = {
    name: "magik",
    description: "Merasmus is here. MAGIK!",
    aliases: []
};
