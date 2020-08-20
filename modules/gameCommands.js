const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch')

client.on('message', message => 
{
    if (message.author.bot) return;
    if (!message.guild) return;

	if (message.content.toLowerCase().startsWith(`${PREFIX}trivia misc`)) 
	{
        const response = await fetch('https://opentdb.com/api.php?amount=10');
        const data = await response.json();
        var length = data.results.length;
        var randomNumber = Math.floor(Math.random() * length);
        var randomQuestion = data.results[randomNumber];
        var question = randomQuestion.question;
        var correctAnswer = randomQuestion.correct_answer;
        const triviaqembed = new Discord.MessageEmbed()
        .setTitle('Trivia')
        .setColor(0xff0000)
        .setDescription(question)
        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(triviaqembed);
        const filter = m => m.author.id === message.author.id;
        const answer = await message.channel.awaitMessages(filter, {maxMatches: 1, time: 10000, errors: ['time', 'maxMatches']});
        const ans = answer.first();
        if (ans.content.toLowerCase() === correctAnswer.toLowerCase()) {
            const trivialembed = new Discord.MessageEmbed()
                .setTitle('Trivia')
                .setColor(0xff0000)
                .setDescription("You got the question right!")
                .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
            message.channel.send(trivialembed);
        } else {
            const triviawembed = new Discord.MessageEmbed()
                .setTitle('Trivia')
                .setColor(0xff0000)
                .setDescription("Correct answer was " + correctAnswer + ". You lost.")
                .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
            message.channel.send(triviawembed);
        }
    } 
    if (message.content.toLowerCase().startsWith(`${PREFIX}trivia tech`)) {
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=18');
        const data = await response.json();
        var length = data.results.length;
        var randomNumber = Math.floor(Math.random() * length);
        var randomQuestion = data.results[randomNumber];
        var question = randomQuestion.question;
        var correctAnswer = randomQuestion.correct_answer;
        const triviaqembed = new Discord.MessageEmbed()
            .setTitle('Trivia')
            .setColor(0xff0000)
            .setDescription(question)
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(triviaqembed);
        const filter = m => m.author.id === message.author.id;
        const answer = await message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time', 'maxMatches'] });
        const ans = answer.first();
        if (ans.content.toLowerCase() === correctAnswer.toLowerCase()) {
            const trivialembed = new Discord.MessageEmbed()
                .setTitle('Trivia')
                .setColor(0xff0000)
                .setDescription("You got the question right!")
                .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
            message.channel.send(trivialembed);
        } else {
            const triviawembed = new Discord.MessageEmbed()
                .setTitle('Trivia')
                .setColor(0xff0000)
                .setDescription("Correct answer was " + correctAnswer + ". You lost.")
                .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
            message.channel.send(triviawembed);
        }
    }
    if (message.content.toLowerCase().startsWith(`${PREFIX}trivia otaku`)) {
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=31');
        const data = await response.json();
        var length = data.results.length;
        var randomNumber = Math.floor(Math.random() * length);
        var randomQuestion = data.results[randomNumber];
        var question = randomQuestion.question;
        var correctAnswer = randomQuestion.correct_answer;
        const triviaqembed = new Discord.MessageEmbed()
            .setTitle('Trivia')
            .setColor(0xff0000)
            .setDescription(question)
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(triviaqembed);
        const filter = m => m.author.id === message.author.id;
        const answer = await message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time', 'maxMatches'] });
        const ans = answer.first();
        if (ans.content.toLowerCase() === correctAnswer.toLowerCase()) {
            const trivialembed = new Discord.MessageEmbed()
                .setTitle('Trivia')
                .setColor(0xff0000)
                .setDescription("You got the question right!")
                .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
            message.channel.send(trivialembed);
        } else {
            const triviawembed = new Discord.MessageEmbed()
                .setTitle('Trivia')
                .setColor(0xff0000)
                .setDescription("Correct answer was " + correctAnswer + ". You lost.")
                .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
            message.channel.send(triviawembed);
        }
    } 
    if (message.content.toLowerCase().startsWith(`${PREFIX}trivia games`)) {
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=15');
        const data = await response.json();
        var length = data.results.length;
        var randomNumber = Math.floor(Math.random() * length);
        var randomQuestion = data.results[randomNumber];
        var question = randomQuestion.question;
        var correctAnswer = randomQuestion.correct_answer;
        const triviaqembed = new Discord.MessageEmbed()
            .setTitle('Trivia')
            .setColor(0xff0000)
            .setDescription(question)
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(triviaqembed);
        const filter = m => m.author.id === message.author.id;
        const answer = await message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time', 'maxMatches'] });
        const ans = answer.first();
        if (ans.content.toLowerCase() === correctAnswer.toLowerCase()) {
            const trivialembed = new Discord.MessageEmbed()
                .setTitle('Trivia')
                .setColor(0xff0000)
                .setDescription("You got the question right!")
                .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
            message.channel.send(trivialembed);
        } else {
            const triviawembed = new Discord.MessageEmbed()
                .setTitle('Trivia')
                .setColor(0xff0000)
                .setDescription("Correct answer was " + correctAnswer + ". You lost.")
                .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
            message.channel.send(triviawembed);
        }
    }
});
