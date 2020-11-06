module.exports.run = async (client, message, args) => {
    try {
			message.author.send('https://lambdagit101.github.io/juicebotweb/help');
		} catch (err) {
			console.log(err);
			message.channel.send("https://lambdagit101.github.io/juicebotweb/help");
		}
};

module.exports.help = {
    name: "help",
    description: "You have forgotten so many things that you need to use the help command on the help command.",
    aliases: []
};