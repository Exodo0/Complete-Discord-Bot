module.exports = {
    name: 'play',
    aliases: ['play','p'],
    inVoiceChannel: true,
    run: async (client, message, args) => {
      const string = args.join(' ')
      if (!string) return message.channel.send(`🛑 >> Falta un parametro para reproducir \n Prueba con un nombre de la cancion o un link`)
      client.distube.play(message.member.voice.channel, string, {
        member: message.member,
        textChannel: message.channel,
        message
      })
    }
  }
