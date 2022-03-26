const client = require('../index')

/**
 * XXX
 * @param {Message} message
 */
client.on('messageCreate', (message) => {
  const prefix = client.soundSettings['config']['prefix']
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase() // pop first arg, force command input to lowercase
  if(client.commands.has(command)){
    client.commands.get(command).run(client, message, args)
  }else{
    message.channel.send('Command not found.') 
  }
})