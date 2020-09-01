const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js
const { MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
var download = require('download-file');
var images = require('images');
var username = '';
var id = '';
const fs = require('fs');
// send me good web apis that return json results

client.on('message', async (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase().startsWith(`${PREFIX}gay`)) {
        generateImage(message, 'gay', 'gay');
        return;
        
    }
    if (message.content.toLowerCase().startsWith(`${PREFIX}jailbars`)) {
        generateImage(message, 'bars', 'prisonbars');
        return;

    }
    if (message.content.toLowerCase().startsWith(`${PREFIX}commie`)) {
        generateImage(message, 'commie', 'commieflag');
        return;
    }
    if (message.content.toLowerCase().startsWith(`${PREFIX}flashback`)) {
        generateImage(message, 'flashback', 'vietnamwar');
        return;
    }
});

async function generateImage(message, nickname, filename) {
    try {
        id = `${Math.floor(Math.random(1, 10000))}`;
        username = `${message.author.id}${id}.png`;
        var options = {
            directory: "./",
            filename: username
        }
        download(message.author.displayAvatarURL({ format: 'png', size: 512 }), options);
        await sleep(2000);
        images(`./${username}`).resize(512, 512).save(`./${username}`);
        images(`./resize${message.author.id}${id}.png`).draw(images(`./filters/${filename}.png`), 0, 0).save(`./output${nickname}${message.author.id}${id}.png`);
        const attachment = new MessageAttachment(`./output${nickname}${message.author.id}${id}.png`);
        message.channel.send(attachment);
    } catch (err) {
        console.log(err);
        message.channel.send(`An error occured! Error log: \n${err}`);
    }
}

async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
} 