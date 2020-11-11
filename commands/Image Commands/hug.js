const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
		const huggifs = await fetch('https://nekos.life/api/hug');
		const huggifsjson = await huggifs.json();
		const hugembed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} hugged ${user.username}`)
            .setImage(huggifsjson.url)
			.setColor("BLURPLE")
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(hugembed);
};

module.exports.help = {
    name: "hug",
    description: "Hugs someone you mention. If you don't mention anybody, you will hug yourself. I do this because the only person who hugs me is my mom.",
    aliases: []
};