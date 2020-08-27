const { client, PREFIX } = require('../index'); // Import the client from index.js
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const queue = new Map();
// This part of code was made by Gabriel Tanner, not me!
client.on("message", async (message) => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(PREFIX)) return;

    const serverQueue = queue.get(message.guild.id);


    if (message.content.toLowerCase().startsWith(`${PREFIX}play`)) {
        execute(message, serverQueue);
        return;
    } else if (message.content.toLowerCase().startsWith(`${PREFIX}skip`)) {
        skip(message, serverQueue);
        return;
    } else if (message.content.toLowerCase().startsWith(`${PREFIX}stop`)) {
        stop(message, serverQueue);
        return;
    }
    else if (message.content.toLowerCase().startsWith(`${PREFIX}queue`)) {
        //logMapElements(, , serverQueue); 
        queueue(message, serverQueue);
        return;
    }
    if (message.content.toLowerCase().startsWith(`${PREFIX}join`)) {
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
        } else {
          message.channel.send("You need to be in a voice channel to perform this action!");
        }
    }
});

async function execute(message, serverQueue) {
    const args = message.content.split(" ");

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send("You need to be in a voice channel to play music!");

    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send("No permission!");
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
        const embed = new Discord.MessageEmbed()
            .setTitle("Music")
            .setColor('2f3136')
            .setDescription(`**${song.title}** was added to the queue.`);
        return message.channel.send(embed);
    }
}
function logMapElements(value) {
    console.log(`m${value}`);
  }
async function queueue(message, serverQueue) {
    try {
        const queuembed = new Discord.MessageEmbed()
            .setTitle(message.guild.name + " Queue")
            .setColor('2f3136')
            .setDescription('Now playing: ' + serverQueue.get('title') + "\n")
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(queuembed);
    } catch (error) {
        console.log(error);
        const noqueuembed = new Discord.MessageEmbed()
            .setTitle(message.guild.name + " Queue")
            .setColor('2f3136')
            .setDescription("The queue is empty!")
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL()); // /.setDescription(JSON.stringify(serverQueue.songs).title.join('\n'))
        message.channel.send(noqueuembed);
    }
}

async function skip(message, serverQueue) {
    if (!message.member.voice.channel) return message.channel.send("You have to be in a voice channel to stop the music!");
    if (!serverQueue) return message.channel.send("There is no song that I can skip!");
    serverQueue.connection.dispatcher.end();
}

async function stop(message, serverQueue) {
    if (!message.member.voice.channel) return message.channel.send("You have to be in a voice channel to stop the music!");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}

async function play(guild, song) {
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
        .on("error", (error) => console.error(error));

    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    const embed2 = new Discord.MessageEmbed()
        .setTitle("Music")
        .setColor('2f3136')
        .setDescription(`Started playing: **${song.title}**`);
    serverQueue.textChannel.send(embed2);
}
