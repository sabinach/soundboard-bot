const { getVoiceConnection, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice')
const canUseBot = require('../utils/canUseBot')
const getThread = require('../utils/getThread')
const fs = require('fs')

/**
 * XXX
 * @param {Client} client
 * @param {Interaction} interaction
 * @param {string} id
 */
module.exports = (client, interaction, id) => {
  if(!canUseBot(client, interaction, undefined, useBot=true, playBot=true)) return
    
  const connection = getVoiceConnection(interaction.guildId)
  if(!connection) return interaction.message.channel.send('I am not in a voice channel.')

  filepath = `${client.soundDir}/${client.currentCategory}/${id}.mp3`
  if(!fs.existsSync(filepath)){
    const buttonEmoji = client.soundSettings.categories[client.currentCategory][id].emoji
    const buttonLabel = `**${id}**`
    const content = `[ERROR] Audio for ${buttonEmoji==id ? '' : buttonEmoji + ' '}${buttonLabel} not found.`
    const thread = getThread(client, interaction)
    thread.send({ content })
  }else{
    const player = createAudioPlayer()
    const resource = createAudioResource(filepath)
    player.play(resource)
    //player.on(AudioPlayerStatus.Playing, () => { console.log(`Now playing: ${filepath}`) })
    //player.on('error', error => { console.error(`[ERROR] ${error}`) })
    connection.subscribe(player)
  }
}