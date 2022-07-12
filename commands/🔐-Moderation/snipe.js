const Discord = require('discord.js');
const { Message } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'snipe',
    description: 'Snipea un mensaje eliminado :D',
    aliases: ['s'],

    run: async (client, message, args) => {
        if(!message.member.permissions.has("MANAGE_MESSAGES")) 
        return message.channel.send('No tienes permisos para usarlo. <:Bruh:995069248437223545>');
    
        const snipes = client.snipes.get(message.channel.id);
        if(!snipes) return message.reply("No hay mensajes eliminados en este canal");

        const snipe = +args[0] - 1 || 0;
        const target = snipes[snipe];
        if (!target) return message.reply(`Solo hay un determinado de: ${snipes.length} mensajes eliminados`);

        const { msg, time, image } = target;

        const sniper = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("📝>>Snipe")
        .setDescription(`📝Mensaje o Foto Eliminada: \n${msg.content}`)
        .setImage(image)
        .addField("Borrado por:", msg.author.tag, true)
        .setThumbnail(`${msg.author.displayAvatarURL()}`)
        .setFooter(`El ${moment(time).format('DD/MM/YYYY HH:mm:ss')}`);
        message.channel.send({embeds:[sniper]});
    }
}
