const { client, PREFIX } = require('../index'); // Import the client from index.js
const Discord = require('discord.js');
const fetch = require('node-fetch');
const prompter = require('discordjs-prompter');
const db = require('quick.db');

client.on("message", async (message) => {

    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    if (message.content.toLowerCase().startsWith(`${PREFIX}trivia`)) {
		var trivia = await fetch('https://opentdb.com/api.php?amount=10&difficulty=medium');
		var triviajson = await trivia.json();
		var randomquestion = Math.trunc(Math.random() * 10);
		const triviaembed = new Discord.MessageEmbed()
            .setTitle("Trivia")
            .setDescription(`${triviajson.results[randomquestion].question}\nPossible answers:\n${triviajson.results[randomquestion].incorrect_answers.join('\n')}\n${triviajson.results[randomquestion].correct_answer}`)
			.addField('Possible answer', triviajson.results[randomquestion].correct_answer, true)
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
		
		prompter.message(message.channel, {
        question: triviaembed,
        userId: message.author.id,
        max: 1,
        timeout: 20000,
      })
      .then(responses => {
        // If no responses, the time ran out
        if (!responses.size) {
          return msg.channel.send(`You ran out of time! The answer was ${triviajson.results[randomquestion].correct_answer}`);
        }
        // Gets the first message in the collection
        const response = responses.first();
 
        // Respond
		if (${response}.toLowerCase().startsWith(triviajson.results[randomquestion].correct_answer)) {
			var receivedtriviapoints = Math.trunc(Math.random() * 10);
			db.add(`${message.author.id}_triviapoints`, receivedtriviapointstriviapoints);
			var usertriviapoints = db.get(`${message.author.id}_triviapoints`);
			message.channel.send(`Congratulations! You have been awarded ${receivedtriviapoints} trivia points. You now have ${usertriviapoints} trivia points.`);
		} else {
			message.channel.send(`Your answer was wrong. The answer was ${triviajson.results[randomquestion].correct_answer}.`);
		}
      });
        return;
    }
});


