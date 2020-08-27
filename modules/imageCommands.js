const Discord = require('discord.js');
const randomPuppy = require('random-puppy'); //Because puppies are nice.
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch');

client.on('message', async (message) => {
    if (message.author.bot || !message.content.startsWith(PREFIX)) return;
    let args = message.content.substr(PREFIX.length).toLowerCase().split(" ")
    switch (args[0]) {
        default:
            //you can add `unknown command` here if you want
            break;

        case `sbubby`:
            randomPuppy('sbubby').then(url => {
                message.channel.send(url);
            });
            break;

        case `dummyimage`:
            const width = args[1].toLowerCase();
            const text = message.content.split(args[1] + " ")[1];
            const forrealtext = text.replace(/ /g, "%20");
            message.channel.send('https://dummyimage.com/' + width + '/' + '000/fff.png&text=' + forrealtext + '+');
            break;

        case `animeme`:
            randomPuppy('goodanimemes').then(url => {
                message.channel.send(url);
            });
            break;

        case `pic`:
            randomPuppy('pics').then(url => {
                message.channel.send(url);
            });
            break;

        case `comedyheaven`:
            randomPuppy('comedyheaven').then(url => {
                message.channel.send(url);
            });
            break;

        case `dankmeme`:
            randomPuppy('dankmemes').then(url => {
                message.channel.send(url);
            });
            break;

        case `4chan`:
            randomPuppy('greentext').then(url => {
                message.channel.send(url);
            });
            break;

        case `requestavatar`:
            message.channel.send("Here is your requested avatar!");
            message.channel.send(message.author.displayAvatarURL());
            break;

        case `evaxephon`:
            message.channel.send("https://yandere-simulator.com/tampon.png");
            break;

        case `puppy`:
            randomPuppy().then(url => {
                message.channel.send(url);
            });
            break;

        case `aww`:
            randomPuppy('aww').then(url => {
                message.channel.send(url);
            });
            break;

        case `bonk`:
            var whichbonk = Math.floor(Math.random() * 4);
            switch (whichbonk) {
                case 0:
                    message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722533493435007066/posterbonk.png');
                    break;
                case 1:
                    message.channel.send('https://cdn.discordapp.com/attachments/735495269034098771/747478778254459089/posterbonk2.png');
                    break;
                case 2:
                    message.channel.send('https://cdn.discordapp.com/attachments/735495269034098771/747478781454712833/posterbonk3.png');
                    break;
                case 3:
                    message.channel.send('https://cdn.discordapp.com/attachments/735495269034098771/747478775633018970/posterbonk4.png');
                    break;
                default:
                    message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722533493435007066/posterbonk.png');
                    break; //it feels safer leaving that there
            }
            //console.log("Hey can somebody keep track of my heads batted in? BONK"); - the code would never reach that, so I wasnt sure if you wanted it in there
            break;
    }
});
