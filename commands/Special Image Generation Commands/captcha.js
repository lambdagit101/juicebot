const Discord = require('discord.js');
const { CaptchaGenerator } = require('captcha-canvas');
const options = {height: 200, width: 600};

module.exports.run = async (client, message, args) => {
		const captcha = new CaptchaGenerator(options);
    const buffer = await captcha.generate();
    let attachment = new Discord.MessageAttachment(buffer, "captcha.png");
    return message.channel.send(attachment);
};

module.exports.help = {
    name: "captcha",
    description: "Creates a brand new captcha.",
    aliases: []
};
