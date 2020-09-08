const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch');
// send me good web apis that return json results
client.on('message', async (message) => 
{
    if (message.author.bot) return;

    if (message.content.toLowerCase().startsWith(`${PREFIX}iplookup`) || message.content.toLowerCase().startsWith(`${PREFIX}ip`)) {
        const args = message.content.slice(PREFIX.length).trim().split(' ');
        const ipdeet = args[1].toLowerCase();
        const details = await fetch('http://ip-api.com/json/' + ipdeet);
        const detailsjson = await details.json();
        const ipembed = new Discord.MessageEmbed()
            .setTitle("IP Details")
            .setDescription('IP: ' + ipdeet + '\nCountry: ' + detailsjson.country + '\nCountry code: ' + detailsjson.countryCode + "\nRegion: " + detailsjson.regionName + "\nCity: " + detailsjson.city + "\nZip code: " + detailsjson.zip + "\nTimezone: " + detailsjson.timezone + "\nISP: " + detailsjson.isp + "\nOrganization: " + detailsjson.org + `\nTorrent history: [Click here](https://iknowwhatyoudownload.com/en/peer/?ip=${ipdeet})`)
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(ipembed);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}country`)) {
        const args = message.content.slice(PREFIX.length).trim().split(' ');
        const countryname = args[1].toLowerCase();
        const detailsc = await fetch('https://restcountries.eu/rest/v2/name/' + countryname)
                const detailscjson = await detailsc.json();
                const countryembed = new Discord.MessageEmbed()
                    .setTitle("Country details:")
                    .setDescription('Country Name: ' + countryname + '\nCapital: ' + detailscjson.capital + '\nRegion: ' + detailscjson.region + "\nSubegion: " + detailscjson.rubregion + "\nPopulation: " + detailscjson.population + "\nDemonym: " + detailscjson.demonym + "\nNative name: " + detailscjson.nativeName + "\nTop-level Domain: " + detailscjson.topLevelDomain)
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(countryembed);
        return;
    }
});

async function checkStatus(res) {
    if (res.ok) {
        return '200';
    } else {
        return '404';
    }
}