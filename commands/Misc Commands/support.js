module.exports.run = async (client, message, args) => {
    try {
			message.author.send('Support server: ' + require('.../config.json').supportserver);
		} catch (err) {
			message.channel.send('Support server: ' + require('.../config.json').supportserver);
		}
};

module.exports.help = {
    name: "support",
    description: "Sends an invite to the support server. Nothing else.",
    aliases: []
};