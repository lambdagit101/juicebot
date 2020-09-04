const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');
const randomPuppy = require('random-puppy'); //Because puppies are nice.
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch');

client.on('message', async (message) => 
{
    if (message.author.bot) return;

    if (message.content.toLowerCase().startsWith(`${PREFIX}dummyimage`)) {
        const args = message.content.slice(PREFIX.length).trim().split(' ');
        const width = args[1].toLowerCase();
        const text = message.content.split(args[1] + " ")[1];
        const forrealtext = text.replace(/ /g, "%20");
        message.channel.send('https://dummyimage.com/' + width + '/' + '000/fff.png&text=' + forrealtext + '+');
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}borgar`)) {
        const borgarembed = new Discord.MessageEmbed()
            .setTitle('Borgar')
            .setURL('https://youtu.be/LqL1Pm5-uek')
            .setImage('https://cdn.discordapp.com/attachments/736196476837036102/749324531943997502/borgar.PNG')
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(borgarembed);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}requestavatar`)) 
    {
        const avatarembed = new Discord.MessageEmbed()
            .setTitle('Here is your requested avatar!')
            .setURL('https://youtu.be/TYqEcxfYMt0')
            .setImage(message.author.displayAvatarURL({ format: 'png', size: 512 }))
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(avatarembed);
        return;
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}evaxephon`)) 
	{
        const evaembed = new Discord.MessageEmbed()
            .setTitle('I, EvaSex')
            .setURL('https://youtu.be/dxnevAItvFM')
            .setImage('https://yandere-simulator.com/tampon.png')
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(evaembed);
        return;
    }
    
    if (message.content.toLowerCase().startsWith(`${PREFIX}trigger`)) {
        const tigerembed = new Discord.MessageEmbed()
            .setTitle('Trigger')
            .setURL('https://youtu.be/TYqEcxfYMt0')
            .setImage('https://i.redd.it/hz43b4ia84l51.png')
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(tigerembed);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}bonk`)) 
    {
        var whichbonk = Math.floor(Math.random() * 4);
        switch (whichbonk) {
            case 0:
                const bonk1embed = new Discord.MessageEmbed()
                    .setTitle('Bonk and Scout Wedding Photo')
                    .setURL('https://youtu.be/kuNixp-wvWM')
                    .setImage('https://cdn.discordapp.com/attachments/686015484281225241/722533493435007066/posterbonk.png')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(bonk1embed);
                break;
            case 1:
                const bonk2embed = new Discord.MessageEmbed()
                    .setTitle('Bonk and Scout going home after the wedding')
                    .setURL('https://youtu.be/kuNixp-wvWM')
                    .setImage('https://cdn.discordapp.com/attachments/735495269034098771/747478778254459089/posterbonk2.png')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(bonk2embed);
                break;
            case 2:
                const bonk3embed = new Discord.MessageEmbed()
                    .setTitle('Scout seeing Bonk for the first time')
                    .setURL('https://youtu.be/kuNixp-wvWM')
                    .setImage('https://cdn.discordapp.com/attachments/735495269034098771/747478781454712833/posterbonk3.png')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(bonk3embed);
                break;
            case 3:
                const bonk4embed = new Discord.MessageEmbed()
                    .setTitle('Scout and Bonk laughing at Sniper')
                    .setURL('https://youtu.be/kuNixp-wvWM')
                    .setImage('https://cdn.discordapp.com/attachments/735495269034098771/747478775633018970/posterbonk4.png')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(bonk4embed);
                break;
            default:
                message.channel.send('How did we get here?');
        }
        return
    }

});
