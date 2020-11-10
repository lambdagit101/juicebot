require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix } = require("./config.json");
const fs = require("fs");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const MusicBot = require('discord-music-system');

/**
try {
	require('./musicCommands.js');
	require('./status_messages.js');
} catch (err) {
	console.log(err);
}
**/

fs.readdir(`${__dirname}/commands`, (error, ctg) => {
    if (error) throw error;

    ctg.forEach(category => {

        fs.readdir(`${__dirname}/commands/${category}`, (err, commands) => {
            if (err) throw err;

            commands.forEach(command => {
                const cmd = require(`${__dirname}/commands/${category}/${command}`);
                if (!cmd.help) throw new Error(`Invalid command file structure ${command}!`);

                cmd.help.category = category;
                cmd.location = `${__dirname}/commands/${category}/${command}`;

                console.log(`Loading command ${command}...`);

                client.commands.set(cmd.help.name, cmd);
                if (cmd.help.aliases && Array.isArray(cmd.help.aliases)) cmd.help.aliases.forEach(alias => client.aliases.set(alias, cmd.help.name));
            });
        });
    });
});

client.on("ready", () => {
    console.log("Bot is online!");
});
client.on("warn", console.warn);
client.on("error", console.error);

// below are the music commands

const bot = new MusicBot({
    botPrefix: prefix,
    ytApiKey: process.env.YT_APIKEY,
    botClient: client
});

client.on("message", async (message) => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.toLowerCase().startsWith(`${prefix}`)) {
        bot.onMessage(message);
    }
});

// above are the music commands

client.on("message", async (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

    if (!command) return;

    try {
        await command.run(client, message, args);
    } catch(e) {
        console.error(e);
        message.channel.send(`Something went wrong while executing command "**${command}**": ${e}`);
    }
});

// below are the status messages

const intervalInMS = 15000;

let index = 0;

setInterval(() => {

    const userCount = client.users.cache.size;
    const guildCount = client.guilds.cache.size;

    const statusMessages = [
        
        { type: 'WATCHING', name: `Hentai | ${prefix}help`},
        { type: 'WATCHING', name: `${guildCount} Servers | ${prefix}help`},
        { type: 'LISTENING', name: `${userCount} Users | ${prefix}help`},
        { type: 'PLAYING', name: `Counter-Strike Global Offensive | ${prefix}help`},
        { type: 'WATCHING', name: `CS:GO Pro League | ${prefix}help`},
        { type: 'PLAYING', name: `Genshin Impact | ${prefix}help`},
        { type: 'WATCHING', name: `lambdaguy101 play Crispy Doom | ${prefix}help`},
        { type: 'PLAYING', name: `Geometry Dash | ${prefix}help`},
        { type: 'WATCHING', name: `Meme Compilations | ${prefix}help`},
        { type: 'LISTENING', name: `Necromantic by Stack | ${prefix}help`},
        { type: 'LISTENING', name: `Dancing Polish Cow at 4:00 | ${prefix}help`},
		{ type: 'PLAYING', name: `Minecraft | ${prefix}help`},
        { type: 'LISTENING', name: `https://youtu.be/RtTYQuO1j6w | ${prefix}help`}, //I couldn't resist the urge.
        { type: 'PLAYING', name: `AssaultCube | ${prefix}help`},
        // Does this last one work? I've commented it out as a safe feature.
        // { type: 'PLAYING', name: `the Matrix | /help'}
    ]

    client.user.setActivity(statusMessages[index]);
    index += 1;
    if (index == statusMessages.length) index = 0;
}, intervalInMS);

// above are the status messages


client.login(process.env.BOT_TOKEN);
