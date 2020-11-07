const Discord = require('discord.js');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
            if (user) {
                const memberiq = message.guild.member(user);
                if (memberiq) {
                    if (message.member.permissions.has('KICK_MEMBERS')) {
                        var text = args.slice(1, args.length);
						var reason = text.join(" ");
                        memberiq.kick(`Kicked by ${message.author.tag} from ${message.guild.name}. Reason: ${reason}`)
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

                else {
                    const nomemembed = new Discord.MessageEmbed()
                        .setTitle('Moderation')
						.setColor("BLURPLE")
                        .setDescription('This user is not in this server')
                        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                    message.channel.send(nomemembed);
                }
            }

            else {
                const nopersembed = new Discord.MessageEmbed()
                    .setTitle('Moderation')
					.setColor("BLURPLE")
                    .setDescription('No person was specified!')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(nopersembed);
            }
};

module.exports.help = {
    name: "kick",
    description: "Kicks someone. You can give reasons for kicking people.",
    aliases: []
};
