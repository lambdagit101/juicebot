const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js

client.on('message', async (message) => 
{
    if (message.author.bot) return;
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}github`)) 
	{
        message.channel.send(require('../config.json').gitlink);	
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}heartbeat`) || message.content.toLowerCase().startsWith(`${PREFIX}ping`)) {
        console.log("Checking ping...");
        message.channel.send("Pinging...").then(m => {
            var ping = m.createdTimestamp - message.createdTimestamp;
            var botPing = Math.round(client.pi);

            m.edit('Bot ping is: ' + `${ping}ms`);
        });
        return;
    }
	
    if (message.content.toLowerCase().startsWith(`${PREFIX}gta 4 pager`)) 
    {
        console.log("GTA 4 Pager!");
        message.channel.send("https://youtu.be/Ee4ATNFER_Y");
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}print`)) {
        const args = message.content.slice(PREFIX.length).trim().split(' ');
        const chanel = await getUserFromMention(args[1]);
        const text = message.content.split(args[1] + " ")[1];
        try {
            if (chanel.permissionsFor(message.author).has('SEND_MESSAGES')) {
                chanel.send(text);
                message.delete();
                return;
            }
        } catch (err) {
            console.log('No channel found. Sending to current channel.');
            const chanel = args[1];
            if (text == null) {
                message.delete();
                message.channel.send(chanel);
                return;
            } else {
                message.delete();
                message.channel.send(chanel + " " + text);
                return;
            }
        }
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}nolan`)) 
    {
        console.log("Nolanized");
        message.channel.send('Nolan');
        return;
    }

    if (message.content.toLowerCase() == `${PREFIX}help`) 
    {
	    console.log("General helped");
	    message.channel.send("https://lambdagit101.github.io/juicebotweb/help");
	    message.channel.send("https://cdn.discordapp.com/attachments/722508329678798881/741004886841229402/Help.png");
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}support`)) {
        console.log("Supported");
        message.channel.send('Invite link for the support server is: ' + require('../config.json').supportserver);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}invite`)) 
    {
    	console.log("Invited link");
        message.channel.send('Invite link for ' + require('../config.json').botname +' is: ' + require('../config.json').botinvite);
        return;
    }


    if (message.content.toLowerCase() === (`${PREFIX}donate`)) 
    {
        console.log("Hope they donate");
        const donatembed = new Discord.MessageEmbed()
        .setTitle('Donate')
        .setColor(0xff0000)
        .setDescription('Donate method: ' + require('../config.json').donatelink);
        message.channel.send(donatembed);
        return;
    }
	
//The man, the myth, the legend.	
    if (message.content.toLowerCase() === (`${PREFIX}credits`)) 
    {
        console.log("Made by lambdaguy101");
        const creditsembed = new Discord.MessageEmbed()
        .setTitle(require('../config.json').botname)
        .setColor('2f3136')
        .setDescription('Made by ' + require('../config.json').creator +' using discord.js. Type /github for the source code.\n\n**Contributor list: **' + require('../config.json').contributors.join(', ') + '.\nThank you all for helping!');
        message.channel.send(creditsembed);
        return;
    }
});

async function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith('<#') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }
        console.log(mention);
        return await client.channels.cache.get(mention);
    }
}