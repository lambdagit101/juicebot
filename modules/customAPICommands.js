const { client, PREFIX } = require('../index'); // Import the client from index.js
const Discord = require('discord.js');
const fetch = require('node-fetch');

client.on("message", async (message) => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(PREFIX)) return;

    if (message.content.toLowerCase().startsWith(`${PREFIX}eject`)) {
            const args = message.content.slice(PREFIX.length).trim().split(' ');
			var name = args[1];
			var color = args[2];
			var crewpostor = args[3];
            try {
				var image = await fetch(`https://vacefron.nl/api/ejected?name=${name}&impostor=${crewpostor}&crewmate=${color}`);
				const impostembed = new Discord.MessageEmbed()
				.setTitle(`${name} was ejected`)
				.setImage(image)
				.setFooter(`Invoked by ${message.author.username}, provided by vacefron.nl`, message.author.avatarURL());
				message.channel.send(impostembed);
			} catch (err) {
				console.log(err);
            }
        return;
    }
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}meeting`)) {
            const args = message.content.slice(PREFIX.length).trim().split(' ');
			var text = args.slice(1, args.length);
            try {
				var image = await fetch(`https://vacefron.nl/api/emergencymeeting?text=${text}`);
				const meembed = new Discord.MessageEmbed()
				.setTitle(`${message.author.name} called a meeting`)
				.setImage(image)
				.setFooter(`Invoked by ${message.author.username}, provided by vacefron.nl`, message.author.avatarURL());
				message.channel.send(meembed);
			} catch (err) {
				console.log(err);
            }
        return;
    }
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}changemymind`)) {
            const args = message.content.slice(PREFIX.length).trim().split(' ');
			var text = args.slice(1, args.length);
            try {
				var image = await fetch(`https://vacefron.nl/api/changemymind?text=${text}`);
				const cmmembed = new Discord.MessageEmbed()
				.setTitle(`${message.author.name} wants their mind changed`)
				.setImage(image)
				.setFooter(`Invoked by ${message.author.username}, provided by vacefron.nl`, message.author.avatarURL());
				message.channel.send(cmmembed);
			} catch (err) {
				console.log(err);
            }
        return;
    }

});
