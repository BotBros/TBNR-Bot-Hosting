module.exports = {
    name: 'youtube',
    description: "this is a youtube command",
    execute(message, args){
        if(message.member.roles.cache.has('813613746286755871')){
        message.channel.send('https://www.youtube.com/channel/UCC2pfdcQBqVCtyE9RTuqyZQ/featured');


        } else {
            message.channel.send("You don't have the permission to use this command")
        }
    }
}