const Discord = require('discord.js');
const fetch = require('node-fetch');
const ksoftsikey = `Bearer ${process.env.KSOFTSI_TOKEN}`

module.exports.run = async (client, message, args) => {
	var { url, title, article_url } = await fetch('https://api.ksoft.si/images/random-wikihow', { method: 'get', headers: { 'Authorization': ksoftsikey, 'User-Agent': message.author.id }}).then(response => response.json())
    const redditembed = new Discord.MessageEmbed()
        .setTitle(title)
		.setColor("BLURPLE")
        .setURL(article_url)
        .setImage(url)
        .setFooter(`Invoked by ${message.author.username}, provided by KSoft.Si`, message.author.avatarURL());
    message.channel.send(redditembed);
};

module.exports.help = {
    name: "wikihow",
    description: "Brings you random images from WikiHow.",
    aliases: []
};