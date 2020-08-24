const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Steal client from index.js
const fetch = require('node-fetch');
var sessions = new Array();
sessions.removeIf = function(callback) {
    var i = this.length;
    while (i--) {
        if (callback(this[i], i)) {
            this.splice(i, 1);
        }
    }
};
client.on('message', async (message) => {
    if (message.author.bot) return;
    //if (!message.guild) return;
    sessions.forEach(element => {
        if (element.channelId == message.channel.id && element.peer != null) {
            client.channels.cache.get(element.peer).send('**' + message.author.tag + '** said: ' + message.content.replace('@everyone', '(a)everyone').replace('@here', '(a)here'))
        }
    });
    if (message.content == `${PREFIX}phone`) {
        var exit = false;
        i = 0;
        sessions.forEach(element => {
            if (element.channelId == message.channel.id) {
                sessions.splice(i, 1);
                if(element.peer != null){
                    client.channels.cache.get(element.peer).send('Connection closed by the other side.');
                    sessions.removeIf(function callBack(item, indexer){return item.peer == message.channel.id;})
                }
                message.channel.send('Connection closed.');
                //stop session
                exit = true;
                return;
            }
            i++;
        });
        if(exit){return;}
        if (!(sessions.length % 2 == 0) && sessions.length != 0) {
            //start a session
            sessions[sessions.length - 1].peer = message.channel.id;
            newItem = new UserPhoneSession(message.channel.id);
            newItem.peer = sessions[sessions.length - 1].channelId;
            client.channels.cache.get(newItem.peer).send('Connection started. Say hello!');
            client.channels.cache.get(newItem.channelId).send('Connection started. Say hello!');
            sessions.push(newItem);
        }
        else if (sessions.length == 0 || sessions.length % 2) {
            // add a session
            message.channel.send('Waiting for a connection...');
            console.log("added session");
            newItem = new UserPhoneSession(message.channel.id);
            sessions.push(newItem);
        }
    }
    // breach of privacy
    /* this is a surprise tool that will help us later
    if (message.content == `${PREFIX}sessions`) {
        sessions.forEach(element => {
            message.channel.send("channelId: " + element.channelId + ", peer: " + element.peer)
        });
    }
    */
});
client.on("channelDelete", function(channel){
    i = 0;
    sessions.forEach(element => {
        if(element.channelId == channel.id){
            sessions.splice(i, 1);
            return;
        }
        i++;
    });
});
class UserPhoneSession {
    constructor(channelId) {
        this.channelId = channelId;
    }
    channelId = null;
    peer = null;
}
