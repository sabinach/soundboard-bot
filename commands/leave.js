const { getVoiceConnection } = require('@discordjs/voice')
const canUseBot = require('../utils/canUseBot')
const archiveThread = require('../utils/archiveThread')
const deleteSoundboard = require('../utils/deleteSoundboard')

/**
 * XXX
 * @param {Client} client
 * @param {Message} message
 * @param {string[]} args
 */
module.exports = {
  description: 'Leaves voice channel.',
  run: (client, message, args) => {
    if(!canUseBot(client, message, undefined, useBot=true)) return

    const connection = getVoiceConnection(message.guild.id)
    if(!connection) return message.channel.send('I am not in a voice channel.')
    connection.destroy()
  
    message.channel.send('Disconnected from voice channel.')
    archiveThread(client, message)
    deleteSoundboard(client, message)

    // TODO - leave after X amount of time inactivity
    // TODO - auto-leave if bot is ctrl-c'ed, maybe also timeout not pinged?

    // TODO - update current/guildId.yml settings (check all functions that use client.current*)
  }
}