const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js
var irc = require('irc');

client.on('message', async (message) => 
{
    if (message.author.bot) return;
	if (!message.content.startsWith(PREFIX)) return;

    if (message.content.toLowerCase().startsWith(`${PREFIX}irc`)) {
		if (message.content.toLowerCase().startsWith(`${PREFIX}ircsay`)) {
			const args = message.content.slice(PREFIX.length).trim().split(' ');
			var text = args.slice(2, args.length);
			var whereto = args[1];
			var finalresult = text.join(" ");
			ircsay(whereto, text);
			return;
		}
		if (message.content.toLowerCase().startsWith(`${PREFIX}ircpart`)) {
			const args = message.content.slice(PREFIX.length).trim().split(' ');
			var whereto = args[1];
			ircpart(whereto, text);
			return;
		}
		const args1 = message.content.slice(PREFIX.length).trim().split(' ');
		var server = args1[1];
		var nickname = args1[2];
		var channel = args1.slice(3, args1.length);
		ircfunctionality(server, nickname, channel, message);
		return;
	}

});

async function ircfunctionality(server, nickname, channelsto, message) {
	var client = new irc.Client(server, nickname, {
		channels: channelsto,
	});
	
	client.addListener('message', function (from, to, message) {
		message.channel.send(from + ' => ' + to + ': ' + message);
	});
	async function ircsay(where, what) {
		client.say(where, what);
	}
	async function ircpart(where) {
		client.part(where);
	}
}
