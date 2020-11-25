const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);

module.exports.run = async (client, message, args) => {
		let link = await alexclient.image.captcha({text: args.join(' ')});
		let attachment = new Discord.MessageAttachment(link, "ccaptcha.png");
		message.channel.send(attachment);
};

module.exports.help = {
    name: "customcaptcha",
    description: "Creates custom checkbox reCAPTCHA v2 styled images.",
    aliases: ['ccaptcha']
};
