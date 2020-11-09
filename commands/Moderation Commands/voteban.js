const Discord = require('discord.js');
const Prompter = require('discordjs-prompter');
const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    const votedperson = message.mentions.users.first();
	if (message.member.permissions.has('BAN_MEMBERS')) {
	if (votedperson == message.author) {
		message.channel.send('You cannot initiate a voteban on yourself.');
	} else {
		if (votedperson == null) {
			message.channel.send('You forgot to specify a person');
		} else {
			if (args[1] == null) {
				message.channel.send('You forgot the vote duration!');
			} else {
				Prompter.vote(message.channel, {
					question: `Ban ${votedperson}?`,
					choices: ['✅', '❌'],
					timeout: args[1],
				}).then((response) => {
					const winner = response.emojis[0];
					if (winner.emoji == '✅') {
						banvote(votedperson, `Vote initiated by ${message.author.tag} passed.`);
						message.channel.send(`${votedperson} has been banned successfully!`);
					} else {
						message.channel.send(`Vote failed, ${votedperson} has not been banned.`);
					}
				});
			}
		}
	}
	} else {
		message.channel.send('You lack permissions!');
	}
};

async function banvote(person, reason) {
	person.ban({reason: reason});
}

module.exports.help = {
    name: "voteban",
    description: "Initiates a vote to ban someone on the server..",
    aliases: []
};
