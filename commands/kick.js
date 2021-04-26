module.exports = {
    name: 'kick',
    description: "this command kicks a member!",
    execute(message, args){
        if(message.member.roles.cache.has('815784702740398102')){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id)
            memberTarger.kick();
            message.channel.send("User has been kicked");
        }
    }else{
        message.channel.send("You dont have the permission to kick people")
    }
    }
}