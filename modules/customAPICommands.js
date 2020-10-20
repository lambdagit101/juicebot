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
				const impostembed = new Discord.MessageEmbed()
				.setTitle(`${name} was ejected`)
				.setImage(`https://vacefron.nl/api/ejected?name=${name}&impostor=${crewpostor}&crewmate=${color}`)
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
			var finalresult = text.join("%20");
            try {
				const meembed = new Discord.MessageEmbed()
				.setTitle(`${message.author.username} called a meeting`)
				.setImage(`https://vacefron.nl/api/emergencymeeting?text=${finalresult}`)
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
			var finalresult = text.join("%20");
            try {
				const cmmembed = new Discord.MessageEmbed()
				.setTitle(`${message.author.username} wants their mind changed`)
				.setImage(`https://vacefron.nl/api/changemymind?text=${finalresult}`)
				.setFooter(`Invoked by ${message.author.username}, provided by vacefron.nl`, message.author.avatarURL());
				message.channel.send(cmmembed);
			} catch (err) {
				console.log(err);
            }
        return;
    }
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}captcha`)) {
            const args = message.content.slice(PREFIX.length).trim().split(' ');
			var text = args.slice(1, args.length);
			var finalresult = text.join("%20");
            try {
				const cmmembed = new Discord.MessageEmbed()
				.setTitle(`${message.author.username} needs this captcha solved`)
				.setImage(`https://api.alexflipnote.dev/captcha?text=${finalresult}`)
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
				message.channel.send(cmmembed);
			} catch (err) {
				console.log(err);
            }
        return;
    }
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}pornhub`)) {
            const args = message.content.slice(PREFIX.length).trim().split(' ');
			var text = args[1];
            try {
				const cmmembed = new Discord.MessageEmbed()
				.setTitle(`${message.author.username} is horny`)
				.setImage(`https://api.alexflipnote.dev/pornhub?text=${args[1]}&text2=${args[2]}`)
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
				message.channel.send(cmmembed);
			} catch (err) {
				console.log(err);
            }
        return;
    }
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}challenge`)) {
            const args = message.content.slice(PREFIX.length).trim().split(' ');
			var text = args.slice(1, args.length);
			var finalresult = text.join("%20");
            try {
				const cmmembed = new Discord.MessageEmbed()
				.setTitle(`${message.author.username} has solved this challenge`)
				.setImage(`https://api.alexflipnote.dev/challenge?text=${finalresult}`)
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
				message.channel.send(cmmembed);
			} catch (err) {
				console.log(err);
            }
        return;
    }
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}achievement`)) {
            const args = message.content.slice(PREFIX.length).trim().split(' ');
			var text = args.slice(1, args.length);
			var finalresult = text.join("%20");
            try {
				const cmmembed = new Discord.MessageEmbed()
				.setTitle(`${message.author.username} has gotten this achievement`)
				.setImage(`https://api.alexflipnote.dev/achievement?text=${finalresult}`)
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
				message.channel.send(cmmembed);
			} catch (err) {
				console.log(err);
            }
        return;
    }

});
