module.exports = {
    name: 'chairman',
    description: "this is a chairman logo command!",
    execute(message, args, Discord){
            const chairmanE = new Discord.MessageEmbed()
            .setColor('#91ff80')
            .setTitle('TBNR Logo for Chairman:-')
            .setImage('https://lh3.googleusercontent.com/H6aoUZgjdetzSfDeYvde41orv7owbrEUvQTBOMIjxJ2U9eJ2IkGxHFOBP3Xin2zRyhPI5PI=s85')
            .setFooter('-Made by Vivaan Patra TBNR CEO and Chairman')

            message.channel.send(chairmanE)
    }
}