const Discord = require('discord.js');
const fetch = require('node-fetch');
const ksoftsikey = `Bearer ${process.env.KSOFTSI_TOKEN}`

module.exports.run = async (client, message, args) => {
    var { image_url, title, source, author, subreddit } = await fetch('https://api.ksoft.si/images/rand-reddit/comedyheaven', { method: 'get', headers: { 'Authorization': ksoftsikey, 'User-Agent': message.author.id }}).then(response => response.json())
    const redditembed = new Discord.MessageEmbed()
        .setTitle(title)
		.setColor("BLURPLE")
        .setURL(source)
        .addFields(
          {name: 'Publisher', value: author, inline: true},
		  {name: 'Subreddit', value: subreddit, inline: true}
        )
        .setImage(imageurl)
        .setFooter(`Invoked by ${message.author.username}, provided by KSoft.Si`, message.author.avatarURL());
    message.channel.send(redditembed);
};

module.exports.help = {
    name: "comedyheaven",
    description: "Where the comedy is so bad, it ascends.",
    aliases: []
};