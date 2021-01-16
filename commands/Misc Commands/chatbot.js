const { prefix } = require('../../config.json');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
		fetch('https://some-random-api.ml/chatbot?message=' + encodeURIComponent(args.join(' ')))
			.then(res => res.json())
			.then(message.channel.send(json.response));
};

module.exports.help = {
    name: "chatbot",
    description: "Allows you to talk to someone. Finally.",
    aliases: ['cbot']
};
