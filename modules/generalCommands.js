const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js

client.on('message', message => 
{
    if (message.author.bot) return;
    if (!message.guild) return;
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}github`)) 
	{
        message.channel.send(require('../config.json').gitlink);	
	}
	
    if (message.content.toLowerCase().startsWith(`${PREFIX}gta 4 pager`)) 
    {
       console.log("GTA 4 Pager!");
       message.channel.send("https://youtu.be/Ee4ATNFER_Y");
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}nolan`)) 
    {
        console.log("Nolanized");
       message.channel.send('Nolan').then(sentMessage => {
    		sentMessage.delete({timeout:35000}); //We delete the message to prevent spam. 
    	});
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}help music`)) 
    {
    	console.log("Music helped");
    	message.channel.send("https://cdn.discordapp.com/attachments/722508329678798881/741004511035916368/Help.png");
    }
	
    if (message.content.toLowerCase() == `${PREFIX}help`) 
    {
	    console.log("General helped");
	    message.channel.send("https://lambdagit101.github.io/nolanbotweb/help.html");
	    message.channel.send("https://cdn.discordapp.com/attachments/722508329678798881/741004886841229402/Help.png");
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}support`)) {
        console.log("Supported");
        message.channel.send('Invite link for the support server is: ' + require('../config.json').supportserver);
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}invite`)) 
    {
    	console.log("Invited link");
        message.channel.send('Invite link for NolanBot is: ' + require('../config.json').botinvite);
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
