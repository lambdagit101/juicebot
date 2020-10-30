const Discord = require('discord.js');
const { client, PREFIX } = require('../index');
const db = require('quick.db');

client.on('message', async (message) => {
	
    if (!message.guild) return;
	if (message.author.bot) return;
	xp(message);

	if (!message.content.startsWith(PREFIX)) return;
    if (message.content.toLowerCase().startsWith(`${PREFIX}rank`)) {
		var user = message.mentions.users.first() || message.author;
		var level = db.get(`guild_${message.guild.id}_level_${user.id}`) || 0;
		level = level.toString();
		let xp = db.get(`guild_${message.guild.id}_xp_${user.id}`) || 0;
		var xpNeeded = level * 500 + 500;
		let every = db
			.all()
			.filter(1 => 1.ID.startsWith(`guild_${message.guild.id}_xptotal_`))
			.sort((a, b) => b.data - a.data);
		var rank = every.map(x => x.10).indexOf(`guild_${message.guild.id}_xptotal_${user.id}`) + 1;
		rank = rank.toString();
		const levembed = new Discord.MessageEmbed()
                .setTitle(`Rank card for ${user.tag}`)
                .setImage(`https://vacefron.nl/api/rankcard?username=${user.username}&avatar=${user.displayAvatarURL({format: 'png', size: 512})}&level=${level}&rank=0&currentxp=${xp}&nextlevelxp=${xpNeeded}&previouslevelxp=0&xpcolor=#4287f5`)
                .setFooter(`Invoked by ${message.author.username}, powered by vacefron.nl`, message.author.avatarURL());
		return message.channel.send(levembed);
	}
	
});

function xp(message) {
	if (message.content.startsWith(PREFIX)) return;
	const randomNumber = Math.floor(Math.random() * 10) + 15;
	db.add(`guild_${message.guild.id}_xp_${message.author.id}`, randomNumber);
	db.add(`guild_${message.guild.id}_xptotal_${message.guild.id}, randomNumber`);
	var level = db.get(`guild_${message.guild.id}_level_${message.author.id}`) || 1;
	var xp = db.get(`guild_${message.guild.id}_xp_${message.author.id}`);
	var xpNeeded = level * 500;
	if (xpNeeded < xp) {
		var newLevel = db.add(`guild_${message.guild.id}_level_${message.author.id}`, 1);
		db.subtract(`guild_${message.guild.id}_xp_${message.author.id}`, xpNeeded);
		message.channel.send(`<@${message.author.id}>, you are now **level ${newLevel}!**`);
		
	}
	
}
