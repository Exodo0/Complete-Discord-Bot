const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'volume',
    aliases: ['v', 'set', 'set-volume'],
    description: 'Cambia el volumen del bot',
    inVoiceChannel: true,
    run: async (client, message, args) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`🛑 >> No hay nada en la lista en este momento.!`)
      const volume = parseInt(args[0])
      if (isNaN(volume)) return message.channel.send(`🛑 >> Ingresa un numero valido. Entre 0 y 100`)
      queue.setVolume(volume)
      message.channel.send({embeds: [new MessageEmbed()
        .setTitle('🔊 Volumen')
        .setDescription(`Volumen cambiado a ${volume}%`)
        .setColor("RANDOM")]})
    }
  }