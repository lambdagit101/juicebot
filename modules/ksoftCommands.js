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

    if (message.content.toLowerCase().startsWith(`${PREFIX}animeme`)) {
        fetchredditi('https://api.ksoft.si/images/rand-reddit/goodanimemes', message);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}dankmeme`)) {
        fetchredditi('https://api.ksoft.si/images/random-meme', message);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}sbubby`)) {
        fetchredditi('https://api.ksoft.si/images/rand-reddit/sbubby', message);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}comedyheaven`)) {
        fetchredditi('https://api.ksoft.si/images/rand-reddit/comedyheaven', message);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}pic`)) {
        fetchredditi('https://api.ksoft.si/images/rand-reddit/pic', message);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}4chan`)) {
        fetchredditi('https://api.ksoft.si/images/rand-reddit/greentext', message);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}aww`)) {
        fetchredditi('https://api.ksoft.si/images/rand-reddit/aww', message);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}randomnsfw`) || message.content.toLowerCase().startsWith(`${PREFIX}nsfw`)) {
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

    if (message.content.toLowerCase().startsWith(`${PREFIX}wikihow`)) {
        var deetails = await fetch('https://api.ksoft.si/images/random-wikihow', {
            method: 'get',
            headers: { 'Authorization': ksoftkey },
        });
        var deetailsjson = await deetails.json();
        var imageurl = await deetailsjson.url;
        var embedtitle = await deetailsjson.title;
        var embedtitleurl = await deetailsjson.article_url;
        const wikiembed = new Discord.MessageEmbed()
            .setTitle(embedtitle)
            .setURL(embedtitleurl)
            .setImage(imageurl)
            .setFooter(`Invoked by ${message.author.username}, provided by KSoft.Si`, message.author.avatarURL());
        message.channel.send(wikiembed);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}lyrics`)) {
        const args = message.content.slice(PREFIX.length).trim().split(' ');
        const text = message.content.split(args[1] + " ")[1];
        const lyrics = await fetch(`https://api.ksoft.si/lyrics/search?q=${text}&limit=1`, {
           headers: { 'Authorization': ksoftkey },
        });
        var lyricsjson = await lyrics.json();
        const lyricsembed = new Discord.MessageEmbed()
            .setTitle('Lyrics')
            .setThumbnail(lyricsjson.data[0].album_art)
            .addFields(
                { name: 'Artist Name', value: lyricsjson.data[0].artist, inline: true },
                { name: 'Song Album', value: lyricsjson.data[0].album, inline: true },
                { name: 'Album Date', value: lyricsjson.data[0].album_year, inline: true },
                { name: 'Song Name', value: lyricsjson.data[0].name, inline: true },
            )
            .setDescription(lyricsjson.data[0].lyrics)
            .setFooter(`Invoked by ${message.author.username}, provided by KSoft.Si`, message.author.avatarURL());
        message.channel.send(lyricsembed);
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
        .setURL(detailsjson.source)
        .setImage(imageurl)
        .setFooter(`Invoked by ${message.author.username}, provided by KSoft.Si`, message.author.avatarURL());
    message.channel.send(redditembed);
}
