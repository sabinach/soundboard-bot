const { MessageSelectMenu } = require('discord.js')

/**
 * XXX
 * @param {Client} client
 * @returns {MessageSelectMenu} menu
 */
const createMenu = (client) => {
  const options = Object.keys(client.soundSettings.categories)
  return new MessageSelectMenu()
    .setCustomId('select')
    .setPlaceholder('Select a sound category')
    .addOptions(options.map(option => {
      return {
        label: option,
        value: option
      }
    }))
}

module.exports = createMenu