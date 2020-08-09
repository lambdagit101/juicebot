const client = require('../index').client;
const intervalInMS = 15000;

let index = 0;

setInterval(function() {

    const userCount = client.users.cache.size;
    const guildCount = client.guilds.cache.size;

    const statusMessages = [
        { type: 'WATCHING', name: `Hentai | /help general`},
        { type: 'WATCHING', name: `${guildCount} Servers | /help general`},
        { type: 'LISTENING', name: `${userCount} Users | /help general`}
    ]

    client.user.setActivity(statusMessages[index]);
    index += 1;
    if (index == statusMessages.length) index = 0;
}, intervalInMS);
