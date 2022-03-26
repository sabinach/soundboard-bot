const client = require('../index')
const onButtonSelect = require('../utils/onButtonSelect')
const onMenuSelect = require('../utils/onMenuSelect')

/**
 * XXX
 * @param {Interaction} interaction
 */
client.on('interactionCreate', (interaction) => {
  if(interaction.isButton()){
    onButtonSelect(client, interaction)
  }else if(interaction.isSelectMenu()){
    onMenuSelect(client, interaction)
  }
})