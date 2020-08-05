const Discord = require('discord.js');

const client = new Discord.Client();

const ytdl = require('ytdl-core');

const PREFIX = "/";

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('Hentai', { type: 'WATCHING' });
});

client.on('message', message => {
  if (message.author.bot) return;

if (message.content.toLowerCase().includes("kys nolan")) {
    console.log("Won't kill myself!");
    message.channel.send('You first, please').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }
  
  if (message.content.toLowerCase().includes("nolan kys")) {
    console.log("Won't kill myself!");
    message.channel.send('You first, please').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }

  if (message.content.toLowerCase().includes("/gta 4 pager")) {
    console.log("GTA 4 Pager!");
    message.channel.send("https://youtu.be/Ee4ATNFER_Y");
  }
  
  if (message.content.toLowerCase().includes("/remove lemmon")) {
    console.log("Remove Lemmon!");
    message.channel.send("https://cdn.discordapp.com/attachments/725409286951403581/726848388523360377/unknown.png");
  }
  
  if (message.content.toLowerCase().includes("/omegalemmon")) {
    console.log("Omegalemmon!");
    message.channel.send("https://cdn.discordapp.com/attachments/725409286951403581/726849685095972914/Png.png");
  }
  
  if (message.content.toLowerCase().includes("kill yourself nolan")) {
    console.log("Won't kill myself!");
    message.channel.send('You first, please').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }
  
  if (message.content.toLowerCase().includes("nolan kill yourself")) {
    console.log("Won't kill myself!");
    message.channel.send('You first, please').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }
  
  if (message.content.toLowerCase().includes("i want hate and shame")) {
    console.log("I want hate and shame");
    message.channel.send('I want it too').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }

  if (message.content.toLowerCase().includes("/hate and shame")) {
    message.channel.send('RIP Yandere Simulator').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }

  if (message.content.toLowerCase().includes("/nolan")) {
    console.log("Nolanized");
    message.channel.send('Nolan').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }


  if (message.content.toLowerCase().includes("/lemmon rain")) {
    console.log("Lemmon Rain!");
    message.channel.send("https://cdn.discordapp.com/attachments/726794126049280064/726794181196120064/unknown-51.png");
  }
 
  if (message.content.toLowerCase().includes("/real nolan")) {
    console.log("Ew!");
    message.channel.send('https://cdn.discordapp.com/attachments/725409201492459592/727583476181631056/lmaoface.jpg');
  }
  
  if (message.content.toLowerCase().includes("/nolan moment")) {
    console.log("Nolan Moment");
    message.channel.send('https://media.discordapp.net/attachments/698692718125121556/718032579323887677/final_5ed8bd6d260cea00154600ea_782301.gif');
  }
  
  if (message.content.toLowerCase().includes("/bonk")) {
	console.log("Hey can somebody keep track of my heads batted in? BONK");
	message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722533493435007066/posterbonk.png');
  }
  
  if (message.content.toLowerCase().includes("/detroit become nolan")) {
    console.log("I have become nolan");
    message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722534532615635024/Untitled457_20200616153313.png');
  }
  if (message.content.toLowerCase().includes("/nolan gets destroyed")) {
	console.log("I got destroyed");
	  message.channel.send('https://cdn.discordapp.com/attachments/716123164609871892/722532266835968041/3bsewe.png ');
  }
  if (message.content.toLowerCase().includes("/help")) {
	console.log("Help");
	  message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/740512829811064892/20200803_124704.jpg');
  }
  if (message.content.toLowerCase().includes("/abueno adios master")) {
	console.log("abueno adios master");
	  message.channel.send('https://youtu.be/fmuezkEzJvo');
  }
  if (message.content.toLowerCase().includes("/green")) {
	console.log("green");
	  message.channel.send('https://youtu.be/eQge6usvb2A');
  }
});

client.login(process.env.BOT_TOKEN);
