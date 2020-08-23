const { client, PREFIX } = require('../index');
const intervalInMS = 15000;

let index = 0;

setInterval(() => {

    const userCount = client.users.cache.size;
    const guildCount = client.guilds.cache.size;

    const statusMessages = [
        { type: 'WATCHING', name: `Hentai | ${PREFIX}help`},
        { type: 'WATCHING', name: `${guildCount} Servers | ${PREFIX}help`},
        { type: 'LISTENING', name: `${userCount} Users | ${PREFIX}help`},
        { type: 'WATCHING', name: `You | ${PREFIX}help`},
        { type: 'WATCHING', name: `and waiting | ${PREFIX}help`},
        { type: 'WATCHING', name: `Osana | ${PREFIX}help`},
        { type: 'STREAMING', name: `Hentai | ${PREFIX}help`}, 
        { type: 'STREAMING', name: `I was born with glass bones and paper skin | ${PREFIX}help`},
        { type: 'PLAYING', name: `2020 Survival Simulator | ${PREFIX}help`},
        
        
    ]

    client.user.setActivity(statusMessages[index]);
    index += 1;
    if (index == statusMessages.length) index = 0;
}, intervalInMS);
