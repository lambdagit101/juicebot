const indexfile = require('../../index.js');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	const rawLeaderboard = await indexfile.Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.
	if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");
	const leaderboard = await indexfile.Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.
	const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`); // We map the outputs.
	message.channel.send(`**Leaderboard**:\n\n${lb.join("\n\n")}`);
};

module.exports.help = {
    name: "leaderboard",
    description: "Shows all scores.",
    aliases: ['scores']
};
