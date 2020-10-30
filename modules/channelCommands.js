*/
* These commands have the dubious honor of being the most dangerous commands that MilkBot could use.
* They deal with the addition, deletion, and renaming of text and voice channels. Hence why they are considered dangerous.
* Every command will always have a permissions check and try/catch/else block associated with it. 
* Sometimes, multiple permissions checks are run just to ensure the command's safety.
*/

const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js

client.on('message', async (message) =>
{
  if (message.author.bot || !message.content.startsWith(PREFIX)) return; 
}
