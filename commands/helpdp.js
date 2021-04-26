module.exports = {
    name: 'helpdp',
    description: 'Gives you information about dps',

    execute(message, args, Discord) {
        const helpdp = new Discord.MessageEmbed()
        .setColor('#91ff80')
        .setTitle('Help for DPs') 
        .addFields(
            {name: '^logo', value: 'Sends you an attachment of TBNR logo'},
            {name: '^chairman', value: 'Sends you an attachment for tbnr logo for chairman'},
            {name: '^ceo', value: 'Sends you an attachment for tbnr logo of CEO'},
            {name: '^cofounder', value: 'Sends you an attachment for tbnr logo for Co-Founder'},
            {name: '^crafter', value: 'Sends you an attachment for tbnr logo of Crafter King'},
            {name: '^gamer', value: 'Sends you an attachment for tbnr logo of Gamer King'}
        )

        message.channel.send(helpdp)
    }
}