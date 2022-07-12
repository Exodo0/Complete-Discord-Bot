module.exports = {
    name: 'skip',
    description: "Salta la cancion actual",
    aliases: ['skip','s'],
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`🛑 >> No hay nada en la lista en este momento.!`)
      try {
        const song = await queue.skip()
        message.channel.send(`⏩ >> Cancion Saltada`)
      } catch (e) {
        message.channel.send({embeds: [new MessageEmbed().setColor("RED")
        .setTitle("Error")
        .setDescription(`🛑 >> Error: ${e}`)]})
      }
    }
  }