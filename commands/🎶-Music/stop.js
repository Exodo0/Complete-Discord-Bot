module.exports = {
    name: 'stop',
    aliases: ['disconnect', 'leave'],
    description: 'Desconecta el bot del voice channel',
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`🛑 >> No hay nada en la lista de espera`)
      queue.stop()
      message.channel.send(`💿 >> Cancion Detenida!`)
    }
  }