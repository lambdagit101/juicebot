const indexfile = require('../../index.js');
const canvacord = require('canvacord');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	var user = message.mentions.users.first() || message.author;
	var output = await indexfile.leveling.Fetch(user.id);
	const rank = new canvacord.Rank()
    .setAvatar(user.displayAvatarURL({format: 'png', size: 512}))
    .setCurrentXP(output.xp)
    .setRequiredXP(100)
		.setRank(output.placement, 'RANK', [true])
		.setLevel(output.level, 'LEVEL', [true])
    .setStatus(user.presence.status)
    .setProgressBar("#FFFFFF")
    .setUsername(user.username)
    .setDiscriminator(user.discriminator);

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
