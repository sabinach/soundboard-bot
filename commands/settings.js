/**
 * XXX
 * @param {Client} client
 * @param {Message} message
 * @param {string[]} args
 */
module.exports = {
  description: 'Triggers the settings configuration.',
  run: (client, message, args) => {
    // TODO check for settings
    // TODO create logic for adding settings
    message.channel.send("Settings to do.")

    // TODO - must be server owner (or moderator?) to be able to set settings
    // add role Ids
    // delete role Ids
    // view role Ids
    // clear role Ids
  }
}