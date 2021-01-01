const { prefix } = require('../../config.json');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
		const chatbot = await fetch(`https://some-random-api.ml/chatbot?message=${args.join("%20")}`);
		const messag = await chatbot.json();
		message.channel.send(messag.message);
};

module.exports.help = {
    name: "chatbot",
    description: "Allows you to talk to someone. Finally.",
    aliases: ['cbot']
};
