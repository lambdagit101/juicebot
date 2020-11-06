module.exports.run = async (client, message, args) => {
    const msgCreated = message.createdTimestamp;

    message.channel.send("Pinging...")
        .then(m => {
            m.edit(`Took \`${m.createdTimestamp - msgCreated}ms\` to respond`);
        });
};

module.exports.help = {
    name: "heartbeat",
    description: "Checks the bot's response time.",
    aliases: ["ping"]
};