const createSoundboard = require('./createSoundboard')

/**
 * XXX
 * @param {Client} client
 * @param {Interaction} interaction
 */
const onMenuSelect = (client, interaction) => {
  client.currentCategory = interaction.values[0]
  const customId = interaction.customId
  const menu = interaction.message.components[0]
  menu.components[0].options.forEach(option => {
    option.default = option.label===client.currentCategory
  })
  const soundboard = createSoundboard(client)
  const rows = [menu].concat(soundboard)
  interaction.update({ components: rows })
}

module.exports = onMenuSelect