module.exports = {
    name: 'queue',
    description: "Muestra la lista de canciones en lista",
    aliases: ['q'],
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`🛑 >> No hay nada en la lista para reproducir`)
      const q = queue.songs
        .map((song, i) => `${i === 0 ? 'Reproduciendo:' : `${i}.`} ${song.name} - \`${song.formattedDuration}\``)
        .join('\n')
      message.channel.send(`💿 >> **Lista del servidor**\n${q}`)
    }
  }