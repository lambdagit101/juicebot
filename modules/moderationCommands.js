const Discord = require('discord.js');
const { client, PREFIX } = require('../index');

client.on('message', message => {
    try {
        //Kicking a member
        if (message.content.toLowerCase().startsWith(`${PREFIX}kick`)) {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member.kick('Kick was requested')
                    .then(() => {
                        const kickembed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setColor(0xff0000)
                            .setDescription(`${user.tag} was successfully kicked!`)
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(kickembed);
                    })
                    .catch(err => {
                        const cantkickembed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setColor(0xff0000)
                            .setDescription("Couldn't kick the user")
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(cantkickembed);
                        console.error(err);
                    });
                } 

                //You can't kick someone who isn't in the server!
                else {
                    const nomemembed = new Discord.MessageEmbed()
                    .setTitle('Moderation')
                    .setColor(0xff0000)
                    .setDescription('This user is not in this server')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                    message.channel.send(nomemembed);
                }
            } 

            //You have to specify someone!
            else {
                const nopersembed = new Discord.MessageEmbed()
                    .setTitle('Moderation')
                    .setColor(0xff0000)
                    .setDescription('No person was specified!')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(nopersembed);
            }
        }

        //Banning a member.  
        if (message.content.toLowerCase().startsWith(`${PREFIX}ban`)) {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member.ban({reason: 'Ban was requested'})
                    .then(() => {
                        const banembed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setColor(0xff0000)
                            .setDescription(`${user.tag} was successfully banned!`)
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(banembed);
                    })

                    .catch(err => {
                        const cantbanembed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setColor(0xff0000)
                            .setDescription("Couldn't ban the user")
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(cantbanembed);
                        if (err) console.error(err);
                    });
                } 

                  //You can't ban someone who isn't in the server.
                else {
                    const nobanembed = new Discord.MessageEmbed()
                        .setTitle('Moderation')
                        .setColor(0xff0000)
                        .setDescription("This user is not in this server")
                        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                    message.channel.send(nobanembed);
                }
            } else {
                message.channel.send(new Discord.MessageEmbed()
                .setTitle('Unable to ban')
                .setDescription('No person was specified!')
                .setColor('ff0000')
                .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL())
                );
            }
            
            /*
            Unbanning a member. 
            Taken from https://www.reddit.com/r/Discord_Bots/comments/fjy2sd/unban_users_with_discordjs_api/
            NOTE: Pre-commented out for safety purposes.
            Please DO NOT uncomment it unless you can prove that it works!!
            
            if (message.content.toLowerCase().startsWith(`${PREFIX}unban`))
            {   
                let userID = message.mentions.users.first().id
                message.guild.members.unban(userID)
                
                .then(() => 
                {
                const unbanMessage = new Discord.MessageEmbed()
                .setTitle('Moderation')
                .setColor(0xff0000)
                .setDescription(`Successfully unbanned ${user.tag}!`)
                .setFooter(`Invoked by ${message.author.username}, message.author.avatarURL());
                message.channel.send(unbanMessage)
                })
                
                .catch(err =>
                {
                const unbanFailed = new Discord.MessageEmbed()
                .setTitle('Moderation')
                .setColor(0xff0000)
                .setDescription("Could not unban the user.")
                .setFooter(`Invoked by ${message.author.username}, message.author.avatarURL());
                });
            }
            
                else
                {
                    const unbanAlien = new.Discord.MessageEmbed()
                    .setTitle('Moderation')
                    .setColor(0xff0000)
                    .setDescription("You're trying to unban a user who isn't in the server.")
                    .setFooter(`Invoked by ${message.author.username}, message.author.avatarURL());
                }
            }   
            */
   
        }

        //Muting a member.
        if (message.content.toLowerCase().startsWith(`${PREFIX}mute`)) {
            return message.channel.send('Muting does not work right now, we are working on it though.');
            // Honestly, who tf thought <member>.mute works

            //The member needs to be specified.
            const user = message.mentions.user.first();
            if (user) {
                const member = message.guild.member(user);

                //If the member being muted is the one mentioned, mute them.
                if (member) {
                    member.mute({reason:'Mute requested'})
                    .then(() => {
                        //Create a new message to show that the mute was successful.
                        const mutedMessage = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setColor('0xff0000')
                            .setDescription(`${user.tag} was muted successfully.`)
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(mutedMessage);
                    })
                
                    //Something went wrong.
                    .catch(err =>
                    {
                        const muteFailedEmbed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setColor('0xff0000')
                            .setDescription("Couldn't mute the user.")
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(muteFailedEmbed);
                        if (err) console.error(err);
                    });
                }

                //You can't mute a member when they aren't in the server.
                else {
                    const muteAlien = new Discord.MessageEmbed()
                        .setTitle('Moderation')
                        .setColor('0xff0000')
                        .setDescription("You are trying to mute a user who isn't in the server.")
                        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                    message.channel.send(muteAlien);
                } 	
            }
        }
    } catch(e) {
        // Send a message if an error has occurred
        message.channel.send(`Uh-oh, something went wrong. Error message: \`\`\`js\n${e}\n\`\`\`\nIf this keeps happening, please contact the owner of this bot or make a new issue on github using /github`);
    }
});
