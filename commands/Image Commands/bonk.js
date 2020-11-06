const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
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
};

module.exports.help = {
    name: "bonk",
    description: "Not talking about an e-girl, talking about the tales of BLU Scout and Bonk.",
    aliases: []
};