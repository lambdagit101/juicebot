/*
* These commands have the dubious honor of being the most dangerous commands that MilkBot could use.
* They deal with the addition, deletion, and renaming of text and voice channels. Hence why they are considered dangerous.
* Every command will always have a permissions check and try/catch/else block associated with it. 
* Sometimes, multiple permissions checks are run just to ensure the command's safety.
*/

const Discord = require('discord.js');
const {client, PREFIX} = require('../index'); // Import client from index.js

client.on('message', async (message) =>
{
        if (message.author.bot || !message.content.startsWith(PREFIX)) return; 
  
        if (message.content.toLowerCase().startsWith(`${PREFIX}createchannel`) || message.content.toLowerCase().startsWith(`${PREFIX}cchan`))
        {
                message.channel.send("Sorry, the create channel feature doesn't work yet. We're currently working on it.");
        }
  
        if (message.content.toLowerCase().startsWith(`${PREFIX}deletechannel`) || message.content.toLowerCase().startsWith(`${PREFIX}delchan`))
        {
                message.channel.send("Sorry, the delete channel feature doesn't work yet. We're currently working on it.");
        }
}
