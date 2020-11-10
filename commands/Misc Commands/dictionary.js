const Discord = require('discord.js');
const CambDict = require("camb-dict");
const dictionary = new CambDict.Dictionary();

module.exports.run = async (client, message, args) => {
	const definition = dictionary.meaning(args.join(' ')).then(console.log).catch(console.error);
    const dictembed = new Discord.MessageEmbed()
        .setTitle(`Definition for ${definition.word}`)
		.setColor("BLURPLE")
		.addFields(
			{ name: 'Meaning', value: definition.meaning },
			{ name: 'Pronounciation', value: `[${definition.pronounciation}](${definition.audio[0].url})`, inline: true },
			{ name: 'Type', value: definition.type, inline: true },
			{ name: 'Example', value: definition.examples[0] }
		)
        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
    message.channel.send(dictembed);
};

module.exports.help = {
    name: "dictionary",
    description: "Searches up a word in the Cambridge Dictionary.",
    aliases: []
};