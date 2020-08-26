const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js

client.on('message', async (message) => 
{
    if (message.author.bot) return;
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}github`)) 
	{
        message.channel.send(require('../config.json').gitlink);	
	}
	
    if (message.content.toLowerCase().startsWith(`${PREFIX}gta 4 pager`)) 
    {
       console.log("GTA 4 Pager!");
       message.channel.send("https://youtu.be/Ee4ATNFER_Y");
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}print`)) {
        const args = message.content.slice(PREFIX.length).trim().split(' ');
        const chanel = await getUserFromMention(args[1]);
        const text = message.content.split(args[1] + " ")[1];
        try {
            chanel.send(text);
        } catch (err) {
            console.log('No channel found. Sending to current channel.');
            const chanel = args[1];
            message.channel.send(chanel + " " + text);
        }
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}nolan`)) 
    {
        console.log("Nolanized");
       message.channel.send('Nolan').then(sentMessage => {
    		sentMessage.delete({timeout:35000}); //We delete the message to prevent spam. 
    	});
    }

    if (message.content.toLowerCase() == `${PREFIX}help`) 
    {
	    console.log("General helped");
	    message.channel.send("https://lambdagit101.github.io/juicebotweb/help");
	    message.channel.send("https://cdn.discordapp.com/attachments/722508329678798881/741004886841229402/Help.png");
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}support`)) {
        console.log("Supported");
        message.channel.send('Invite link for the support server is: ' + require('../config.json').supportserver);
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}invite`)) 
    {
    	console.log("Invited link");
        message.channel.send('Invite link for ' + require('../config.json').botname +' is: ' + require('../config.json').botinvite);
    }


    if (message.content.toLowerCase() === (`${PREFIX}donate`)) 
    {
        console.log("Hope they donate");
        const donatembed = new Discord.MessageEmbed()
        .setTitle('Donate')
        .setColor(0xff0000)
        .setDescription('Donate method: ' + require('../config.json').donatelink);
        message.channel.send(donatembed);
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