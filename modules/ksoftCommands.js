const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch');
const { KSoftClient } = require('@ksoft/api'); // You need to have a KSoft.SI V1 token in order to use this module as intended.
const ksoft = new KSoftClient(process.env.KSOFTSI_TOKEN); // This is the token you get if your KSoft app is approved

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

    if (message.content.toLowerCase().startsWith(`${PREFIX}lyrics`)) {
        const args = message.content.slice(PREFIX.length).trim().split(' ');
        const text = message.content.split(args[1] + " ")[1];
        const { lyrics } = await ksoft.lyrics.search(text, { textOnly: true });
        message.channel.send(lyrics);
    }
	
});

async function fetchredditi(link, message) {
    const details = await fetch(link);
    const detailsjson = await details.json();
    var imageurl = detailsjson.image_url;
    var embedtitle = detailsjson.title;
    const redditembed = new Discord.MessageEmbed()
        .setTitle(title)
        .setImage(imageurl)
    message.channel.send(redditembed);
}
