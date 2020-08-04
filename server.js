const Discord = require('discord.js');

const client = new Discord.Client();

const ytdl = require('ytdl-core');

const PREFIX = "/";

const queue = new Map();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const serverQueue = queue.get(message.guild.id);

	if (message.content.startsWith('${PREFIX}play')) {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith('${PREFIX}skip')) {
		skip(message, serverQueue);
		return;
	} else if (message.content.startsWith('${PREFIX}stop')) {
		stop(message, serverQueue);
		return;
	} else {
		message.channel.send('You need to enter a valid command!')
	}
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and speak in your voice channel!');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return message.channel.send('There is no song that I could skip!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

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
