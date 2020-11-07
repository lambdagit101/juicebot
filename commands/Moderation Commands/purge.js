const Discord = require('discord.js');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
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
};

module.exports.help = {
    name: "purge",
    description: "Purges all messages from the range you specify.",
    aliases: []
};
