const utilFile = require('./utilFile')

/**
 * XXX
 * @param {Client} client
 * @param {Guild} guild
 */
const createConfigFile = (client, guild) => {
  const data = utilFile.readYaml(`${client.configDir}/template.yml`)
  data.guildName = guild.name
  utilFile.writeYaml(`${client.configDir}/${guild.id}.yml`, data)
}

/**
 * XXX
 * @param {Client} client
 * @param {Guild} guild
 */
const deleteConfigFile = (client, guild) =>
  utilFile.deleteFile(`${client.configDir}/${guild.id}.yml`)

/**
 * XXX
 * @param {Client} client
 * @param {Guild} guild
 * @param {string} guildName
 */
const updateGuildName = (client, guild, guildName) => {
  const filepath = `${client.configDir}/${guild.id}.yml`
  const data = utilFile.readYaml(filepath)
  data.guildName = guildName
  utilFile.writeYaml(filepath, data)
}

/**
 * XXX
 * @param {Client} client
 * @param {Guild} guild
 * @param {integer} roleId
 */
const addRoleId = (client, guild, roleId) => {
  const filepath = `${client.configDir}/${guild.id}.yml`
  const data = utilFile.readYaml(filepath)
  data.roleIds.push(roleId)
  utilFile.writeYaml(filepath, data)
}

/**
 * XXX
 * @param {Client} client
 * @param {Guild} guild
 * @param {integer} roleId
 */
const deleteRoleId = (client, guild, roleId) => {
  const filepath = `${client.configDir}/${guild.id}.yml`
  const data = utilFile.readYaml(filepath)
  const i = data.roleIds.indexOf(roleId)
  if (i > -1) data.roleIds.splice(i, 1) // 2nd parameter means remove one item only
  utilFile.writeYaml(filepath, data)
}

/**
 * XXX
 * @param {Client} client
 * @param {Guild} guild
 */
const clearRoleIds = (client, guild) => {
  const filepath = `${client.configDir}/${guild.id}.yml`
  const data = utilFile.readYaml(filepath)
  data.roleIds = []
  utilFile.writeYaml(filepath, data)
}

module.exports = {
  createConfigFile,
  deleteConfigFile,
  updateGuildName,
  addRoleId,
  deleteRoleId,
  clearRoleIds
}