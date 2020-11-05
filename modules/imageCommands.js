const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js
const fetch = require('node-fetch');

client.on('message', async (message) => 
{
    if (message.author.bot) return;
	if (!message.content.startsWith(PREFIX)) return;

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
            .setImage('https://cdn.discordapp.com/attachments/736196476837036102/749324531943997502/borgar.PNG')
			.setColor("BLURPLE")
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(borgarembed);
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}requestavatar`)) 
    {
        const user = message.mentions.users.first() || message.author;
                const avatarembed = new Discord.MessageEmbed()
                    .setTitle('Here is your requested avatar!')
                    .setImage(user.displayAvatarURL({ format: 'png', size: 512 }))
					.setColor("BLURPLE")
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(avatarembed);
        return;
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}hug`)) {
		const user = message.mentions.users.first() || message.author;
		const huggifs = await fetch('https://some-random-api.ml/animu/hug');
		const huggifsjson = await huggifs.json();
		const hugembed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} hugged ${user.username}`)
            .setImage(huggifsjson.link)
			.setColor("BLURPLE")
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(hugembed);
		return;
	}

    if (message.content.toLowerCase().startsWith(`${PREFIX}bonk`)) 
    {
        var whichbonk = Math.floor(Math.random() * 7);
        switch (whichbonk) {
            case 0:
                const bonk1embed = new Discord.MessageEmbed()
                    .setTitle('Bonk and Scout Wedding Photo')
                    .setURL('https://youtu.be/kuNixp-wvWM')
					.setColor("BLURPLE")
                    .setImage('https://cdn.discordapp.com/attachments/686015484281225241/722533493435007066/posterbonk.png')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(bonk1embed);
                break;
            case 1:
                const bonk2embed = new Discord.MessageEmbed()
                    .setTitle('Bonk and Scout going home after the wedding')
                    .setURL('https://youtu.be/kuNixp-wvWM')
					.setColor("BLURPLE")
                    .setImage('https://cdn.discordapp.com/attachments/735495269034098771/747478778254459089/posterbonk2.png')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(bonk2embed);
                break;
            case 2:
                const bonk3embed = new Discord.MessageEmbed()
                    .setTitle('Scout seeing Bonk for the first time')
                    .setURL('https://youtu.be/kuNixp-wvWM')
					.setColor("BLURPLE")
                    .setImage('https://cdn.discordapp.com/attachments/735495269034098771/747478781454712833/posterbonk3.png')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(bonk3embed);
                break;
            case 3:
                const bonk4embed = new Discord.MessageEmbed()
                    .setTitle('Scout and Bonk laughing at Sniper')
                    .setURL('https://youtu.be/kuNixp-wvWM')
					.setColor("BLURPLE")
                    .setImage('https://cdn.discordapp.com/attachments/735495269034098771/747478775633018970/posterbonk4.png')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(bonk4embed);
                break;
			case 4:
                const bonk5embed = new Discord.MessageEmbed()
                    .setTitle('Bonk defending her newbord child')
                    .setURL('https://youtu.be/kuNixp-wvWM')
					.setColor("BLURPLE")
                    .setImage('https://cdn.discordapp.com/attachments/735495269034098771/772525441897463828/posterbonkchild1.png')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(bonk5embed);
                break;
			case 5:
                const bonk6embed = new Discord.MessageEmbed()
                    .setTitle('Bonk stopping Scout from beating up the RED Scout')
                    .setURL('https://youtu.be/kuNixp-wvWM')
					.setColor("BLURPLE")
                    .setImage('https://cdn.discordapp.com/attachments/735495269034098771/772534170509377536/posterbonk699.png')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(bonk6embed);
                break;
			case 6:
                const bonk7embed = new Discord.MessageEmbed()
                    .setTitle('In terms of home, they have no home... for now.')
                    .setURL('https://youtu.be/kuNixp-wvWM')
					.setColor("BLURPLE")
                    .setImage('https://cdn.discordapp.com/attachments/735495269034098771/772537922758639626/posterbonkchild699.png')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(bonk7embed);
                break;
			case 7:
                const bonk8embed = new Discord.MessageEmbed()
                    .setTitle('READY FOR COMBAT')
                    .setURL('https://youtu.be/kuNixp-wvWM')
					.setColor("BLURPLE")
                    .setImage('https://cdn.discordapp.com/attachments/767285367497555979/772922867956056074/posterbonk7893458.png')
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(bonk8embed);
                break;
            default:
                message.channel.send('How did we get here?');
        }
        return
    }

});
