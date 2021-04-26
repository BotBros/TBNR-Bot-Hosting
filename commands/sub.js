module.exports = {
    name: 'sub',
    description: 'gives the subscriber role!',
    execute(message, args) {
        message.channel.send('Congrats, you are a subscriber now');
        message.member.roles.add("811826190548729866").catch(console.error);
        message.member.roles.add("813613746286755871").catch(console.error);
    }
}