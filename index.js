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
  if (message.content.toLowerCase().startsWith(`${PREFIX}help`)) {
	console.log("Help");
	  message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/740512829811064892/20200803_124704.jpg');
  }
  if (message.content.toLowerCase().startsWith(`${PREFIX}abueno`")) {
	console.log("abueno adios master");
	  message.channel.send('https://youtu.be/fmuezkEzJvo');
  }
  if (message.content.toLowerCase().startsWith(`${PREFIX}green`)) {
	console.log("green");
	  message.channel.send('https://youtu.be/eQge6usvb2A');
  }
});

client.login(process.env.BOT_TOKEN);
