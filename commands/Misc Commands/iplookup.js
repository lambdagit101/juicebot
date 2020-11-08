const fetch = require('node-fetch');
const Discord = require('discord.js');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
        const details = await fetch('http://ip-api.com/json/' + args[0]);
        const detailsjson = await details.json();
        const ipembed = new Discord.MessageEmbed()
            .setTitle("IP Details")
			.setColor("BLURPLE")
            .setDescription('IP: ' + ipdeet + '\nCountry: ' + detailsjson.country + '\nCountry code: ' + detailsjson.countryCode + "\nRegion: " + detailsjson.regionName + "\nCity: " + detailsjson.city + "\nZip code: " + detailsjson.zip + "\nTimezone: " + detailsjson.timezone + "\nISP: " + detailsjson.isp + "\nOrganization: " + detailsjson.org + `\nTorrent history: [Click here](https://iknowwhatyoudownload.com/en/peer/?ip=${ipdeet})`)
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(ipembed);
};

module.exports.help = {
    name: "iplookup",
    description: "Looks up details about an IP address.",
    aliases: ['ip']
};
