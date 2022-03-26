const { MessageActionRow } = require('discord.js')
const createMenu = require('./createMenu')
const createThread = require('./createThread')

/**
 * XXX
 * @param {Client} client
 * @param {Message} message
 */
const onJoin = (client, message) => {
  const menu = new MessageActionRow().addComponents(createMenu(client))
  const rows = [ menu ]
  message.channel.send({ 
    content: 'Connected to voice channel.',
    components: rows
  })
  // Wait for first message to be posted before creating thread
  const filter = (m) => (m.content.includes(message.content) && m.author.id === client.user.id)
  const collector = message.channel.createMessageCollector(filter, { time: 10000 }) // time in milliseconds
  collector.on('collect', m => {
    client.currentChannelId = m.channel.id
    client.currentSoundboardId = m.id
    createThread(client, m)
    collector.stop()
  })
}

module.exports = onJoin