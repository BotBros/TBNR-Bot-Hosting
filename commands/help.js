module.exports = {
    name: 'help',
    description: 'this command helps the server',
    execute(message, args, Discord){
        const help = new Discord.MessageEmbed()
        .setColor('#91ff80')
        .setTitle('Help')
        .setDescription('Commands of the bot')
        .addFields(
            {name: '^sub', value: 'Assigns and conforms a member as a subscriber'},
            {name: '^ping', value: 'Says pong in reply'},
            {name: '^youtube', value: 'Sends the youtube channel link of TBNR'},
            {name: '^help', value: 'Tells about different commands'},
            {name: '^kick', value: 'Kicks the mentioned member'},
            {name: '^ban', value: 'Bans the mentioned member'},
            {name: '^clear', value: 'Deletes the given amount of messages'},
            {name: '^rules', value: 'Tells the rules of the server'},
            {name: '^helpdp', value: 'Gives information about DPs'},
            {name: '^ascii (text)', value: 'Converts text to ascii.'}
        )
        .setFooter('Contact @Vivaan Patra incase of queries')

        message.channel.send(help);
    }
}