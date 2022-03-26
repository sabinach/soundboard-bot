const { Collection } = require("discord.js")
const utilFile = require('./utilFile')

/**
 * XXX
 * @param {Client} client
 * @returns {Collection} commands
 */
const getCommands = (client) => {
  const commands = new Collection()
  const files = utilFile.readDir(client.commandsDir).filter(file => file.endsWith('.js'))
  files.forEach((file, i) => {
    commandName = file.split('.js')[0]
    command = require(`../${client.commandsDir}/${file}`)
    commands.set(commandName.toLowerCase(), command) // force all command names to lowercase
  })
  return commands
}

module.exports = getCommands