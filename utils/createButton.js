const { MessageButton } = require('discord.js')

/**
 * XXX
 * @param {string} id
 * @param {Object} settings
 * @param {string} style
 * @returns {MessageButton} button
 */
const createButton = (id, settings, style) => {
  return new MessageButton()
    .setCustomId(id)
    .setLabel(settings.emoji)
    .setStyle(style)
}

module.exports = createButton