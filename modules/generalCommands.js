const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js

client.on('message', async (message) => 
{
    if (message.author.bot) return;
	if (!message.content.startsWith(PREFIX)) return; 
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}github`)) 
	{
		const gitembed = new Discord.MessageEmbed()
		.setTitle('MilkBot')
		.setDescription(require('../config.json').gitlink)
		.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
		message.channel.send(gitembed);
		console.log("Someone got MilkBot's code.");
		return;
    	}

    if (message.content.toLowerCase().startsWith(`${PREFIX}console`) || message.content.toLowerCase().startsWith(`${PREFIX}dingus`)) 
    {
        if (message.author.id == require('../config.json').creatorUserID) 
	{
            const args = message.content.slice(PREFIX.length).trim().split(' ');
			var command = args.slice(1, args.length);
			var finalresult = command.join(" ");
            try 
	    {
		console.log(finalresult);
                eval(finalresult); 
            } 
		catch (err) 
		{
                message.channel.send(`JavaScript error occured: ${err}`);
		console.log(err);
            	}
        } 
	    else 
	    {
            message.channel.send(`Only ${require('../config.json').creator} can use this command!`);
            }
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}heartbeat`) || message.content.toLowerCase().startsWith(`${PREFIX}ping`)) 
    {
        console.log("Checking ping...");
        message.channel.send("Pinging...").then(m => 
	{
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
    
    if (message.content.toLowerCase().startsWith(`${PREFIX}print`))
    {
	    const args = message.content.slice(PREFIX.length).trim().split(' ');
	    const _channel = await getUserFromMention(args[1]); //replaced typo with underscored variable to make it clearer
	    const text = message.content.split(args[1] + "")[1];
	    
	    try
	    {
		    if (_channel.permissionsFor(message.author).has('SEND_MESSAGES'))
		    {
			    _channel.send(text);
			    return;
		    }
	    }
	    
	    catch (err)
	    {
		    const _channel = args[1];
		    if (text == null) 
		    {
			    message.channel.send(_channel);
			    return;
		    }
		    
		    else
		    {
			    message.channel.send(_channel + "" + text);
			    return;
		    }
	    }
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}nolan`)) 
    {
        message.channel.send('Nolan');
        return;
    }

    if (message.content.toLowerCase() == `${PREFIX}help`) 
    {
	message.channel.send("https://lambdagit101.github.io/juicebotweb/help");
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}support`)) 
    {
        message.channel.send('Invite link for the support server is: ' + require('../config.json').supportserver);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}invite`)) 
    {
        message.channel.send('Invite link for ' + require('../config.json').botname +' is: ' + require('../config.json').botinvite);
        return;
    }


    if (message.content.toLowerCase() === (`${PREFIX}donate`)) 
    {
        const donatemsg = new Discord.MessageEmbed()
        .setTitle('Donate')
        .setDescription('Donate method: ' + require('../config.json').donatelink)
        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(donatemsg);
        return;
    }
	
//The man, the myth, the legend.	
    if (message.content.toLowerCase() === (`${PREFIX}credits`)) 
    {
        const creditsembed = new Discord.MessageEmbed()
        .setTitle(require('../config.json').botname)
        .setDescription('Made by ' + require('../config.json').creator +' using discord.js. Type /github for the source code.\n\n**Contributor list: **' + require('../config.json').contributors.join(', ') + '.\nThank you all for helping!')
        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(creditsembed);
        return;
    }
});

async function getUserFromMention(mention) 
{
    if (!mention) return;

    if (mention.startsWith('<#') && mention.endsWith('>')) 
    {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) 
	{
            mention = mention.slice(1);
        }
        console.log(mention);
        return await client.channels.cache.get(mention);
    }
}
