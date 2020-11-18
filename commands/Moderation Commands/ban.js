const Discord = require('discord.js');
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
            if (user) {
                const memberiq = message.guild.member(user);
                if (memberiq) {
                    if (message.member.permissions.has('BAN_MEMBERS')) {
                        var text = args.slice(1, args.length);
						            var reason = text.join(" ");
                        memberiq.ban({ reason: `Banned by ${message.author.tag} from ${message.guild.name}. Reason: ${reason}` })
                            .then(() => {
                                const bannedembed = new Discord.MessageEmbed()
                                    .setTitle('Moderation')
									                  .setColor(embedcolor)
                                    .setDescription(`You have been banned by ${message.author.tag} from ${message.guild.name}. Reason: ${text}`)
                                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                                user.send(bannedembed);
                                const banembed = new Discord.MessageEmbed()
                                .setTitle('Moderation')
                                .setColor(embedcolor)
                                .setDescription(`${user.tag} was successfully banned!`)
                                .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                                message.channel.send(banembed);
                            })
                    } else {
                            const nopermembed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setDescription('No permission')
							              .setColor(embedcolor)
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                            message.channel.send(nopermembed);
                    }
                }

                else {
                    const nobanembed = new Discord.MessageEmbed()
                        .setTitle('Moderation')
						            .setColor(embedcolor)
                        .setDescription("This user is not in this server")
                        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                    message.channel.send(nobanembed);
                }
            } else {
                message.channel.send(new Discord.MessageEmbed()
                    .setTitle('Moderation')
					          .setColor(embedcolor)
                    .setDescription('No person was specified!')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL())
                );
            }
};

module.exports.help = {
    name: "ban",
    description: "Bans people from servers with reasons you specify.",
    aliases: ['exile']
};
