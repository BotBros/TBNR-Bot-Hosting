module.exports = {
    name: 'kill',
    description: "this command kills a member!",
    execute(message, args){
        if(message.member.roles.cache.has('813613746286755871')){
        const member = message.mentions.users.first();
        if(member){
            message.channel.send(`<@${member.user.id}> died lol`);
        }
    }else{
        message.channel.send("You dont have the permission to kill people")
    }
    }
}