const { prefix } = require('..../config.json');

module.exports.run = async (client, message, args) => {
    const argus = message.content.slice(prefix.length).trim().split(' ');
        const chanel = await getUserFromMention(argus[1]);
        const text = message.content.split(argus[1] + " ")[1];
        try {
            if (chanel.permissionsFor(message.author).has('SEND_MESSAGES')) {
                chanel.send(text);
                
                return;
            }
        } catch (err) {
            const chanel = args[1];
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

async function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith('<#') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }
        console.log(mention);
        return await client.channels.cache.get(mention);
    }
}
