const Discord = require ('discord.js')

module.exports = {
    name: 'avatar',
    description: 'Muestra tu avatar',
    aliases: ['avatar','av'],
    
    run: async (client, message, args) => {

        const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

        const avatar = user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 });

        const embed = new Discord.MessageEmbed()
        .setTitle(`Avatar de: ${user.username}`)
        .setColor("RANDOM")
        .setImage(avatar)
        .setFooter({ text: `Solicitado por: ${message.author.tag}`, icon_url: message.author.displayAvatarURL({ dynamic: true }) })
        .setTimestamp()
        message.channel.send({embeds: [embed]})
    }
}