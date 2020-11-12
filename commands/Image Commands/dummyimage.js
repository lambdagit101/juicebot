const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
		var forrealtext = args.slice(1, args.length).join("%20");
        message.channel.send('https://dummyimage.com/' + args[0] + '/' + '000/fff.png&text=' + forrealtext + '+');
};

module.exports.help = {
    name: "dummyimage",
    description: "Creates a simple image with a specified width+height and text.",
    aliases: ['sample']
};
