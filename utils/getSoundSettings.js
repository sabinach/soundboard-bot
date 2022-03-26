const utilFile = require('./utilFile')

// TODO - check that no files are named the same (so that ~play works)

/**
 * XXX
 * @param {Client} client
 * @param {Object} soundSettings
 */
const checkSoundExists = (client, soundSettings) => {
  Object.entries(soundSettings.categories).forEach(([category, sounds]) => {
    Object.keys(sounds).forEach((id) => {
      const filepath = `${client.soundDir}/${category}/${id}.mp3`
      if(!utilFile.isExist(filepath)){
        console.warn(`${filepath} does not exist.`)
      }
    })
  })
}

/**
 * XXX
 * @param {Client} client
 * @returns {Object} soundSettings
 */
const getSoundSettings = (client) => {
  const soundSettings = utilFile.readYaml(client.soundSettingsFilepath)
  checkSoundExists(client, soundSettings)
  return soundSettings
}

module.exports = getSoundSettings