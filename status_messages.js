const { client } = require('./index.js');
const { prefix } = require('./config.json');
const intervalInMS = 15000;

let index = 0;

setInterval(() => {

    const userCount = client.users.cache.size;
    const guildCount = client.guilds.cache.size;

    const statusMessages = [
        
        { type: 'WATCHING', name: `Hentai | ${prefix}help`},
        { type: 'WATCHING', name: `${guildCount} Servers | ${prefix}help`},
        { type: 'LISTENING', name: `${userCount} Users | ${prefix}help`},
        { type: 'PLAYING', name: `Counter-Strike Global Offensive | ${prefix}help`},
        { type: 'WATCHING', name: `CS:GO Pro League | ${prefix}help`},
        { type: 'PLAYING', name: `Genshin Impact | ${prefix}help`},
        { type: 'WATCHING', name: `lambdaguy101 play Crispy Doom | ${prefix}help`},
        { type: 'PLAYING', name: `Geometry Dash | ${prefix}help`},
        { type: 'WATCHING', name: `Meme Compilations | ${prefix}help`},
        { type: 'LISTENING', name: `Necromantic by Stack | ${prefix}help`},
        { type: 'LISTENING', name: `Dancing Polish Cow at 4:00 | ${prefix}help`},
		{ type: 'PLAYING', name: `Minecraft | ${prefix}help`},
        { type: 'LISTENING', name: `https://youtu.be/RtTYQuO1j6w | ${prefix}help`}, //I couldn't resist the urge.
        { type: 'PLAYING', name: `AssaultCube | ${prefix}help`},
        // Does this last one work? I've commented it out as a safe feature.
        // { type: 'PLAYING', name: `the Matrix | /help'}
    ]

    client.user.setActivity(statusMessages[index]);
    index += 1;
    if (index == statusMessages.length) index = 0;
}, intervalInMS);
