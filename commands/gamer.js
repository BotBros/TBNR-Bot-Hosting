module.exports = {
    name: 'gamer',
    description: "this is a gamer king logo command!",
    execute(message, args, Discord){
            const gamerE = new Discord.MessageEmbed()
            .setColor('#91ff80')
            .setTitle('TBNR Logo for Gamer King:-')
            .setImage('https://lh3.googleusercontent.com/w7bzsfThbvXIGOKGDw3rv1Lo18K2xCvTzm3jMrhRwawRlFD-b440VMfjWInf0DJlGLRJeQ=s85')
            .setFooter('-Made by Vivaan Patra TBNR CEO and Chairman')

            message.channel.send(gamerE)
    }
}