const Discord = require('discord.js')
const db = require ('megadb');
const sug = new db.crearDB("CanalesSugerencias");

module.exports = {
    name: 'setup-sugerencias',
    description: 'Configura el canal de sugerencias',
    aliases: ['setup-sugerencias','ss'],
    
    
    run: async (client, message, args) => {
        
        const perms =  message.member.permissions.has("ADMINISTRATOR");


        const noPerm = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(":x: Error de permisos")
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`${message.author}, No tienes permisos para ejecutar este comando. \n Necesitas tener permisos de: \n - Administrador`)
        .setFooter(`${message.guild.me.displayName}`)
        .setTimestamp();

        if  (!perms) return message.channel.send({embeds: [noPerm]});

        const channel = message.mentions.channels.first();
        
        const err= new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle(':x: Faltan argumentos')
        .setDescription(`${message.author}, Debes mencionar un canal de texto.`)
        .setFooter(`${message.guild.me.displayName}`)
        .setTimestamp();

        if (!channel) return message.channel.send({embeds: [err]});

        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setThumbnail(client.user.displayAvatarURL())
        .setImage("https://cdn.discordapp.com/attachments/983226126702878803/993450678049587321/GmUB.gif")
        .setTitle(`:white_check_mark: | El canal de sugerencias ha sido configurado correctamente.`)
        .setDescription(`Hola 👋 \n Ahora las Sugerencias seran mostradas en el canal  ${channel}`)
        .setFooter(`${message.guild.me.displayName}`)
        .setTimestamp();
        message.channel.send({embeds: [embed]});

        sug.establecer(message.guild.id, channel.id);

    }
}


