const Discord = require('discord.js');
const { client, PREFIX } = require('../index');
const db = require('quick.db');
const { EconomyManager } = require("quick.eco");
const eco = new EconomyManager({
    adapter: 'mysql',
    adapterOptions: {
        user: process.env.CLEARDB_DATABASE_USERNAME,
        password: process.env.CLEARDB_DATABASE_PASSWORD,
        host: process.env.CLEARDB_DATABASE_HOST,
        database: process.env.CLEARDB_DATABASE_DATABASE
    }    
});

client.on('message', async (message) => {
	
    if (!message.guild) return;
	if (message.author.bot) return;
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}daily`)) {
        let add = await eco.daily(message.author.id, false, 500);
        if (add.cooldown) return message.reply(`You already claimed your daily coins. Come back after ${add.time.days} days, ${add.time.hours} hours, ${add.time.minutes} minutes & ${add.time.seconds} seconds.`);
        return message.reply(`you claimed ${add.amount} as your daily coins and now you have total ${add.money} coins.`);
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}bal`)) {
        let money = await eco.fetchMoney(message.author.id);
        return message.channel.send(`${message.author} has ${money} coins.`);
    }

    if (message.content.toLowerCase.startsWith(`${PREFIX}leaderboard`)) {
        let lb = await eco.leaderboard(false, 10);
        const embed = new Discord.MessageEmbed()
        .setAuthor("Leaderboard")
        .setColor("BLURPLE");
        lb.forEach(u => {
            embed.addField(`${u.position}. ${client.users.cache.get(u.user).tag}`, `Money: ${u.money} 💸`);
        });
        return message.channel.send(embed);
    }
	
});
