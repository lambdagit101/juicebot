'use strict';

/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');
// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply("can't nolanize the voice chat without you being in one!");
    }
  }
  
  if (message.content.startsWith('/play')) {
    console.log('play');
    if (!message.member.voice.channel) return message.channel.send('you need to be in a fucking voice channel you ass poopoo head face');
    message.member.voice.channel.join().then(connection => {
      connection.play('./test.mp3');
    });
  }
  
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.author.bot) return;

  //if (message.content.toLowerCase().includes("!ping")) {
  //  message.channel.send('Whomst has summoned the almighty Nolan?');
  //}
if (message.content.toLowerCase().includes("kys nolan")) {
    message.channel.send('You first, please').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }
  
  if (message.content.toLowerCase().includes("nolan kys")) {
    message.channel.send('You first, please').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }

  if (message.content.toLowerCase().includes("gta 4 pager")) {
    message.channel.send("https://youtu.be/Ee4ATNFER_Y");
  }
  
  if (message.content.toLowerCase().includes("remove lemmon")) {
    message.channel.send("https://cdn.discordapp.com/attachments/725409286951403581/726848388523360377/unknown.png");
  }
  
  if (message.content.toLowerCase().includes("omegalemmon")) {
    message.channel.send("https://cdn.discordapp.com/attachments/725409286951403581/726849685095972914/Png.png");
  }
  
  if (message.content.toLowerCase().includes("kill yourself nolan")) {
    message.channel.send('You first, please').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }
  
  if (message.content.toLowerCase().includes("nolan kill yourself")) {
    message.channel.send('You first, please').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }
  
  if (message.content.toLowerCase().includes("want hate and shame")) {
    message.channel.send('I want it too').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }
  
  if (message.content.toLowerCase().includes("animal abuse is not ok")) {
    message.channel.send('It will never be').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }
  
  if (message.content.toLowerCase().includes("animal abuse is not good")) {
    message.channel.send('It will never be').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }

  if (message.content.toLowerCase().includes("hate and shame")) {
    message.channel.send('RIP Yandere Simulator').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }

  if (message.content.toLowerCase().includes("nolan")) {
    message.channel.send('Nolan').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }


  if (message.content.toLowerCase().includes("lemmon rain")) {
    message.channel.send("https://cdn.discordapp.com/attachments/726794126049280064/726794181196120064/unknown-51.png");
  }
  
  if (message.content.toLowerCase().includes("what should i add to the bot")) {
    message.channel.send("Something funny ya'know").then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }
 
  if (message.content.toLowerCase().includes("real nolan")) {
    message.channel.send('https://cdn.discordapp.com/attachments/725409201492459592/727583476181631056/lmaoface.jpg');
  }
  
  if (message.content.toLowerCase().includes("nolan moment")) {
    message.channel.send('https://media.discordapp.net/attachments/698692718125121556/718032579323887677/final_5ed8bd6d260cea00154600ea_782301.gif');
  }
  
  if (message.content.toLowerCase().includes("bonk")) {
    message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722533493435007066/posterbonk.png');
  }
  
  if (message.content.toLowerCase().includes("detroit become nolan")) {
    message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722534532615635024/Untitled457_20200616153313.png');
  }
  
  if (message.content.toLowerCase().includes("nolan gets destroyed")) {
    message.channel.send('https://cdn.discordapp.com/attachments/716123164609871892/722532266835968041/3bsewe.png ');
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(require('./token.json').token);
