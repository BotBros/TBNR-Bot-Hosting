module.exports = {
    name: 'rules',
    description: 'this command tells the rules of the server',
    execute(message, args, Discord){
        const rules = new Discord.MessageEmbed()
        .setColor('#91ff80')
        .setTitle('RULES')
        .setDescription('Rules of the server')
        .addFields(
            {name: 'Rule 1', value: 'Treat everyone with respect. Absolutely no harassment, witch hunting, sexism, racism, or hate speech will be tolerated'},
            {name: 'Rule 2', value: 'No spam or self-promotion (server invites, advertisements, etc.) without permission from a staff member. This includes DMing fellow members.'},
            {name: 'Rule 3', value: "If you see something against the rules or something that makes you feel unsafe, let staff know. We want this server to be a welcoming space!"},
            {name: 'Rule 4', value: 'Inappropriate content or abusive content strictly not allowed.'},
            {name: 'Rule 5', value: 'Spamming is strictly not allowed'},
            {name: 'Conclusion', value: 'Anyone not following the rules will be kicked or banned or get muted based on the intensity of misbehavier'}
        )
        .setFooter('Make sure that you follow all the rules')

        message.channel.send(rules);
    }
}