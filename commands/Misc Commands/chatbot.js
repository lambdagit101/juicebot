module.exports.run = async (client, message, args) => {
    const argus = message.content.slice(PREFIX.length).trim().split(' ');
		var text = argus.slice(1, argus.length);
		var finalresult = text.join("%20");
		const chatbot = await fetch(`https://api.snowflakedev.xyz/chatbot?message=${finalresult}&name=${require('.../config.json').botname}&gender=MALE&user=${message.author.id}`);
		const messag = await chatbot.json();
		message.channel.send(messag.message);
};

module.exports.help = {
    name: "chatbot",
    description: "Allows you to talk to someone. Finally.",
    aliases: ['cbot']
};