/**
 * XXX
 * @param {Client} client
 * @typedef {(Interaction|Message)} obj
 * @param {Thread} thread
 */
const getThread = (client, obj) => {
  let channel = obj.guild.channels.cache.get(client.currentChannelId) // assume interaction
  if (!channel) channel = obj.channel // assume message
  return channel.threads.cache.get(client.currentThreadId)
}

module.exports = getThread