const Discord = require('discord.js');
const fetch = require('node-fetch');
const ksoftsikey = `Bearer ${process.env.KSOFTSI_TOKEN}`

module.exports.run = async (client, message, args) => {
    var details = await fetch('https://api.ksoft.si/images/rand-reddit/sbubby', {
        method: 'get',
        headers: { 'Authorization': ksoftsikey,
				   'User-Agent': message.author.id
				 },
    });
    var detailsjson = await details.json();
    var imageurl = await detailsjson.image_url;
    var embedtitle = await detailsjson.title;
    const redditembed = new Discord.MessageEmbed()
        .setTitle(embedtitle)
		.setColor("BLURPLE")
        .setURL(detailsjson.source)
        .addFields(
          {name: 'Publisher', value: detailsjson.author, inline: true}
        )
        .setImage(imageurl)
        .setFooter(`Invoked by ${message.author.username}, provided by KSoft.Si`, message.author.avatarURL());
    message.channel.send(redditembed);
};

module.exports.help = {
    name: "sbubby",
    description: "Sends a random sbubby. Ye.",
    aliases: []
};