const Discord = require('discord.js');

const client = new Discord.Client();

const ytdl = require('ytdl-core');

const PREFIX = "/";

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('Hentai', { type: 'WATCHING' });
});

const queue = new Map();

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${PREFIX}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${PREFIX}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${PREFIX}stop`)) {
    stop(message, serverQueue);
    return;
  } else {
    console.log("Not music command");
  }
});

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
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
    return message.channel.send(`${song.title} has been added to the queue!`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
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

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.guild) return;
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}requestavatar`)) {
		message.channel.send("Here is your avatar!");
		message.channel.send(message.author.displayAvatarURL());	
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}github`)) {
		message.channel.send("This is the source code for NolanBot.");
		message.channel.send("https://github.com/lambdagit101/nolanbot/");	
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}evaxephon`)) {
		message.channel.send("https://yandere-simulator.com/tampon.png");	
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}kick`)) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Kick was requested')
          .then(() => {
            message.reply(`Kicked ${user.tag} successfully!`);
          })
          .catch(err => {
            message.reply('Unable to kick the member');
            console.error(err);
          });
      } else {
        message.reply("The user you mentioned is not in this server!");
      }
    } else {
      message.reply("Please specify a person to kick!");
    }
  }
	
if (message.content.toLowerCase().startsWith(`${PREFIX}ban`)) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'Ban was requested',
          })
          .then(() => {
            message.reply(`Banned ${user.tag} successfully!`);
          })
          .catch(err => {
            message.reply('Unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("The user you mentioned is not in this server!");
      }
    } else {
      message.reply("Please specify a person to ban!");
    }
  }

  if (message.content.toLowerCase().startsWith(`${PREFIX}gta 4 pager`)) {
    console.log("GTA 4 Pager!");
    message.channel.send("https://youtu.be/Ee4ATNFER_Y");
  }
  
  if (message.content.toLowerCase().startsWith(`${PREFIX}remove lemmon`)) {
    console.log("Remove Lemmon!");
    message.channel.send("https://cdn.discordapp.com/attachments/725409286951403581/726848388523360377/unknown.png");
  }
  
  if (message.content.toLowerCase().startsWith(`${PREFIX}omegalemmon`)) {
    console.log("Omegalemmon!");
    message.channel.send("https://cdn.discordapp.com/attachments/725409286951403581/726849685095972914/Png.png");
  }

  if (message.content.toLowerCase().startsWith(`${PREFIX}nolan`)) {
    console.log("Nolanized");
    message.channel.send('Nolan').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }


  if (message.content.toLowerCase().startsWith(`${PREFIX}lemmon rain`)) {
    console.log("Lemmon Rain!");
    message.channel.send("https://cdn.discordapp.com/attachments/726794126049280064/726794181196120064/unknown-51.png");
  }
 
  if (message.content.toLowerCase().startsWith(`${PREFIX}real nolan`)) {
    console.log("Ew!");
    message.channel.send('https://cdn.discordapp.com/attachments/725409201492459592/727583476181631056/lmaoface.jpg');
  }
  
  if (message.content.toLowerCase().startsWith(`${PREFIX}nolan moment`)) {
    console.log("Nolan Moment");
    message.channel.send('https://media.discordapp.net/attachments/698692718125121556/718032579323887677/final_5ed8bd6d260cea00154600ea_782301.gif');
  }
  
  if (message.content.toLowerCase().startsWith(`${PREFIX}bonk`)) {
	console.log("Hey can somebody keep track of my heads batted in? BONK");
	message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722533493435007066/posterbonk.png');
  }
  
  if (message.content.toLowerCase().startsWith(`${PREFIX}detroit become nolan`)) {
    console.log("I have become nolan");
    message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722534532615635024/Untitled457_20200616153313.png');
  }
  if (message.content.toLowerCase() === (`${PREFIX}help`)) {
	console.log("Help");
	  message.channel.send('For now there is no link. Coming soon!');
	  message.channel.send('https://cdn.discordapp.com/attachments/722508329678798881/741004886841229402/Help.png');
  }
if (message.content.toLowerCase() === (`${PREFIX}help music`)) {
	console.log("Help with music");
	  message.channel.send('https://cdn.discordapp.com/attachments/722508329678798881/741004511035916368/Help.png');
  }
  if (message.content.toLowerCase().startsWith(`${PREFIX}abueno`)) {
	console.log("abueno adios master");
	  message.channel.send('https://youtu.be/fmuezkEzJvo');
  }
  if (message.content.toLowerCase().startsWith(`${PREFIX}green`)) {
	console.log("green");
	  message.channel.send('https://youtu.be/eQge6usvb2A');
  }
 if (message.content.toLowerCase() === (`${PREFIX}credits`)) {
	console.log("Made by lambdaguy101");
	  message.channel.send('NolanBot - Made by lambdaguy101.');
	  message.channel.send('Type /github for the source code.');
  }
});

client.login(process.env.BOT_TOKEN);
