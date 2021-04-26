const Discord = require('discord.js');

const client = new Discord.Client();
 
const prefix = '^';
 
const fs = require('fs');
const { get } = require('http');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('TBNR Bot is online!');
    client.user.setPresence({
        activity: {
            name: 'Over ^help',
            type: "WATCHING"
        },
        status: 'dnd'
    })
});
client.on('message', message =>{
    if(message.content === 'hi'){
        message.reply('hi dude')
    }
    if(message.content === 'bye'){
        message.reply('Bye Friend😢')
    }
})


client.on('guildMemberAdd', guildMember =>{
    guildMember.guild.channels.cache.get('780294762271342637').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules and help channel!`)
})


 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    };
    if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    };
    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    };
    if(command === 'sub'){
        client.commands.get('sub').execute(message, args);
    };
    if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    };
    if(command === 'ban'){
        client.commands.get('kick').execute(message, args);
    };
    if(command === 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    };
    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    };
    if(command === 'helpdp') {
        client.commands.get('helpdp').execute(message, args, Discord);
    };
    if(command === 'logo'){
        client.commands.get('logo').execute(message, args, Discord)
    };
    if(command === 'chairman') {
        client.commands.get('chairman').execute(message, args, Discord)
    };
    if(command === 'ceo') {
        client.commands.get('ceo').execute(message, args, Discord)
    };
    if(command === 'cofounder') {
        client.commands.get('cofounder').execute(message, args, Discord)
    };
    if(command === 'crafter') {
        client.commands.get('crafter').execute(message, args, Discord)
    };
    if(command === 'gamer') {
        client.commands.get('gamer').execute(message, args, Discord)
    };
    if(command === 'ascii') {
        client.commands.get('ascii').execute(client, message, args)
    };
    if(command === 'kill'){
        client.commmands.get('kill').execute(message, args)
    };
});
 
client.login('ODEzMjQyODU4ODYwNTc2NzY4.YDMdbg.blg7vUnxhJ_3h_d5tYmwa4H1S2Y');
 