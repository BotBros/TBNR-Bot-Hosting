module.exports = {
    name: 'cofounder',
    description: "this is a cofounder logo command!",
    execute(message, args, Discord){
            const cofunderE = new Discord.MessageEmbed()
            .setColor('#91ff80')
            .setTitle('TBNR Logo for Co-Founder:-')
            .setImage('https://lh3.googleusercontent.com/iG-NelPftTmI5N6_8RW2kHBxnjkBVAblhiPBD9y1rtJS1RuCpPVbfq32evHN6GjMGM4gZdM=s85')
            .setFooter('-Made by Vivaan Patra TBNR CEO and Chairman')

            message.channel.send(cofunderE)
    }
}