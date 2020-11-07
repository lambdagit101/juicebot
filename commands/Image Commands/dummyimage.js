const { prefix } = require('.../config.json');

module.exports.run = async (client, message, args) => {
    const argus = message.content.slice(prefix.length).trim().split(' ');
        const width = argus[1].toLowerCase();
        const text = message.content.split(argus[1] + " ")[1];
        const forrealtext = text.replace(/ /g, "%20");
        message.channel.send('https://dummyimage.com/' + width + '/' + '000/fff.png&text=' + forrealtext + '+');
};

module.exports.help = {
    name: "dummyimage",
    description: "Creates a simple image with a specified width+height and text.",
    aliases: []
};
