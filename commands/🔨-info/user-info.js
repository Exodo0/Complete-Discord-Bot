const Discord = require ('discord.js');
const moment = require ('moment');

module.exports = {
    name: 'user-info',
    description: 'Revisa la informacion de los Usuarios.',
    aliases: ['userinfo', 'user-info', 'user-info'],

    run: async (client, message, args) => {

        const member = message.mentions.members.first() || message.member
        const user = message.mentions.users.first() || message.author

        const roles = member.roles.cache.map(role => role.toString()).join(', ')
        const createdAt = moment(user.createdAt).format('LLLL')
        const joinedAt = moment(member.joinedAt).format('LLLL')
        const avatar = user.displayAvatarURL({ dynamic: true })
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setThumbnail(avatar)
            .setAuthor(`Informacion de: ${user.tag}`, avatar)
            .addField('ID:', user.id, true)
            .addField('Nombre de Usuario:', user.username, true)
            .addField('Discriminador:', user.discriminator, true)
            .addField('Fecha de Creacion:', createdAt, true)
            .addField('Fecha de Ingreso:', joinedAt, true)
            .addField('Roles:', roles, true)
            .setTimestamp()
            .setFooter(`Solicitado por: ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.send({embeds: [embed]})
    }
}