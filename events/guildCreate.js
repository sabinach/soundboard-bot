const client = require('../index')
const utilConfig = require('../utils/utilConfig')

/**
 * XXX
 * @param {Guild} guild
 */
client.on('guildCreate', (guild) => {
  console.log(`Joined guild: ${guild.name}, ${guild.id}`)
  utilConfig.createConfigFile(client, guild)

  // TODO - create empty current/guildId.yml file
})