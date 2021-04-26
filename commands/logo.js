module.exports = {
    name: 'logo',
    description: "this is a logo command!",
    execute(message, args, Discord){
        if(message.member.roles.cache.has('813613746286755871')){
            const logo = new Discord.MessageEmbed()
            .setColor('#91ff80')
            .setTitle('The Best Never Rest Logo:-')
            .setImage('https://lh3.googleusercontent.com/hFIfFFDVm5xDU5gk8xnCVHZ9DZD0gmALp9EM_cSersaGFvXtHl7CDCn2iqU05wX4_dtkIA=s85')
            .setFooter('-Made by Vivaan Patra TBNR CEO and Chairman')

            message.channel.send(logo)


        } else {
            message.channel.send("You don't have the permission to use this command")
        }
    }
}