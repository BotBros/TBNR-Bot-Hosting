module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        if(message.member.roles.cache.has('813613746286755871')){
        message.channel.send('pong!');


        } else {
            message.channel.send("You don't have the permission to use this command")
        }
    }
}