const indexfile = require('../../index.js');
const canvacord = require('canvacord');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	const target = message.mentions.users.first() || message.author;
	const user = await indexfile.Levels.fetch(target.id, message.guild.id);
	const rank = new canvacord.Rank()
    .setAvatar(target.displayAvatarURL({format: 'png', size: 512}))
    .setCurrentXP(user.xp - 300)
    .setRequiredXP(indexfile.Levels.xpFor(user.level))
		.setRank(0)
		.setLevel(user.level)
    .setStatus(target.presence.status)
    .setProgressBar("#FFFFFF")
    .setUsername(target.username)
    .setDiscriminator(target.discriminator);

		rank.build()
    	.then(data => {
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        message.channel.send(attachment);
    });
};

module.exports.help = {
    name: "rank",
    description: "Checks on your/someone's rank.",
    aliases: []
};
