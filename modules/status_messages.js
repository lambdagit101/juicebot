const client = require('../index').client;
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
        { type: 'WATCHING', name: `Osana | ${PREFIX}help`}
        //Does this last one work? I've commented it out as a safe feature.
        //{ type: 'PLAYING', name: `the Matrix | /help'}
    ]

    client.user.setActivity(statusMessages[index]);
    index += 1;
    if (index == statusMessages.length) index = 0;
}, intervalInMS);
