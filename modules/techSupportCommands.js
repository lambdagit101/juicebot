const { client, PREFIX } = require('../index'); // Import the client from index.js
const Discord = require('discord.js');
const fetch = require('node-fetch');
const ytdl = require('ytdl-core');
const malenames = ['Alex', 'Bob', 'Liam', 'William', 'Jonathan', 'Logan', 'Ben', 'Mason', 'Jacob', 'Michael', 'Daniel', 'Samuel', 'Rajesh', 'David', 'Sebastian', 'Luke'];

client.on("message", async (message) => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(PREFIX)) return;

    if (message.content.toLowerCase().startsWith(`${PREFIX}techsupport`)) {
        if (message.member.voice.channel) {
          var connection = await message.member.voice.channel.join();
		  techsupport(message, connection);
        } else {
          message.channel.send("You need to be in a voice channel to start a tech support session.");
        }
        return;
    }
});

async function techsupport(message, connection) {
	const dispatcher = connection
        .play(ytdl('https://youtu.be/DJztXj2GPfk'))
        .on("finish", () => {
            console.log('song ended ;-;');
        })
        .on("error", (error) => console.error(error));
	message.channel.send(`Thank you for calling support, my name is ${malenames[Math.random(0, malenames.length)]}, how can I help you?`);
	message.channel.awaitMessages(async (m) => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then( async (collected) => {
                                    const stacksearch = await fetch(`https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q=${message.content}&site=stackoverflow`);
									const stackjson = await stacksearch.json();
									message.channel.send(`This might be a solution: \n${stackjson.items[1].link}`);
                            }).catch(() => {
                                    message.channel.send('Timed out.');
                            });
}