const Discord = require('discord.js');
const randomPuppy = require('random-puppy'); //Because puppies are nice.
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch');

client.on('message', async (message) => 
{
    if (message.author.bot) return;

	if (message.content.toLowerCase().startsWith(`${PREFIX}lorempic`)) 
	{
        const image = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
        const data = await image.json();
        var length = data.results.length;
        var randomNumber = Math.floor(Math.random() * length);
        var randomImage = data.results[randomNumber];
        var imeige = randomImage.url;
        message.channel.send(imeige);
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}sbubby`)) {
        randomPuppy('sbubby').then(url => {
            message.channel.send(url);
        });
    }
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}animeme`)) 
	{
        randomPuppy('goodanimemes').then(url => {
			message.channel.send(url);
		});  
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}pic`)) 
	{
		randomPuppy('pics').then(url => {
			message.channel.send(url);
		});  
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}comedyheaven`)) {
		randomPuppy('comedyheaven').then(url => {
			message.channel.send(url);
		});  
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}dankmeme`)) 
	{
		randomPuppy('dankmemes').then(url => {
			message.channel.send(url);
		});  
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}4chan`)) 
	{
		randomPuppy('greentext').then(url => {
			message.channel.send(url);
		});  
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}requestavatar`)) 
    {
        const user = message.mentions.user.first();
        if (user) {
            message.channel.send("Here is your requested avatar!");
            message.channel.send(user.displayAvatarURL());	
        } else {
            message.channel.send("Here is your requested avatar!");
            message.channel.send(message.author.displayAvatarURL());	
        }
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}evaxephon`)) 
	{
		message.channel.send("https://yandere-simulator.com/tampon.png");	
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}puppy`)) 
	{
		randomPuppy().then(url => {
			message.channel.send(url);
		});  
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}aww`)) {
		randomPuppy('aww').then(url => {
			message.channel.send(url);
		});  
	}

    if (message.content.toLowerCase().startsWith(`${PREFIX}bonk`)) 
    {
    	console.log("Hey can somebody keep track of my heads batted in? BONK");
    	message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722533493435007066/posterbonk.png');
    }

});
