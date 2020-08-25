const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch');
// send me good web apis that return json results
client.on('message', async (message) => 
{
    if (message.author.bot) return;

    if (message.content.toLowerCase().startsWith(`${PREFIX}iplookup`)) {
        const args = message.content.slice(PREFIX.length).trim().split(' ');
        const ipdeet = args[1].toLowerCase();
        const details = await fetch('http://ip-api.com/json/' + ipdeet);
        const detailsjson = await details.json();
        const ipembed = new Discord.MessageEmbed()
            .setTitle("IP Details")
            .setColor('2f3136')
            .setDescription('IP: ' + ipdeet + '\nCountry: ' + detailsjson.country + '\nCountry code: ' + detailsjson.countryCode + "\nRegion: " + detailsjson.regionName + "\nCity: " + detailsjson.city + "\nZip code: " + detailsjson.zip + "\nTimezone: " + detailsjson.timezone + "\nISP: " + detailsjson.isp + "\nOrganization: " + detailsjson.org + `\nTorrent history: [Click here](https://iknowwhatyoudownload.com/en/peer/?ip=${ipdeet})`)
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(ipembed);
    }
});
