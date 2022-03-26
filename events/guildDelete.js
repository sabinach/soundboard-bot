const client = require('../index')
const utilConfig = require('../utils/utilConfig')

/**
 * XXX
 * @param {Guild} guild
 */
client.on('guildDelete', (guild) => {
  console.log(`Left guild: ${guild.name}, ${guild.id}`)
  utilConfig.deleteConfigFile(client, guild)

  // TODO - create empty current/guildId.yml file
})