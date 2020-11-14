const indexfile = require('../../index.js');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	message.channel.send(`\`\`\`${indexfile.leveling.createLeaderboard(client).content}\`\`\``);
};

module.exports.help = {
    name: "leaderboard",
    description: "Shows all scores.",
    aliases: ['scores']
};
