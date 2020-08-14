const { Client, MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');
const client = new Client();
const ytdl = require('ytdl-core');
const PREFIX = "/";


// Export the client so other modules can use it too
module.exports.client = client;

client.on('ready', () => {
    console.log('I am ready!');

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

// End of the commands section.

client.login(process.env.BOT_TOKEN || require('./token.json').token);
