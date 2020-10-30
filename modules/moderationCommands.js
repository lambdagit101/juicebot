/*
* This file deals with the moderation work that MilkBot can perform: kick/ban/unban/mute/unmute users, etc.
* All of these commands work on a try/catch/else basis so that exceptions can be caught!
* The individual commands will also perform permissions checks on a per-command basis, to prevent any non-moderator from using unauthorized permissions.
*/

const Discord = require('discord.js'); //import the Discord client...
const { client, PREFIX } = require('../index'); //...and import the prefix

client.on('message', async (message) => 
{
    if (!message.guild) return;
    if (message.author.bot) return;
	if (!message.content.startsWith(PREFIX)) return;
	
	/*
	* Command: Kick
	* Will remove a member from the server (who can later rejoin)
	* Parameters:
	*  - kickTarget = the member to kick
	*  - message.member = the invoker
	*/
	
   try
   {
	
	try
	{
		if message.content.toLowerCase().startsWith(`${PREFIX}kick`))
		{
			//The first user specified is the target for the kick.
			const kickTarget = message.mentions.users.first();
			
			if (kickTarget)
			{
				//If the target exists and the attempted kicker is allowed to kick members, we can go ahead with the command.
				if (message.member.permissions.has('KICK_MEMBERS'))
				{
					//We split the arguments and the reason why the member should be kicked, then continue.
					const args = message.content.slice(PREFIX.length).trim().split(' ');
					const kickReason = message.content.split(args[1] + " ")[1];
					
					//Once we have the reason, just kick the member and log the action...
					kickTarget.kick(`Kicked by ${message.author.tag}. Reason: ${kickReason}`).then(() =>
					{
						//DM the user with one of the kick messages.
						const kickEmbedUser = new Discord.MessageEmbed()
						.setTitle('Moderation')
						.setDescription(`{$message.author.tag} kicked you from ${message.guild.name} because of: ${kickReason}`)
						.setFooter(`${message.author.username}`, message.author.avatarURL());
						kickTarget.send(kickEmbedUser);
						
						//Echo the kick to the channel.
						const kickEmbedChannel = new Discord.MessageEmbed()
						.setTitle('Moderation')
						.setDescription(`${kickTarget.tag} was kicked for reason: ${kickReason}`)
						.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
						message.channel.send(kickEmbedChannel);
					}
					
					//Something went wrong. Let the user know this and log the error.
					}).catch (err =>
					{
						const kickFailed = new Discord.MessageEmbed()
						.setTitle('Moderation')
						.setDescription(`Error: Couldn't kick the user specified`)
						.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
						message.channel.send(kickFailed);
					}
				}
				
				//No permission! End it here.
				else
				{
					const noKickPermission = new Discord.MessageEmbed()
                        		.setTitle('Moderation')
					.setDescription(`Error: No permission to kick the specified user`)
					.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
					message.channel.send(noKickPermission);
				}
			}
			
			//No target was specified or the target wasn't in the server. That's unfortunate: since we can't do anything else, end it here.
			else 
			{
				const noUserExists = new Discord.MessageEmbed()
				.setTitle('Moderation')
				.setDescription(`Error: The user you are trying to kick isn't in the server or wasn't specified`)
				.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
				message.channel.send(noUserExists);
			}
		}
	}
	
	/*
	* Command: Warn
	* This is a prototype command.
	* Once invoked, it will send the warn target a DM to the user who has been warned and echo it to the channel.
	*/
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}warn`))
	{
		//Let the target be the user first mentioned.
		const warnTarget = message.mentions.users.first()
		
		if (warnTarget)
		{
			//Gotta check permissions first.
			if (message.member.permissions.has('KICK_MEMBERS') || message.member.permissions.has('BAN_MEMBERS'))
			{
				const args = message.content.slice(PREFIX.length).trim().split(' ');
				const warnReason = message.content.split(args[1] + " ")[1];
				
				const warnUserMessage = new Discord.MessageEmbed()
				.setTitle('Moderation')
				.setDescription(`You were warned in ${message.guild.name} for reason: ${warnReason}`)
				.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
				warnTarget.send(warnUserMessage);
				
				const warnUserChannelMessage = new Discord.MessageEmbed()
				.setTitle('Moderation')
				.setDescription(`${warnTarget.tag} was warned for reason: ${warnReason}`)
				.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
				message.channel.send(warnUserChannelMessage);
			}
		}
		
			//No permission.
			else
			{
				const noWarnPermission = new Discord.MessageEmbed()
				.setTitle('Moderation')
				.setDescription(`Error: No permission to warn user`)
				.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
				message.channel.send(noWarnPermission);
			}
		
		//You didn't specify anyone to warn!
		else
		{
			const noUserSpecified = new Discord.MessageEmbed()
			.setTitle('Moderation')
			.setDescription(`Error: No user specified`)
			.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
			message.channel.send(noUserSpecified);
		}
		
		
	/*
	* Command: Ban
	* This one's pretty self explanatory...
	* Once invoked, it will smack the targeted user with a banhammer.
	*/
		
	if (message.content.toLowerCase().startsWith(`${PREFIX}ban`))
	{
		const banTarget = message.mentions.users.first();
		
		//The target is specified, so we can continue.
		if (banTarget)
		{
			//Permissions check. We don't want non-mods going crazy.
			if (message.member.permissions.has('BAN_MEMBERS'))
			{
				const args = message.content.slice(PREFIX.length).trim().split(' ');
				const banReason = message.content.split(args[1] + " ")[1];
				
				//Ban the target and issue a message to them and the channel.
				banTarget.ban(`${message.author.tag} banned ${banTarget.tag} for reason: ${banReason}`)
				.then(() => 
				{
					const userBanNotice = new Discord.MessageEmbed()
					.setTitle('Moderation')
					.setDescription(`You were banned from ${message.guild.name} by ${message.author.tag}\n for: {$banReason}`)
					.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
					banTarget.send(userBanNotice);
					
					const channelBanNotice = new Discord.MessageEmbed()
					.setTitle('Moderation')
					.setDescription(`${banTarget.tag} was successfully banned by ${message.author.tag} for: {$banReason}`)
					.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
					message.channel.send(channelBanNotice);
				}
			}
			
			//No permissions - none shall pass! Abort.
			else
			{
				const noPermsForBan = new Discord.MessageEmbed()
				.setTitle('Moderation')
				.setDescription(`Error: No permissions to ban members`)
				.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
				message.channel.send(noPermsForBan);
			}
		}
		
		//No one was specified. Abort.
		else
		{
			const noBanTargetSpecified = new Discord.MessageEmbed()
			.setTitle('Moderation')
			.setDescription(`Error: Unable to ban - no target specified or target isn't in this server`)
			.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
			message.channel.send(noBanTargetSpecified);
		}
	}
		
	if (message.content.toLowerCase().startsWith(`${PREFIX}purge`))
	{
		if (message.member.permissions.has('MANAGE_MESSAGES'))
		{
			const args = message.content.split(' ');
			let deleteCount = 0;
			
			if (!deleteCount || deleteCount < 2 || deleteCount > 100)
			{
				const numberBetweenMessage = new Discord.MessageEmbed()
				.setTitle('Moderation')
				.setDescription(`Please provide a number between 2 and 100!`)
				.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
				message.channel.send(numberBetweenMessage)
			}
			
			const fetchedMsgs = await message.channel.messages.fetch(
			{
			limit = deleteCount, 
			});
			
			message.channel.bulkDelete(fetchedMsgs).catch(error => message.channel.send(`Could not delete messages due to: ${error}`));
			
			try
			{
				deleteCount = parseInt(args [1], 10);
			}
			
			catch (err)
			{
				const noPurgeNumber = new Discord.MessageEmbed()
				.setTitle('Moderation')
				.setDescription(`Please provide the number of messages you would like to purge from the channel.`)
				.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
				message.channel.send(noPurgeNumber);
			}
		}
		
		else
		{
			const noPurgePerms = new Discord.MessageEmbed()
			.setTitle('Moderation')
			.setDescription(`Error: No permissions to purge messages.`)
			.setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
			message.channel.send(noPurgePerms);
		}
	}

        //Muting a member.
        if (message.content.toLowerCase().startsWith(`${PREFIX}mute`)) 
	{
            //The member needs to be specified.
            const muteTarget = message.mentions.user.first();
            
	    if (muteTarget) 
	    {
                //If the member being muted is the one mentioned, mute them.
                    muteTarget.mute({ reason: 'Mute requested' })
                        .then(() => 
			{
                            //Create a new message to show that the mute was successful.
                            const mutedMessage = new Discord.MessageEmbed()
                            .setTitle('Moderation')
                            .setColor('0xff0000')
                            .setDescription(`${user.tag} was muted successfully.`)
                            .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                            message.channel.send(mutedMessage);
                        })

                        //Something went wrong.
                        .catch(err => 
			{
                        const muteFailedEmbed = new Discord.MessageEmbed()
                        .setTitle('Moderation')
                        .setColor('0xff0000')
                        .setDescription("Couldn't mute the user.")
                        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
                        message.channel.send(muteFailedEmbed);
                        if (err) console.error(err);
                        });
                }
            }
        }
    } 
	catch (e) 
	{
        // Send a message if an error has occurred
        console.log(`Uh-oh, something went wrong. Error message: \`\`\`js\n${e}\n\`\`\`\nIf this keeps happening, please contact the owner of this bot or make a new issue on github using /github`);
    	}
	
	//leaving this in here for debugging purposes
	finally
	{
		console.log("If you can see this message, everything is working normally.");
	}
});


