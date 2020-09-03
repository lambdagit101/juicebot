// This module uses the KSoft.Si API. You need to get your own app approved to use this module.
// If your app did not get approved, then bad luck. If you do not have a token, register one!
// Until then, comment the entire module.

const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch');
const ksoftkey = `Bearer ${process.env.KSOFTSI_TOKEN}`; // This is the token you get if your KSoft app is approved

client.on('message', async (message) => 
{
    if (message.author.bot) return;
    if (!message.guild) return;

    if (message.content.toLowerCase().startsWith(`${PREFIX}hentai`)) {
        if (message.channel.nsfw == true) {
            fetchredditi('https://api.ksoft.si/images/rand-reddit/hentai', message);
        }
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}randomnsfw`)) {
        if (message.channel.nsfw == true) {
            fetchredditi('https://api.ksoft.si/images/random-nsfw', message);
        }
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}porn`)) {
        if (message.channel.nsfw == true) {
            fetchredditi('https://api.ksoft.si/images/rand-reddit/porn', message);
        }
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}rule34`)) {
        if (message.channel.nsfw == true) {
            fetchredditi('https://api.ksoft.si/images/rand-reddit/rule34', message);
        }
        return;
    }
    // Lyrics coming soon!
    if (message.content.toLowerCase().startsWith(`${PREFIX}lyrics`)) {
//        const args = message.content.slice(PREFIX.length).trim().split(' ');
//        const text = message.content.split(args[1] + " ")[1];
//        const lyrics = await fetch('https://api.ksoft.si/lyrics/search', {
//           headers: { 'Authorization': ksoftkey },
//        });
//        message.channel.send(ksoft.lyrics.search(text, { textOnly: true }));
    }
	
});

async function fetchredditi(link, message) {
    var details = await fetch(link, {
        method: 'get',
        headers: { 'Authorization': ksoftkey },
    });
    var detailsjson = await details.json();
    var imageurl = await detailsjson.image_url;
    var embedtitle = await detailsjson.title;
    const redditembed = new Discord.MessageEmbed()
        .setTitle(embedtitle)
        .setImage(imageurl)
        .setFooter(`Invoked by ${message.author.username}, provided by KSoft.Si`, message.author.avatarURL());
    message.channel.send(redditembed);
}
