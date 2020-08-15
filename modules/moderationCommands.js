//I went ahead and split off the moderation section into its own separate module.

//Kicking a member
if (message.content.toLowerCase().startsWith(`${PREFIX}kick`)) {
    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.member(user);
        if (member) {
        member.kick('Kick was requested')
            .then(() => {
                const kickembed = new MessageEmbed()
                    .setTitle('Moderation')
                    .setColor(0xff0000)
                    .setDescription(`${user.tag} was successfully kicked!`);
                message.channel.send(kickembed);
            })
            
            .catch(err => {
                const cantkickembed = new MessageEmbed()
                    .setTitle('Moderation')
                    .setColor(0xff0000)
                    .setDescription("Couldn't kick the user");
                message.channel.send(cantkickembed);
                console.error(err);
            });
            
        } 
        
        //You can't kick someone who isn't in the server!
        else {
            const nomemembed = new MessageEmbed()
            .setTitle('Moderation')
                .setColor(0xff0000)
                .setDescription('This user is not in this server');
            message.channel.send(nomemembed);
        }
    } 
    
    //You have to specify someone!
    else {
        const nopersembed = new MessageEmbed()
            .setTitle('Moderation')
            .setColor(0xff0000)
            .setDescription('No person was specified!');
        message.channel.send(nopersembed);
    }
}
	
//Banning a member.  
if (message.content.toLowerCase().startsWith(`${PREFIX}ban`)) {
    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.member(user);
        if (member) {
            member
                .ban({
                    reason: 'Ban was requested',
                })
               
            .then(() => {
                const banembed = new MessageEmbed()
                    .setTitle('Moderation')
                    .setColor(0xff0000)
                    .setDescription(`${user.tag} was successfully banned!`);
                message.channel.send(banembed);
            })
            
            .catch(err => {
                const cantbanembed = new MessageEmbed()
                    .setTitle('Moderation')
                    .setColor(0xff0000)
                    .setDescription("Couldn't ban the user");
                message.channel.send(cantbanembed);
                if (err) console.error(err);
            });
            
        } 
        
        //You can't ban someone who isn't in the server.
        else {
            const nobanembed = new MessageEmbed()
                .setTitle('Moderation')
                .setColor(0xff0000)
                .setDescription("This user is not in this server");
			message.channel.send(nobanembed);
		}
	}
}
