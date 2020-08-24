const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch')

client.on('message', async (message) => 
{
    if (message.author.bot) return;
    if (!message.guild) return;

    if (message.content.toLowerCase().startsWith(`${PREFIX}iplookup`)) {
        const args = message.content.slice(prefix.length).trim().split(' ');
        const ipdeet = args.shift().toLowerCase();
        const details = await fetch('http://ip-api.com/json/' + ipdeet);
        const detailsjson = await details.json();
        const ipembed = new Discord.MessageEmbed()
            .setTitle("IP Details:")
            .setColor('2f3136')
            .setDescription('IP: ' + ipdeet + '\nStatus: ' + detailsjson.country + '\nCountry code: ' + details.json.countryCode + "\nRegion: " + detailsjson.regionName + "\nCity: " + detailsjson.city + "\nZip code: " + detailsjson.zip + "\nTimezone: " + detailsjson.timezone + "\nISP: " + detailsjson.isp + "\nOrganization: " + detailsjson.org);
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(ipembed);
    }
});
