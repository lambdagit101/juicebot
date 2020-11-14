const { leveling } = require('../../index.js');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	if (message.mentions.users.first()) {

      var output = await leveling.Leaderboard({
        search: message.mentions.users.first().id
      })
      message.channel.send(`${message.mentions.users.first().tag} is number ${output.placement} on the leaderboard.`);

    } else {

      leveling.Leaderboard({
        limit: 3
      }).then(async users => {

        if (users[0]) var firstplace = await client.fetchUser(users[0].userid);
        if (users[1]) var secondplace = await client.fetchUser(users[1].userid);
        if (users[2]) var thirdplace = await client.fetchUser(users[2].userid);

				const leadembed = new Discord.MessageEmbed()
					.setTitle('Rank Leaderboards')
					.setDescription(`1 - ${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].level || 'None'} : ${users[0] && users[0].xp || 'None'}\n2 - ${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].level || 'None'} : ${users[0] && users[0].xp || 'None'}\n3 - ${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].level || 'None'} : ${users[0] && users[0].xp || 'None'}`);
 					.setFooter(`Invoked by ${message.author.username}, powered by api.urbandictionary.com`, message.author.avatarURL())
					.setColor('BLURPLE');
        message.channel.send(leadembed)

      })
};

module.exports.help = {
    name: "leaderboard",
    description: "Shows all scores.",
    aliases: ['scores']
};
