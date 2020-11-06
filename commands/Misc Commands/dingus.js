module.exports.run = async (client, message, args) => {
    if (message.author.id == require('../config.json').creatorUserID) {
            const argus = message.content.slice(PREFIX.length).trim().split(' ');
			var command = argus.slice(1, argus.length);
			var finalresult = command.join(" ");
            try {
				console.log(finalresult);
                eval(finalresult); 
            } catch (err) {
		
                message.channel.send(`JavaScript error occured: ${err}`);
				console.log(err);
            }
        } else {
            message.channel.send(`Only ${require('.../config.json').creator} can use this command!`);
        }
};

module.exports.help = {
    name: "dingus",
    description: "Executes raw JavaScript code. Bot owner only!",
    aliases: ['console']
};