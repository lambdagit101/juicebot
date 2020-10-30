/*
* This module of MilkBot handles custom status messages.
* MilkBot is designed to rotate its status every fifteen seconds (or 15000 ms.) This can be changed.
* All of these statuses can be changed as you see fit.
*/


const { client, PREFIX } = require('../index');
const intervalInMS = 15000; //Change this to whatever setting you desire: this controls how long it lasts before MilkBot picks the next status.

let index = 0;

setInterval(() => 
{

    const userCount = client.users.cache.size;
    const guildCount = client.guilds.cache.size;

    const statusMessages = 
    [
        { type: 'LISTENING', name: `the screams of my enemies | ${PREFIX}help`},
        { type: 'WATCHING', name: `2012 | ${PREFIX}help`},
        { type: 'LISTENING' name: `Caramelldansen | ${PREFIX}help`},
        { type: 'WATCHING', name: `Hentai | ${PREFIX}help`},
        { type: 'WATCHING', name: `${guildCount} Servers | ${PREFIX}help`},
        { type: 'LISTENING', name: `${userCount} Users | ${PREFIX}help`},
        { type: 'PLAYING', name: `Counter-Strike Global Offensive | ${PREFIX}help`},
        { type: 'WATCHING', name: `CS:GO Pro League | ${PREFIX}help`},
        { type: 'PLAYING', name: `Genshin Impact | ${PREFIX}help`},
        { type: 'WATCHING', name: `lambdaguy101 play Crispy Doom | ${PREFIX}help`},
        { type: 'PLAYING', name: `Geometry Dash | ${PREFIX}help`},
        { type: 'WATCHING', name: `Meme Compilations | ${PREFIX}help`},
        { type: 'LISTENING', name: `Necromantic by Stack | ${PREFIX}help`},
        { type: 'LISTENING', name: `Dancing Polish Cow at 4:00 | ${PREFIX}help`},
        { type: 'LISTENING', name: `https://youtu.be/RtTYQuO1j6w | ${PREFIX}help`},
        { type: 'WATCHING', name: `https://www.youtube.com/watch?v=dQw4w9WgXcQ | ${PREFIX}help`},
        { type: 'PLAYING', name: `AssaultCube | ${PREFIX}help`},
        { type: 'PLAYING', name: `the Matrix | ${PREFIX}help`}
        { type: 'PLAYING', name: `Among Us | ${PREFIX}help`}
    ]

    client.user.setActivity(statusMessages[index]);
    index += 1;
    if (index == statusMessages.length) index = 0;
}, intervalInMS);
