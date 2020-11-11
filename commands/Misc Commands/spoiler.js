const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
	const spoiler = await fetch(`https://nekos.life/api/v2/spoiler?text=${args.join('%20')}`);
	const messag = await spoiler.json();
	message.channel.send(messag.msg || messag.owo);
};

module.exports.help = {
    name: "spoiler",
    description: "Covers text in spoilers.",
    aliases: []
};
