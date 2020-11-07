const { prefix } = require('../../config.json');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
		var text = args.slice(0, args.length);
		var finalresult = text.join("%20");
		const chatbot = await fetch(`https://api.snowflakedev.xyz/chatbot?message=${finalresult}&name=${require('../../config.json').botname}&gender=MALE&user=${message.author.id}`);
		const messag = await chatbot.json();
		message.channel.send(messag.message);
};

module.exports.help = {
    name: "chatbot",
    description: "Allows you to talk to someone. Finally.",
    aliases: ['cbot']
};
