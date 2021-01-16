const fetch = require('node-fetch');
const Discord = require('discord.js');
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
        const { query, country, countryCode, regionName, city, zip, timezone, isp, org } = await fetch('http://ip-api.com/json/' + args[0]).then(response => response.json());
	if (typeof country === 'undefined') {
        	const ipembed = new Discord.MessageEmbed()
            		.setTitle("IP Details")
	    		.setColor(embedcolor)
            		.setDescription('IP: ' + query + '\nCountry: ' + country + '\nCountry code: ' + countryCode + "\nRegion: " + regionName + "\nCity: " + city + "\nZip code: " + zip + "\nTimezone: " + timezone + "\nISP: " + isp + "\nOrganization: " + org + `\nTorrent history: [Click here](https://iknowwhatyoudownload.com/en/peer/?ip=${query})`)
            		.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        	message.channel.send(ipembed);
	} else {
		const failembed = new Discord.MessageEmbed()
			.setTitle('Error')
			.setColor(embedcolor)
			.setDescription('Could not retrieve information about this IP.')
			.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
		message.channel.send(failembed);
	}
};

module.exports.help = {
    name: "iplookup",
    description: "Looks up details about an IP address.",
    aliases: ['ip']
};
