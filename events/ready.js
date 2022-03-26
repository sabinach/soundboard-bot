const client = require('../index')

/**
 * XXX
 */
client.on('ready', () => {
  if (!client.user || !client.application) return;
  client.user.setActivity('with Sound Effects', { type: 'PLAYING' })

  client.guilds.cache.forEach((guild) => {
    const voiceChannels = guild.channels.cache.filter(channel => channel.type == 'GUILD_VOICE')
    const clientVCs = voiceChannels.forEach((channel) => {
      if(channel.members.has(client.user.id)){
        channel.members.get(client.user.id).voice.disconnect()
        console.log(`Disconnected inactive bot from voice channel in guild: ${channel.guild.id}`)
      }
    })
  })

  // TODO - update all guild names of configs on server join to ensure that config files are up-to-date, should only happen when the bot is turned off/on, which shouldn't be often (or maybe set a timer?)

  console.log(`${client.user.username} is online.`)
})
