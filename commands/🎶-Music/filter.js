module.exports = {
    name: 'filter',
    aliases: ['filters','filtros'],
    description: 'Activa los Filtros disponibles',
    inVoiceChannel: true,
    run: async (client, message, args) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`🛑 >> No hay nada en la lista ahora`)
      if (args[0] === 'off' && queue.filters?.length) queue.setFilter(false)
      else if (Object.keys(client.distube.filters).includes(args[0])) queue.setFilter(args[0])
      else if (args[0]) return message.channel.send(`🛑 >> No es un filtro valido`)
      message.channel.send(`Lista actual de Filtros: \`${queue.filters.join(', ') || 'Off'}\``)
    }
  }