const getThread = require('./getThread')
const playSound = require('../buttons/playSound')

/**
 * XXX
 * @param {Client} client
 * @param {Interaction} interaction
 */
const onButtonSelect = (client, interaction) => {
  const id = interaction.customId
  const sounds = Object.keys(client.soundSettings.categories[client.currentCategory])
  if (sounds.includes(id)){
    const userDisplayName = client.users.cache.get(interaction.member.user.id).username 
    const buttonEmoji = client.soundSettings.categories[client.currentCategory][id].emoji
    const buttonLabel = `**${id}**`
    const content = `${userDisplayName} pressed ${buttonEmoji==id ? '' : buttonEmoji + ' '}${buttonLabel}.`
    const thread = getThread(client, interaction)
    thread.send({ content })
    playSound(client, interaction, id)
    interaction.deferUpdate()
  }else{
    interaction.reply({ content: 'No button exists. How did you even get here..' })
  }
}

module.exports = onButtonSelect