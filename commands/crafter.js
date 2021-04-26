module.exports = {
    name: 'crafter',
    description: "this is a crafter king logo command!",
    execute(message, args, Discord){
            const crafterE = new Discord.MessageEmbed()
            .setColor('#91ff80')
            .setTitle('TBNR Logo for Crafter King:-')
            .setImage('https://lh3.googleusercontent.com/krxXc3iTVRGu7fVRZtye7TuScW3RQuIUwi1sbAATCYZ32243Lr2QbC1DvppFDKSNlDyLhA=s85')
            .setFooter('-Made by Vivaan Patra TBNR CEO and Chairman')

            message.channel.send(crafterE)
    }
}