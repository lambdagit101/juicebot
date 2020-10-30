/*
* These commands have the dubious honor of being the most dangerous commands that MilkBot could use.
* They deal with the addition, deletion, and renaming of text and voice channels. Hence why they are considered dangerous.
* Every command will always have a permissions check and try/catch/else block associated with it. 
* Sometimes, multiple permissions checks are run just to ensure the command's safety.
*/

const Discord = require('discord.js');
const {client, PREFIX} = require('../index'); // Import client from index.js

client.on('message' async(message) =>
{
        if (message.author.bot || !message.content.startsWith(PREFIX)) return; 
  
   try
   {
        if (message.content.toLowerCase().startsWith(`${PREFIX}createchannel`) || message.content.toLowerCase().startsWith(`${PREFIX}cchan`))
        {
                if (message.member.permissions.has('MANAGE_SERVER') || message.member.permissions.has('ADMINISTRATOR'))
                {
                    if (!args[0])
                    {
                            message.channel.send("Please specify a name for the channel!");
                    }
                        
                    else
                    {
                            message.guild.channels.create(args.slice(0).join(" "), {type: 'text'})
                            
                            const channelCreatedSuccessfully = new Discord.MessageEmbed()
                            .setTitle('Server Administration')
                            .setDescription(`Channel was successfully created by {$message.author.username}`)
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                            message.channel.send(channelCreatedSuccessfully);
                    }
                   
                }
                
                else
                {
                        const noCreatePerms = new Discord.MessageEmbed()
                        .setTitle('Server Administration')
                        .setDescription(`${message.author.tag} doesn't have permission to create a channel!`)
                        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(noCreatePerms);
                }
        }
  
        if (message.content.toLowerCase().startsWith(`${PREFIX}deletechannel`) || message.content.toLowerCase().startsWith(`${PREFIX}delchan`))
        {
                if (message.member.permissions.has('MANAGE_SERVER') || message.member.permissions.has('ADMINISTRATOR'))
                {
                        message.channel.send("Sorry, the delete channel feature doesn't work yet. We're currently working on it.");
                }
                
                else
                {
                        const noDelPerms = new Discord.MessageEmbed()
                        .setTitle('Server Administration')
                        .setDescription(`${message.author.tag} doesn't have permission to delete a channel!`)
                        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(noDelPerms);
                }
        
        }
   }
   
   catch(e)
   {
           console.log(`An unexpected error occurred. Error: {e}.`);
   }
}
