const Discord = require('discord.js');
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
  if message.guild return;
    const user = message.mentions.users.first();
            if (user) {
                const memberiq = message.guild.member(user);
                if (memberiq) {
                    if (message.member.permissions.has('KICK_MEMBERS') || message.member.permissions.has('BAN_MEMBERS')) {
						            var text = args.slice(1, args.length);
						            var reason = text.join(" ");
                        const warnembed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setDescription(`You have been warned\nReason: ${reason}`)
							              .setColor(embedcolor)
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        memberiq.send(warnembed);
                        const warnedembed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setDescription(`${user.tag} has been warned`)
							              .setColor(embedcolor)
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(warnedembed);
                    } else {
                        const warnemmbed = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setDescription(`No permission`)
							              .setColor(embedcolor)
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(warnemmbed);
                    }
                }
            }
};

module.exports.help = {
    name: "warn",
    description: "Warns someone. For now it just sends a warning message to the person you mentioned.",
    aliases: []
};
