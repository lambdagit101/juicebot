// This module uses the KSoft.Si API. You need to get your own app approved to use this module.
// If your app did not get approved, then bad luck. If you do not have a token, register one!
// Until then, comment the entire module.

const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch');
const ksoftsikey = `Bearer ${process.env.KSOFTSI_TOKEN}`; // This is the token you get if your KSoft.Si app is approved

client.on('message', async (message) => 
{
    if (message.author.bot) return;
    if (!message.guild) return;
	if (!message.content.startsWith(PREFIX)) return;

    if (message.content.toLowerCase().startsWith(`${PREFIX}hentai`)) {
        if (message.channel.nsfw == true) {
            fetchredditi('https://api.ksoft.si/images/rand-reddit/hentai', message);
		//console.log(`${message.author.username} went to horny jail.`)
        }
	    else {
		    //Shamelessly stolen from the moderationCommands embed.
		    const not_in_nsfw_channel = new Discord.MessageEmbed()
		    .setTitle = ('Cannot perform command')
		    .setDescription = ("Sorry, you can't get this image because you aren't in an NSFW channel!")
		    .setFooter = `Invoked by ${message.author.username}`, message.author.avatarURL());
		    message.channel.send(not_in_nsfw_channel);
		    return;
	    }
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}animeme`)) {
        fetchredditi('https://api.ksoft.si/images/rand-reddit/goodanimemes', message);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}dankmeme`) || message.content.toLowerCase().startsWith(`${PREFIX}meme`)) {
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

    if (message.content.toLowerCase().startsWith(`${PREFIX}greentext`)) {
        fetchredditi('https://api.ksoft.si/images/rand-reddit/greentext', message);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}aww`)) {
        fetchredditi('https://api.ksoft.si/images/rand-reddit/aww', message);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}randomnsfw`) || message.content.toLowerCase().startsWith(`${PREFIX}nsfw`) || message.content.toLowerCase().startsWith(`${PREFIX}rnsfw`)) {
        if (message.channel.nsfw == true) {
            fetchredditi('https://api.ksoft.si/images/random-nsfw', message);
		//console.log(`${message.author.username} went to horny jail.`)
        }
	    else {
		   message.channel.send(not_in_nsfw_channel);
		   return;
	    }
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}porn`)) {
        if (message.channel.nsfw == true) {
            fetchredditi('https://api.ksoft.si/images/rand-reddit/porn', message);
		//console.log(`${message.author.username} went to horny jail.`)
        }
	    else {
		    //We don't need to create a new message, just send the same one created for the hentai image.
		    message.channel.send(not_in_nsfw_channel);
		    return;
	    }	    
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}rule34`) || message.content.toLowerCase().startsWith(`${PREFIX}r34`)) {
        if (message.channel.nsfw == true) {
            fetchredditi('https://api.ksoft.si/images/rand-reddit/rule34', message);
		//console.log(`${message.author.username} went to horny jail.`)
        }
	    else {
		    message.channel.send(not_in_nsfw_channel);		  
		    return;
	    }
        return;
    } 

    if (message.content.toLowerCase().startsWith(`${PREFIX}wikihow`)) {
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
            .setURL(embedtitleurl)
            .setImage(imageurl)
            .setFooter(`Invoked by ${message.author.username}, provided by KSoft.Si`, message.author.avatarURL());
        message.channel.send(wikiembed);
        return;
    }
/**
    if (message.content.toLowerCase().startsWith(`${PREFIX}lyrics`)) {
        const args = message.content.slice(PREFIX.length).trim().split(' ');
        const text = message.content.split(args[1] + " ")[1];
        const lyrics = await fetch(`https://api.ksoft.si/lyrics/search?q=${text}&limit=1`, {
           headers: { 'Authorization': ksoftsikey,
					  'User-Agent': message.author.id
					},
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
	**/
});

async function fetchredditi(link, message) {
    var details = await fetch(link, {
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
        .setURL(detailsjson.source)
        .addFields(
          {name: 'Publisher', value: detailsjson.author, inline: true}
        )
        .setImage(imageurl)
        .setFooter(`Invoked by ${message.author.username}, provided by KSoft.Si`, message.author.avatarURL());
    message.channel.send(redditembed);
}
