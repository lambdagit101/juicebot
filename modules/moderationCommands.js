const Discord = require('discord.js');
const { client, PREFIX } = require('../index');

client.on('message', async (message) => {
    if (!message.guild) return;
    if (message.author.bot) return;
	if (!message.content.startsWith(PREFIX)) return;
    try {
        if (message.content.toLowerCase().startsWith(`${PREFIX}kick`)) {
            const user = message.mentions.users.first();
            if (user) {
                const memberiq = message.guild.member(user);
                if (memberiq) {
                    if (message.member.permissions.has('KICK_MEMBERS')) {
                        const args = message.content.slice(PREFIX.length).trim().split(' ');
                        const text = message.content.split(args[1] + " ")[1];
                        memberiq.kick(`Kicked by ${message.author.tag}. Reason: ${text}`)
                            .then(() => {
                                const kickedembed = new Discord.MessageEmbed()
                                    .setTitle('Moderation')
									.setColor("BLURPLE")
                                    .setDescription(`You have been kicked by ${message.author.tag} from ${message.guild.name}. Reason: ${text}`)
                                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                                user.send(kickedembed);
                                const kickembed = new Discord.MessageEmbed()
                                    .setTitle('Moderation')
									.setColor("BLURPLE")
                                    .setDescription(`${user.tag} was successfully kicked!`)
                                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                                message.channel.send(kickembed);
                            }).catch(err => {
                                const cantkickembed = new Discord.MessageEmbed()
                                    .setTitle('Moderation')
									.setColor("BLURPLE")
                                    .setDescription("Couldn't kick the user")
                                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                                message.channel.send(cantkickembed);
                                console.error(err);
                            });
                    } else {
                        const nopermemmbed = new Discord.MessageEmbed()
                        .setTitle('Moderation')
						.setColor("BLURPLE")
                        .setDescription(`No permission`)
                        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(nopermemmbed);
                    }

                }

                //You can't kick someone who isn't in the server!
                else {
                    const nomemembed = new Discord.MessageEmbed()
                        .setTitle('Moderation')
						.setColor("BLURPLE")
                        .setDescription('This user is not in this server')
                        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                    message.channel.send(nomemembed);
                }
            }

            //You have to specify someone!
            else {
                const nopersembed = new Discord.MessageEmbed()
                    .setTitle('Moderation')
					.setColor("BLURPLE")
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
                        const args = message.content.slice(PREFIX.length).trim().split(' ');
                        const text = message.content.split(args[1] + " ")[1];
                        const warnembed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setDescription(`You have been warned\nReason: ${text}`)
							.setColor("BLURPLE")
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        memberiq.send(warnembed);
                        const warnedembed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setDescription(`${user.tag} has been warned`)
							.setColor("BLURPLE")
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(warnedembed);
                    } else {
                        const warnemmbed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setDescription(`No permission`)
							.setColor("BLURPLE")
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
                        const args = message.content.slice(PREFIX.length).trim().split(' ');
                        const text = message.content.split(args[1] + " ")[1];
                        memberiq.ban({ reason: `Banned by ${message.author.tag} from ${message.guild.name}. Reason: ${text}` })
                            .then(() => {
                                const bannedembed = new Discord.MessageEmbed()
                                    .setTitle('Moderation')
									.setColor("BLURPLE")
                                    .setDescription(`You have been banned by ${message.author.tag} from ${message.guild.name}. Reason: ${text}`)
                                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                                user.send(bannedembed);
                                const banembed = new Discord.MessageEmbed()
                                .setTitle('Moderation')
                                .setDescription(`${user.tag} was successfully banned!`)
                                .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                                message.channel.send(banembed);
                            })
                    } else {
                            const nopermembed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setDescription(`No permission`)
							.setColor("BLURPLE")
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                            message.channel.send(nopermembed);
                    }
                }


                //You can't ban someone who isn't in the server.
                else {
                    const nobanembed = new Discord.MessageEmbed()
                        .setTitle('Moderation')
						.setColor("BLURPLE")
                        .setDescription("This user is not in this server")
                        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                    message.channel.send(nobanembed);
                }
            } else {
                message.channel.send(new Discord.MessageEmbed()
                    .setTitle('Unable to ban')
					.setColor("BLURPLE")
                    .setDescription('No person was specified!')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL())
                );
            }
        }

        if (message.content.toLowerCase().startsWith(`${PREFIX}purge`)) {
            if (message.member.permissions.has('MANAGE_MESSAGES')) {
                const args = message.content.split(' ');
                let deleteCount = 0;
                try {
                    deleteCount = parseInt(args[1], 10);
                } catch (err) {
                    const returnembed = new Discord.MessageEmbed()
                        .setTitle('Moderation')
						.setColor("BLURPLE")
                        .setDescription(`Please provide a number`)
                        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                    return message.channel.send(returnembed);
                }


                if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
                    const providembed = new Discord.MessageEmbed()
                        .setTitle('Moderation')
						.setColor("BLURPLE")
                        .setDescription(`Please provide a number between 2 and 100`)
                        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                    return message.channel.send(providembed);
                }
                const fetched = await message.channel.messages.fetch({
                    limit: deleteCount,
                });
                message.channel.bulkDelete(fetched)
                    .catch(error => message.channel.send(`Couldn't delete messages because of: ${error}`));
            } else {
                const nonpermembed = new Discord.MessageEmbed()
                    .setTitle('Moderation')
					.setColor("BLURPLE")
                    .setDescription(`No permission`)
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(nonpermembed);
            }     
        }

        //Muting a member.
        if (message.content.toLowerCase().startsWith(`${PREFIX}mute`)) {
            return message.channel.send('Muting does not work right now, we are working on it though.');

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
								.setColor("BLURPLE")
                                .setDescription(`${user.tag} was muted successfully.`)
                                .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                            message.channel.send(mutedMessage);
                        })

                        //Something went wrong.
                        .catch(err => {
                            const muteFailedEmbed = new Discord.MessageEmbed()
                                .setTitle('Moderation')
								.setColor("BLURPLE")
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
                        .setColor("BLURPLE")
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
