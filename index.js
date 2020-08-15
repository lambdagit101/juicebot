const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const ytdl = require('ytdl-core');
const PREFIX = "/";

// Export the client so other modules can use it too
module.exports.client = client;
module.exports.PREFIX = PREFIX;

client.on('ready', () => {
    console.log(`${client.user.tag} - Ready on ${client.guilds.cache.size} guild${client.guilds.cache.size != 1 ? 's' : ''}!`);

    // Execute modules in /modules folder
    const fs = require('fs');
    let files = fs.readdirSync('./modules');
    files.forEach(file => {
        if (file.endsWith('.js')) {
            try {
                console.log('Running module: ' + file);
                require('./modules/' + file);
            } catch (e) {
                console.log(`Module ${file} has crashed: ${e}`);
            }
        }
    });
});

client.once("reconnecting", () => {
    console.log("Reconnecting.");
});

client.once("disconnect", () => {
    console.log("Disconnected. Client will no longer attempt to reconnect.");
});

// Log in to discord
client.login(process.env.BOT_TOKEN || require('./token.json').token)
.catch(e => {
	console.log('----- Login failed. Reason: -----');
	console.error(e);
	process.exit(1); // Exit process with an error code
});
