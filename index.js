const { Client, MessageEmbed } = require('discord.js');

const randomPuppy = require('random-puppy');

const client = new Client();

const ytdl = require('ytdl-core');

const PREFIX = "/";

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('Hentai | /help general', { type: 'WATCHING' });
});

const queue = new Map();
// This part of code was made by Gabriel Tanner, not me!
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
      "No permission!"
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
    const embed = new MessageEmbed()
      .setTitle('YouTube')
      .setColor(0xff0000)
      .setDescription(`**${song.title}** was added to the queue.`);
    return message.channel.send(embed);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I can skip!");
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
  const embed2 = new MessageEmbed()
      .setTitle('YouTube')
      .setColor(0xff0000)
      .setDescription(`Started playing: **${song.title}**`);
  serverQueue.textChannel.send(embed2);
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
	if (message.content.toLowerCase().startsWith(`${PREFIX}sayas`)) {		
		var args = message.substring(1).split(' ');
        	args = args.splice(1);
		message.channel.send(args);
		message.delete(150);
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}sbubby`)) {
		randomPuppy('sbubby').then(url => {
			message.channel.send(url);
		});  
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}animeme`)) {
		randomPuppy('Animemes').then(url => {
			message.channel.send(url);
		});  
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}pic`)) {
		randomPuppy('pics').then(url => {
			message.channel.send(url);
		});  
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}comedyheaven`)) {
		randomPuppy('comedyheaven').then(url => {
			message.channel.send(url);
		});  
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}dankmeme`)) {
		randomPuppy('dankmemes').then(url => {
			message.channel.send(url);
		});  
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}4chan`)) {
		randomPuppy('greentext').then(url => {
			message.channel.send(url);
		});  
	}
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
	    const kickembed = new MessageEmbed()
	.setTitle('Moderation')
      .setColor(0xff0000)
      .setDescription(`${user.tag} was successfully kicked!`);
        message.channel.send(kickembed);
          })
          .catch(err => {
            const cantkickembed = new MessageEmbed()
	.setTitle('Moderation')
      .setColor(0xff0000)
      .setDescription("Couldn't kick the user");
        message.channel.send(cantkickembed);
            console.error(err);
          });
      } else {
	   const nomemembed = new MessageEmbed()
	.setTitle('Moderation')
      .setColor(0xff0000)
      .setDescription('This user is not in this server');
        message.channel.send(nomemembed);
      }
    } else {
      const nopersembed = new MessageEmbed()
	.setTitle('Moderation')
      .setColor(0xff0000)
      .setDescription('No person was specified!');
        message.channel.send(nopersembed);
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
            const banembed = new MessageEmbed()
	.setTitle('Moderation')
      .setColor(0xff0000)
      .setDescription(`${user.tag} was successfully banned!`);
        message.channel.send(banembed);
          })
          .catch(err => {
            const cantbanembed = new MessageEmbed()
	.setTitle('Moderation')
      .setColor(0xff0000)
      .setDescription("Couldn't ban the user");
        message.channel.send(cantbanembed);
            console.error(err);
          });
      } else {
        const nobanembed = new MessageEmbed()
	.setTitle('Moderation')
      .setColor(0xff0000)
      .setDescription("This user is not in this server");
        message.channel.send(nobanembed);
            console.error(err);
      }
  else {
      const nospecificembed = new MessageEmbed()
	.setTitle('Moderation')
      .setColor(0xff0000)
      .setDescription("No person was specified!");
        message.channel.send(nospecificembed);
            console.error(err);
    }
    }
  }
	
  if (message.content.toLowerCase().startsWith(`${PREFIX}nsfw hentai`)) {
      if (message.channel.nsfw === true) {
      	randomPuppy('hentai').then(url => {
		message.channel.send(url);
	}); 
      } else {
      	message.channel.send("You have to be in a NSFW channel to perform this action!");
      }
  }
	
  if (message.content.toLowerCase().startsWith(`${PREFIX}gta 4 pager`)) {
    console.log("GTA 4 Pager!");
    message.channel.send("https://youtu.be/Ee4ATNFER_Y");
  }
 
  if (message.content.toLowerCase().startsWith(`${PREFIX}nolan`)) {
    console.log("Nolanized");
    message.channel.send('Nolan').then(sentMessage => {
		sentMessage.delete({timeout:35000});
	});
  }

  if (message.content.toLowerCase().startsWith(`${PREFIX}help music`)) {
	console.log("Music helped");
  	const helpMAttch = new MessageAttachment('https://cdn.discordapp.com/attachments/722508329678798881/741004511035916368/Help.png');
	message.channel.send(helpMAttch);
  }
	
  if (message.content.toLowerCase().startsWith(`${PREFIX}help general`)) {
	console.log("General helped");
	message.channel.send("https://lambdagit101.github.io/nolanbotweb/help.html");
	const helpAttch = new MessageAttachment('https://cdn.discordapp.com/attachments/722508329678798881/741004886841229402/Help.png');
	message.channel.send(helpAttch);
  }
	
  if (message.content.toLowerCase().startsWith(`${PREFIX}bonk`)) {
	console.log("Hey can somebody keep track of my heads batted in? BONK");
	message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722533493435007066/posterbonk.png');
  }

 if (message.content.toLowerCase() === (`${PREFIX}credits`)) {
	console.log("Made by lambdaguy101");
	 const creditsembed = new MessageEmbed()
      .setTitle('NolanBot')
      .setColor(0xff0000)
      .setDescription('Made by @lambdaguy101#1433 using discord.js. Type /github for the source code');
	 message.channel.send(creditsembed);
  }
});

client.login(process.env.BOT_TOKEN);
