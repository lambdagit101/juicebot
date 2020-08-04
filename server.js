const Discord = require('discord.js');

const client = new Discord.Client();

const ytdl = require('ytdl-core');

const PREFIX = "/";

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.author.bot) return;

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

client.login(process.env.BOT_TOKEN);
