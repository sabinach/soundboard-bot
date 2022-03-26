/**
 * XXX
 * @param {Client} client
 * @param {Message} message
 * @param {string[]} args
 */
module.exports = {
  description: 'Lists available commands.',
  run: (client, message, args) => {
    message.channel.send("You wanted ~help. Good for you!")

    // TODO - add command list and general bot description/documentation
  }
}