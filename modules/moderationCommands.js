const Discord = require('discord.js');
const { client, PREFIX } = require('../index');

client.on('message', async (message) => {
    if (!message.guild) return;
    if (message.author.bot) return;
    try {
        //Kicking a member
        if (message.content.toLowerCase().startsWith(`${PREFIX}kick`)) {
            const user = message.mentions.users.first();
            if (user) {
                const memberiq = message.guild.member(user);
                if (memberiq) {
                    if (message.member.permissions.has('KICK_MEMBERS')) {
                        memberiq.kick(`Kick requested by ${message.author.username}`)
                            .then(() => {
                                const kickembed = new Discord.MessageEmbed()
                                    .setTitle('Moderation')
                                    .setColor(0xff0000)
                                    .setDescription(`${user.tag} was successfully kicked!`)
                                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                                message.channel.send(kickembed);
                            }).catch(err => {
                                const cantkickembed = new Discord.MessageEmbed()
                                    .setTitle('Moderation')
                                    .setColor(0xff0000)
                                    .setDescription("Couldn't kick the user")
                                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                                message.channel.send(cantkickembed);
                                console.error(err);
                            });
                    } else {
                        const nopermemmbed = new Discord.MessageEmbed()
                        .setTitle('Moderation')
                        .setColor(0xff0000)
                        .setDescription(`No permission`)
                        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(nopermemmbed);
                    }

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

        if (message.content.toLowerCase().startsWith(`${PREFIX}warn`)) { // prototype warn command that sends a dm to the person who has been warned
            const user = message.mentions.users.first();
            if (user) {
                const memberiq = message.guild.member(user);
                if (memberiq) {
                    if (message.member.permissions.has('KICK_MEMBERS') || message.member.permissions.has('BAN_MEMBERS')) {
                        const warnembed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setColor(0xff0000)
                            .setDescription(`You have been warned`)
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        memberiq.send(warnembed);
                        const warnedembed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setColor(0xff0000)
                            .setDescription(`${user.tag} has been warned`)
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(warnedembed);
                    } else {
                        const warnemmbed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setColor(0xff0000)
                            .setDescription(`No permission`)
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(warnemmbed);
                    }
                }
            }
        }

        //Banning a member.  
        if (message.content.toLowerCase().startsWith(`${PREFIX}ban`)) {
            const user = message.mentions.users.first();
            if (user) {
                const memberiq = message.guild.member(user);
                if (memberiq) {
                    if (message.member.permissions.has('BAN_MEMBERS')) {
                        memberiq.ban({ reason: `Ban requested by ${message.author.username}` })
                            .then(() => {
                                const banembed = new Discord.MessageEmbed()
                                .setTitle('Moderation')
                                .setColor(0xff0000)
                                .setDescription(`${user.tag} was successfully banned!`)
                                .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                                message.channel.send(banembed);
                            })
                    } else {
                            const nopermembed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setColor(0xff0000)
                            .setDescription(`No permission`)
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                            message.channel.send(nopermembed);
                    }
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
        }

        //Muting a member.
        if (message.content.toLowerCase().startsWith(`${PREFIX}mute`)) {
            return message.channel.send('Muting does not work right now, we are working on it though.');
            // Honestly, who tf thought <member>.mute works

            //Muting a member (V2)
            /*
                //Mute command
                if (message.content.toLowerCase().startsWith(`${PREFIX}`mute`))
                {
                    //Insufficient permissions to mute (uses kick/ban perms)
                    if (!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']))
                    {
                        const muteFailedEmbed = new Discord.MessageEmbed()
                        .setTitle('Moderation')
                        .setColor('0xff0000')
                        .setDescription("Mute failed! You don't have the required permission to do so.")
                        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(muteFailedEmbed);
                    }
                    
                    //Mute was successful... kinda.
                    else
                    {
                        //Determine who it is we're going to mute, then set their ID as the target ID and determine their roles.
                        let memberID = message.content.substring(message.content.indexOf(' ')+1);
                        console.log(memberID);
                        let member = message.guild.members.cache.get(memberID);
                        
                        //Check if the member we target is the actual one to mute.
                        if (member)
                        {
                            //Can't mute staff members unless you have administrator bypass.
                            if (member.hasPermission(['KICK_MEMBERS, 'BAN_MEMBERS']) && !message.member.author.hasPermission(['ADMINISTRATOR'])
                            {
                            const muteStaff = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setColor('0xff0000')
                            .setDescription("Mute failed! You can't mute staff members.")
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                            message.channel.send(muteStaff);
                            }
                            
                            //Mute the member with a workaround, move them into the Muted role.
                            else
                            {
                            let mutedRole = message.guild.roles.cache.get('muted_role'); //@@TODO: Setup muted role by creating it with NolanBot instead of manual replacement
                          
                            //We check to see if the muted role actually exists, then mute the user and announce it as successful
                            if (mutedRole)
                            {
                                member.roles.add(mutedRole);
                                const mutedMessage = new Discord.MessageEmbed()
                                .setTitle('Moderation')
                                .setColor('0xff0000')
                                .setDescription(`${member} was muted successfully.`)
                                .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                                message.channel.send(mutedMessage); 
                            }
                            
                            //If the muted role doesn't exist...
                            else
                            {
                               message.channel.send("The Muted role doesn't exist!"); 
                            }
                                                    
                            
                            }
                            
                            
                        
                     //Can't mute someone who doesn't exist.
                     else
                        {
                            const muteAlien = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setColor('0xff0000')
                            .setDescription("You are trying to mute a user who isn't in the server.")
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                            message.channel.send(muteAlien);
                        }
                        }
                    }
                    }
                }
            */

            //The member needs to be specified.
            const user = message.mentions.user.first();
            if (user) {
                const memberiq = message.guild.member(user);

                //If the member being muted is the one mentioned, mute them.
                if (memberiq) {
                    member.mute({ reason: 'Mute requested' })
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
                        .catch(err => {
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
    } catch (e) {
        // Send a message if an error has occurred
        console.log(`Uh-oh, something went wrong. Error message: \`\`\`js\n${e}\n\`\`\`\nIf this keeps happening, please contact the owner of this bot or make a new issue on github using /github`);
    }
});
