const { client, PREFIX } = require('../index'); // Import client from index.js
const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.guild) return;
	if (message.content.toLowerCase().startsWith(`${PREFIX}sbubby`)) {
		randomPuppy('sbubby').then(url => {
			message.channel.send(url);
		});  
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}animeme`)) {
		randomPuppy('Animemes').then(url => {
			message.channel.send(url);
		});  
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}pic`)) {
		randomPuppy('pics').then(url => {
			message.channel.send(url);
		});  
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}comedyheaven`)) {
		randomPuppy('comedyheaven').then(url => {
			message.channel.send(url);
		});  
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}dankmeme`)) {
		randomPuppy('dankmemes').then(url => {
			message.channel.send(url);
		});  
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}4chan`)) {
		randomPuppy('greentext').then(url => {
			message.channel.send(url);
		});  
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}requestavatar`)) {
		message.channel.send("Here is your avatar!");
		message.channel.send(message.author.displayAvatarURL());	
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}github`)) {
		message.channel.send("This is the source code for NolanBot.");
		message.channel.send("https://github.com/lambdagit101/nolanbot/");	
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}evaxephon`)) {
		message.channel.send("https://yandere-simulator.com/tampon.png");	
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}puppy`)) {
		randomPuppy().then(url => {
			message.channel.send(url);
		});  
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}aww`)) {
		randomPuppy('aww').then(url => {
			message.channel.send(url);
		});  
	}
    if (message.content.toLowerCase().startsWith(`${PREFIX}kick`)) {
    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.member(user);
        if (member) {
        member.kick('Kick was requested')
            .then(() => {
                const kickembed = new MessageEmbed()
                    .setTitle('Moderation')
                    .setColor(0xff0000)
                    .setDescription(`${user.tag} was successfully kicked!`);
                message.channel.send(kickembed);
            })
            .catch(err => {
                const cantkickembed = new MessageEmbed()
                    .setTitle('Moderation')
                    .setColor(0xff0000)
                    .setDescription("Couldn't kick the user");
                message.channel.send(cantkickembed);
                console.error(err);
            });
        } else {
            const nomemembed = new MessageEmbed()
            .setTitle('Moderation')
                .setColor(0xff0000)
                .setDescription('This user is not in this server');
            message.channel.send(nomemembed);
        }
    } else {
        const nopersembed = new MessageEmbed()
            .setTitle('Moderation')
            .setColor(0xff0000)
            .setDescription('No person was specified!');
        message.channel.send(nopersembed);
    }
}
	
if (message.content.toLowerCase().startsWith(`${PREFIX}ban`)) {
    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.member(user);
        if (member) {
            member
                .ban({
                    reason: 'Ban was requested',
                })
            .then(() => {
                const banembed = new MessageEmbed()
                    .setTitle('Moderation')
                    .setColor(0xff0000)
                    .setDescription(`${user.tag} was successfully banned!`);
                message.channel.send(banembed);
            })
            .catch(err => {
                const cantbanembed = new MessageEmbed()
                    .setTitle('Moderation')
                    .setColor(0xff0000)
                    .setDescription("Couldn't ban the user");
                message.channel.send(cantbanembed);
                if (err) console.error(err);
            });
        } else {
            const nobanembed = new MessageEmbed()
                .setTitle('Moderation')
                .setColor(0xff0000)
                .setDescription("This user is not in this server");
			message.channel.send(nobanembed);
		}
	}
}
	
if (message.content.toLowerCase().startsWith(`${PREFIX}gta 4 pager`)) {
    console.log("GTA 4 Pager!");
    message.channel.send("https://youtu.be/Ee4ATNFER_Y");
}

if (message.content.toLowerCase().startsWith(`${PREFIX}nolan`)) {
    console.log("Nolanized");
    message.channel.send('Nolan').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
}

if (message.content.toLowerCase().startsWith(`${PREFIX}help music`)) {
	console.log("Music helped");
	message.channel.send("https://cdn.discordapp.com/attachments/722508329678798881/741004511035916368/Help.png");
}
	
if (message.content.toLowerCase() == `${PREFIX}help`) {
	console.log("General helped");
	message.channel.send("https://lambdagit101.github.io/nolanbotweb/help.html");
	message.channel.send("https://cdn.discordapp.com/attachments/722508329678798881/741004886841229402/Help.png");
}
	
if (message.content.toLowerCase().startsWith(`${PREFIX}bonk`)) {
	console.log("Hey can somebody keep track of my heads batted in? BONK");
	message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722533493435007066/posterbonk.png');
}

if (message.content.toLowerCase().startsWith(`${PREFIX}invite`)) {
	console.log("Invited link");
	message.channel.send('Invite link for NolanBot is: https://discord.com/api/oauth2/authorize?client_id=722490368003670028&permissions=8&redirect_uri=https%3A%2F%2Flambdagit101.github.io%2Fnolanbotweb%2Fthankyou.html&scope=bot');
}
if (message.content.toLowerCase() === (`${PREFIX}donate`)) {
	console.log("Hope they donate");
	const donatembed = new MessageEmbed()
		.setTitle('Donate')
		.setColor(0xff0000)
		.setDescription('Currently I only accept Monero at this address: 43rf5jYqpPfCuJkaTwWrPY2DqbpLuiAMxTQxzdDc4RvyZNmxVxckZTmZeQLUaNypSDB55ARWMkMQ8GTHrXmV7PmG2qs3ZDN');
	message.channel.send(donatembed);
}
	
if (message.content.toLowerCase() === (`${PREFIX}credits`)) {
	console.log("Made by lambdaguy101");
		const creditsembed = new MessageEmbed()
			.setTitle('NolanBot')
			.setColor(0xff0000)
			.setDescription('Made by @lambdaguy101#1433 using discord.js. Type /github for the source code');
		message.channel.send(creditsembed);
	}
});
