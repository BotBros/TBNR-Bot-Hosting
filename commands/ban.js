module.exports = {
    name: 'ban',
    description: "this command bans a member!",
    execute(message, args){
        if(message.member.roles.cache.has('815784702740398102')){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id)
            memberTarger.ban();
            message.channel.send("User has been banned");
        }
    }else{
        message.channel.send("You dont have the permission to ban people")
    }
    }
}