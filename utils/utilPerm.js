/**
 * XXX
 * @param {string} mention
 * @returns {boolean}
 */
const isRoleMention = (mention) =>
  mention.includes('<@&')

/**
 * XXX
 * @param {string} mention
 * @returns {boolean}
 */
const isUserMention = (mention) =>
  !isRoleMention(mention) && mention.includes('<@')

/**
 * XXX
 * @param {string} mention
 * @returns {string}
 */
const getMentionId = (mention) =>
  mention.replace(/\D/g,'')

/**
 * XXX
 * @param {Object} member
 * @param {string} roleId
 * @returns {boolean}
 */
const hasRoleId = (member, roleId) =>
  member.roles.cache.has(roleId)

/**
 * XXX
 * @param {Member} member
 * @param {string[]} roleIds
 * @returns {boolean}
 */
const hasRolePerm = (member, roleIds) =>
  roleIds.filter(roleId => member.roles.cache.has(roleId)).length > 0

/**
 * XXX
 * @param {Voice} voice
 * @returns {string} id
 */
const getVoiceId = (voice) => 
  voice.channel.id

/**
 * XXX
 * @param {Member} member
 * @returns {boolean}
 */
const isUserInVC = (member) =>
  member.voice.channel !== null

/**
 * XXX
 * @param {Client} client
 * @returns {boolean}
 */
const isBotInServerVC = (client, guild) =>
  guild.channels.cache.some((channel) => channel.type === 'GUILD_VOICE' && channel.members.has(client.user.id))

/**
 * XXX
 * @param {Client} client
 * @param {Member} member
 * @param {boolean} sameVC
 */
const inSameVC = (client, member) => {
  let sameVC = false
  client.guilds.cache.forEach((guild) => {
    const voiceChannels = guild.channels.cache.filter(channel => channel.type == 'GUILD_VOICE' && channel.members.has(client.user.id))
    voiceChannels.forEach((channel) => {
      if(channel.id === member.voice.channel.id){
        sameVC = true
      } 
    })
  })
  return sameVC
}

module.exports = {
  isRoleMention,
  isUserMention,
  getMentionId,
  hasRoleId,
  hasRolePerm,
  getVoiceId,
  isUserInVC,
  isBotInServerVC,
  inSameVC
}