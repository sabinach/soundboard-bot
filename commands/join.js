const { joinVoiceChannel } = require('@discordjs/voice')
const canUseBot = require('../utils/canUseBot')
const onJoin = require('../utils/onJoin')

/**
 * XXX
 * @param {Client} client
 * @param {Message} message
 * @param {string[]} args
 */
module.exports = {
  description: 'Joins voice channel and creates soundboard.',
  run: (client, message, args) => {
    if(!canUseBot(client, message, joinBot=true)) return

    joinVoiceChannel({
      channelId: message.member.voice.channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator
    })
  
    onJoin(client, message)

    // TODO - update current/guildId.yml settings (check all functions that use client.current*)
  }
}


