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
                    .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                message.channel.send(avatarembed);
        return;
	}
	
    if (message.content.toLowerCase().startsWith(`${PREFIX}evaxephon`) || message.content.toLowerCase().startsWith(`${PREFIX}evax`)) 
	{
        const evaembed = new Discord.MessageEmbed()
            .setTitle('I, EvaSex')
            .setImage('https://yandere-simulator.com/tampon.png')
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(evaembed);
        return;
    }
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}hug`)) {
		const user = message.mentions.users.first() || message.author;
		const huggifs = ['https://media.tenor.com/images/aab83bd3725feeaccb9929f8ca964db9/tenor.gif', 'https://media4.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif', 'https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif', 'https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif?itemid=7552075', 'https://i.imgur.com/r9aU2xv.gif?noredirect', 'https://acegif.com/wp-content/uploads/anime-hug.gif', 'https://25.media.tumblr.com/tumblr_ma7l17EWnk1rq65rlo1_500.gif'];
		const hugembed = new Discord.MessageEmbed()
            .setTitle(`<@${message.author.id}> hugged <@${user.id}>`)
            .setImage(huggifs[Math.floor(Math.random() * huggifs.length + 1)])
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(hugembed);
		return;
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}kiss`)) {
		const user = message.mentions.users.first() || message.author;
		const kissgifs = ['https://i.pinimg.com/originals/e3/4e/31/e34e31123f8f35d5c771a2d6a70bef52.gif', 'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865', 'https://i.pinimg.com/originals/e3/ad/1d/e3ad1d5e15e6679d2b6ed31d2cd0caf6.gif', 'https://i.pinimg.com/originals/04/7e/1b/047e1bef01702b9252ef3a528a2401ad.gif', 'https://25.media.tumblr.com/6a0377e5cab1c8695f8f115b756187a8/tumblr_msbc5kC6uD1s9g6xgo1_500.gif', 'https:', 'https://25.media.tumblr.com/tumblr_ma7l17EWnk1rq65rlo1_500.gif'];
		const kissembed = new Discord.MessageEmbed()
            .setTitle(`<@${message.author.id}> kissed <@${user.id}>`)
            .setImage(kissgifs[Math.floor(Math.random() * kissgifs.length + 1)])
            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(kissembed);
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
