const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
    name: 'server-info',
    description: 'Revisa la informacion del Servidor.',
    aliases: ['serverinfo', 'server-info', 'server-info'],

    run: async (client, message, args) => {
        
        const owner = message.guild.fetchOwner()
        const createsv = message.guild.createdAt

        const info = new Discord.MessageEmbed()
        .setTitle(`Informacion del servidor`)
        .setColor("RANDOM")
        .addFields(
            { name: 'Nombre del servidor:', value: `${message.guild.name}`, inline: true },
            { name: 'ID del servidor:', value: `${message.guild.id}`, inline: true },
            { name: 'Creado el:', value: `${createsv}`, inline: true },
            { name: 'Dueño del servidor:', value: `${await message.guild.fetchOwner()}`, inline: true },
            { name: 'Miembros:', value: `${message.guild.memberCount}`, inline: true },
            { name: 'Roles:', value: `${message.guild.roles.cache.size}`, inline: true },
            { name: 'Canales:', value: `${message.guild.channels.cache.size}`, inline: true },
            { name: 'Region:', value: `${message.guild.preferredLocale}`, inline: true },
            )
        .setThumbnail(message.guild.iconURL())
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp();
        message.channel.send({embeds: [info]})

    }
}