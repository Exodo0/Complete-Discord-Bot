const client = require('../index');
const config = require ('../config.json');
const Prefix = config.Prefix;
const Discord = require('discord.js');

client.on('guildCreate', (guild) => {
    let channelToSendTo;

    guild.channels.cache.forEach((channel) => {
        if (channel.type ===  'text' && !channelToSendTo && channel.permissionsFor(guild.me).has('SEND_MESSAGES')) channelToSendTo = channel;
    });
    
    if (!channelToSendTo);

    const newGuildEmbed = new Discord.MessageEmbed()
    .setColor("AQUA")
    .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
    .setTitle(`Gracias por invitarme a tu Servidor: ${guild.name}`)
    .setDescription(`Usa ${Prefix}help | para ver los comandos disponibles.`)
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setTimestamp()
    .setFooter(client.user.username, client.user.displayAvatarURL());
    client.channels.cache.get("983226126702878803").send({embeds: [newGuildEmbed]})
})