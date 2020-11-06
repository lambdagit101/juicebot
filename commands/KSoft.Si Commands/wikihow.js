const Discord = require('discord.js');
const fetch = require('node-fetch');
const ksoftsikey = `Bearer ${process.env.KSOFTSI_TOKEN}`

module.exports.run = async (client, message, args) => {
    var deetails = await fetch('https://api.ksoft.si/images/random-wikihow', {
            method: 'get',
            headers: { 'Authorization': ksoftsikey,
					   'User-Agent': message.author.id
					 },
        });
        var deetailsjson = await deetails.json();
        var imageurl = await deetailsjson.url;
        var embedtitle = await deetailsjson.title;
        var embedtitleurl = await deetailsjson.article_url;
        const wikiembed = new Discord.MessageEmbed()
            .setTitle(embedtitle)
			.setColor("BLURPLE")
            .setURL(embedtitleurl)
            .setImage(imageurl)
            .setFooter(`Invoked by ${message.author.username}, provided by KSoft.Si`, message.author.avatarURL());
        message.channel.send(wikiembed);
};

module.exports.help = {
    name: "wikihow",
    description: "Brings you random images from WikiHow.",
    aliases: []
};