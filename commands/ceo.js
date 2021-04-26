
module.exports = {
    name: 'ceo',
    description: "this is a ceo logo command!",
    execute(message, args, Discord){
            const ceoE = new Discord.MessageEmbed()
            .setColor('#91ff80')
            .setTitle('TBNR Logo for Chief Executive Officer:-')
            .setImage('https://lh3.googleusercontent.com/H6aoUZgjdetzSfDeYvde41orv7owbrEUvQTBOMIjxJ2U9eJ2IkGxHFOBP3Xin2zRyhPI5PI=s85')
            .setFooter('-Made by Vivaan Patra TBNR CEO and Chairman')

            message.channel.send(ceoE)
    }
}