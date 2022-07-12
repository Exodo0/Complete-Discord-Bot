const warnSchema = require('../../models/warnSchema')
const Discord = require('discord.js')
const { Permissions } = require('discord.js');
const mongoose = require('mongoose')

module.exports = {
    name: 'warn',
    description: 'Warnea a un usuario',
    aliases: ['warn','wn'],
    run: async (client, message, args) => {
        const mentionedUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if (!message.member.permissions.has("KICK_MEMBERS", "BAN_MEMBERS")) {
            const warnError = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Error")
            .setDescription("No tienes permisos para usar este comando")
            return message.channel.send({embeds: [warnError]})
        } else if (!mentionedUser){
            const warnError2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Error")
            .setDescription("Debes mencionar a un usuario")
            return message.channel.send({embeds: [warnError2]})
        }
        const mentionedPosition = mentionedUser.roles.highest.position
        const memberPosition = message.member.roles.highest.position

        if(memberPosition <= mentionedPosition){
            const warnError3 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Error")
            .setDescription("No puedes warnea a un usuario con una posición mayor o igual a ti")
            return message.channel.send({embeds: [warnError3]})
        }

        const reason = args.slice(1).join(' ') || "Sin razón especificada";

        let warnDoc = await warnSchema.findOne({
            guildID: message.guild.id,
            memberID: mentionedUser.id
        })
        .catch(err => console.log(err));
        
        if(!warnDoc){
            warnDoc = new warnSchema({
                guildID: message.guild.id,
                memberID: mentionedUser.id,
                warnings: [reason],
                moderator: [message.author.id],
                date: [Date.now()]
            });
            
            await warnDoc.save().catch(err => console.log(err));
            return message.channel.send(`${mentionedUser} : **ha sido warneado**`)
        } else {
            if (warnDoc.warnings.length >= 5){
                const warnCheck = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("Checker")
                .setDescription("El usuario ya ha sido warneado 3 veces\n Considera usar el comando: **kick** o **ban**")
                return message.channel.send({embeds: [warnCheck]})
            }

            warnDoc.warnings.push(reason);
            warnDoc.moderator.push(message.member.id);
            warnDoc.date.push(Date.now());
      
            await warnDoc.save().catch((err) => console.log(err));

           const warnEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Warn")
            .setDescription(`${mentionedUser} : **ha sido warneado** por ${message.author} con la razón: ${reason}`)

            return message.channel.send({embeds: [warnEmbed]})

        }
    }
}