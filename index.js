const { Client, Intents, Collection } = require("discord.js")
const dotenv = require('dotenv')
dotenv.config()

console.log('Bot is starting...')

const client = new Client({
  partials: [
    'MESSAGE', 
    'CHANNEL', 
    'REACTION'
  ],
  intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_MEMBERS, 
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_VOICE_STATES
  ] 
})
client.configDir = './config'
client.commandsDir = './commands'
client.soundDir = './sounds'
client.soundSettingsFilepath = './sounds/settings.yml'
client.commands = require('./utils/getCommands')(client)
client.soundSettings = require('./utils/getSoundSettings')(client)

// TODO - these are shared across ALL instances, need to be moved to guild-specific!

client.currentGuildId = null      // TODO - unused, what if multiple guilds running, will values get overwritten? yes
client.currentChannelId = null    // onJoin.js (set id), deleteSoundboard.js (nulled)
client.currentSoundboardId = null // onJoin.js (set id), deleteSoundboard.js (nulled)
client.currentThreadId = null     // createThread.js (set id), lockThread.js (nulled)
client.currentCategory = null     // onButtonSelect.js (set id), deleteSoundboard.js (nulled)

module.exports = client

require("./events/ready")
require("./events/messageCreate")
require("./events/interactionCreate")
require("./events/guildCreate")
require("./events/guildDelete")
require("./events/voiceStateUpdate")

client.login(process.env.TOKEN)