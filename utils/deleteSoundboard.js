/**
 * XXX
 * @param {Client} client
 * @param {Message} message
 */
const deleteSoundboard = (client, message) => {
  message.channel.messages.fetch(client.currentSoundboardId)
    .then(message => {
      message.edit({ components: [] })
      client.currentChannelId = null
      client.currentSoundboardId = null
      client.currentCategory = null
    })
    .catch(console.error)
}

module.exports = deleteSoundboard