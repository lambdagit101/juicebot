const Discord = require('discord.js');
const randomPuppy = require('random-puppy'); //Because puppies are nice.
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch');

client.on('message', async (message) => 
{
    if (message.author.bot) return;
    
    if (message.content.toLowerCase().startsWith(`${PREFIX}sbubby`)) {
        randomPuppy('sbubby').then(url => {
            message.channel.send(url);
        });
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}dummyimage`)) {
        const args = message.content.slice(PREFIX.length).trim().split(' ');
        const width = args[1].toLowerCase();
        const text = message.content.split(args[1] + " ")[1];
        const forrealtext = text.replace(/ /g, "%20");
        message.channel.send('https://dummyimage.com/' + width + '/' + '000/fff.png&text=' + forrealtext + '+');
        return;
    }
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}animeme`)) 
	{
        randomPuppy('goodanimemes').then(url => {
			message.channel.send(url);
        });  
        return;
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}pic`)) 
	{
		randomPuppy('pics').then(url => {
			message.channel.send(url);
        });  
        return;
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}comedyheaven`)) {
		randomPuppy('comedyheaven').then(url => {
			message.channel.send(url);
        });  
        return;
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}dankmeme`)) 
	{
		randomPuppy('dankmemes').then(url => {
			message.channel.send(url);
        });  
        return;
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}4chan`)) 
	{
		randomPuppy('greentext').then(url => {
			message.channel.send(url);
        });  
        return;
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}requestavatar`)) 
    {
        message.channel.send("Here is your requested avatar!");
        message.channel.send(message.author.displayAvatarURL());	
        return;
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}evaxephon`)) 
	{
        message.channel.send("https://yandere-simulator.com/tampon.png");	
        return;
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}puppy`)) 
	{
		randomPuppy().then(url => {
			message.channel.send(url);
        });
        return;
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}aww`)) {
		randomPuppy('aww').then(url => {
			message.channel.send(url);
        });  
        return;
	}

    if (message.content.toLowerCase().startsWith(`${PREFIX}bonk`)) 
    {
        var whichbonk = Math.floor(Math.random() * 4);
        switch (whichbonk) {
            case 0:
                message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722533493435007066/posterbonk.png');
                break;
            case 1:
                message.channel.send('https://cdn.discordapp.com/attachments/735495269034098771/747478778254459089/posterbonk2.png');
                break;
            case 2:
                message.channel.send('https://cdn.discordapp.com/attachments/735495269034098771/747478781454712833/posterbonk3.png');
                break;
            case 3:
                message.channel.send('https://cdn.discordapp.com/attachments/735495269034098771/747478775633018970/posterbonk4.png');
                break;
            default:
                message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722533493435007066/posterbonk.png');
        }
        return
    	console.log("Hey can somebody keep track of my heads batted in? BONK");
    }

});
