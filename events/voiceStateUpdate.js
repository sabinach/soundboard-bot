const client = require('../index')

// TODO IDK WHAT THIS DOES

client.on('voiceStateUpdate', (oldState, newState) => {
  // if nobody left the channel in question, return.
  if (oldState.channelID !==  oldState.guild.me.voice.channelID || newState.channel)
    return

  // otherwise, check how many people are in the channel now
  if (!oldState.channel.members.size - 1){
    setTimeout(() => { // if 1 (you), wait five minutes
      if (!oldState.channel.members.size - 1) // if there's still 1 member, 
        oldState.channel.leave() // leave
        console.log('Left voice channel.') 
     }, 300000) // (5 min in ms)
  }
})