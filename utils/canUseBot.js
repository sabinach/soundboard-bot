const utilFile = require('./utilFile')
const utilPerm = require('./utilPerm')
const getThread = require('./getThread')

/**
 * @param {Client} client
 * @param {Message} message
 * @param {boolean} joinBot
 * @param {boolean} useBot
 * @param {boolean}
 */
const canUseBot = (client, message, joinBot=false, useBot=false, playBot=false) => {
  const member = message.member
  const roleIds = utilFile.readYaml(`${client.configDir}/${member.guild.id}.yml`).roleIds
  if(roleIds===null || roleIds.filter(roleId => roleId !== null).length===0){
    message.channel.send('Please set bot permissions before using it. Type ~settings.')
    return false
  }else{
    if(utilPerm.hasRolePerm(member, roleIds)){
      if(utilPerm.isUserInVC(member)){
        if(joinBot && utilPerm.isBotInServerVC(client, message.guild)){
          message.channel.send('Bot is already in a voice channel.')
          return false
        }
        if (useBot && !utilPerm.inSameVC(client, message.member)){
          if(playBot){
            const interaction = message
            const thread = getThread(client, interaction)
            const userDisplayName = client.users.cache.get(interaction.member.user.id).username 
            const content = `[ERROR] ${userDisplayName} is not in the same voice channel as the bot.`
            thread.send({ content })
            return false
          }else{
            message.channel.send('You must be in the same voice channel as the bot to use it.')
            return false
          }
        }
        return true
      }else{
        message.channel.send('You must be in a voice channel to use this bot.')
        return false
      }
    }else{
      if (playBot){
        const interaction = message
        const thread = getThread(client, interaction)
        const userDisplayName = client.users.cache.get(interaction.member.user.id).username 
        const content = `[ERROR] ${userDisplayName} does not have the permissions to use this bot.`
        thread.send({ content })
      }else{
        message.channel.send('You do not have the permissions to use this bot.')
      }
      return false
    }
  }
}

module.exports = canUseBot