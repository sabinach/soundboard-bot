/**
 * XXX
 * @param {Client} client
 * @param {Message} message
 */
const createThread = async (client, message) => {
  const thread = await message.channel.threads.create({
    name: client.soundSettings['config']['thread-name']
  })
  if (thread.joinable) await thread.join()
  client.currentThreadId = thread.id
}

module.exports = createThread