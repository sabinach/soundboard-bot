const { MessageActionRow } = require('discord.js')
const createButton = require('./createButton')

// TODO - make emojis larger

/**
 * XXX
 * @param {Client} client
 * @returns {MessageActionRow[]} rows
 */
const createSoundboard = (client) => {
  const style = client.soundSettings['config']['button-style']
  const numPerRow = client.soundSettings['config']['num-per-row']
  const rows = []
  Object.entries(client.soundSettings.categories).forEach(([category, sounds]) => {
    if (category === client.currentCategory){
      Object.entries(sounds).forEach(([id, settings], i) => {
        if (i%numPerRow===0){
          rows.push(new MessageActionRow())
        }
        rows[rows.length-1].addComponents(createButton(id, settings, style))
      })
    }
  })
  return rows
}

module.exports = createSoundboard