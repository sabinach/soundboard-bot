const getThread = require('./getThread')

/**
 * XXX
 * @param {Client} client
 * @param {Message} message
 */
const archiveThread = async (client, message) => {
  const thread = getThread(client, message)
  await thread.send({ content: `Archived thread.` })
  await thread.edit({ archived: true, locked: true })
  client.currentThreadId = null
}

module.exports = archiveThread