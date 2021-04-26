const figlet = require('figlet')

module.exports = {
    name: 'ascii',
    description: 'Converts text to ascii',

    execute(client, message, args) {
        if(message.member.roles.cache.has('813613746286755871')) {
            if(!args[0]) return message.channel.send('Please provide some text.')

        msg = args.join(" ")

        figlet.text(msg, function (err, data) {

            if(err) {
                console.log('Something went wrong');
                console.log(err)
            }

            if(data.length > 10000) return message.channel.send('Please provide a text shorten than 10000 characters')

            message.channel.send(`\`\`\`${data}\`\`\`\``)
        })
        }else{
            message.reply("You don't have the permission to use this command")
        }
    
    }
}