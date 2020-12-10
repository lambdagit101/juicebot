const indexfile = require('../../index.js');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	if (message.mentions.users.first()) {

	      var output = await indexfile.Levels.Leaderboard({
	        search: message.mentions.users.first().id
	      })
	      message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output.placement} on my leaderboard!`);

	      //Searches for the top 3 and outputs it to the user.
	    } else {

	      indexfile.Levels.Leaderboard({
	        limit: 3 //Only takes top 3 ( Totally Optional )
	      }).then(async users => { //make sure it is async

	        if (users[0]) var firstplace = await client.fetchUser(users[0].userid) //Searches for the user object in discord for first place
	        if (users[1]) var secondplace = await client.fetchUser(users[1].userid) //Searches for the user object in discord for second place
	        if (users[2]) var thirdplace = await client.fetchUser(users[2].userid) //Searches for the user object in discord for third place

	        message.channel.send(`My leaderboard:

	          1 - ${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].level || 'None'} : ${users[0] && users[0].xp || 'None'}
	          2 - ${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].level || 'None'} : ${users[0] && users[0].xp || 'None'}
	          3 - ${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].level || 'None'} : ${users[0] && users[0].xp || 'None'}`)

	      })

	 }
};

module.exports.help = {
    name: "leaderboard",
    description: "Shows all scores.",
    aliases: ['scores']
};
