module.exports = {
    name: 'play',
    aliases: ['play','p'],
    description: 'Reproduce una cancion con el Nombre o el link de la cancion',
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
