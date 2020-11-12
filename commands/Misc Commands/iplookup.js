const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
        const { query, country, countrycode, regionName, city, zip, timezone, isp, org } = await fetch('http://ip-api.com/json/' + args[0]).then(response => response.json());
        const ipembed = new Discord.MessageEmbed()
            .setTitle("IP Details")
			      .setColor("BLURPLE")
            .setDescription('IP: ' + query + '\nCountry: ' + country + '\nCountry code: ' + countryCode + "\nRegion: " + regionName + "\nCity: " + city + "\nZip code: " + zip + "\nTimezone: " + timezone + "\nISP: " + isp + "\nOrganization: " + org + `\nTorrent history: [Click here](https://iknowwhatyoudownload.com/en/peer/?ip=${ipdeet})`)
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(ipembed);
};

module.exports.help = {
    name: "iplookup",
    description: "Looks up details about an IP address.",
    aliases: ['ip']
};
