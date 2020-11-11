const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
        const chanel = await getUserFromMention(args[0], client);
		var text = args.slice(1, args.length).join(' ');
        try {
            if (chanel.permissionsFor(message.author).has('SEND_MESSAGES')) {
                chanel.send(text);
                return;
            }
        } catch (err) {
            const chanel = args[0];
            if (text == null) {
                message.channel.send(chanel);
                return;
            } else {
                message.channel.send(chanel + " " + text);
                return;
            }
        }
};

module.exports.help = {
    name: "print",
    description: "Prints a message to the said channel.",
    aliases: ["say"]
};

async function getUserFromMention(mention, client) {
    if (!mention) return;

    if (mention.startsWith('<#') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }
        return await client.channels.cache.get(mention);
    }
}
