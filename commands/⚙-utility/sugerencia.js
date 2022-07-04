const Discord = require ('discord.js');
const db = require ('megadb');
const sug = new db.crearDB("CanalesSugerencias");

module.exports = {
    name: "sugerencia",
    description: "Envia una sugerencia.",
    aliases: ["sugerencia","sugerencias","sugerencias", "sg", "SG"],

    run: async (client, message, args) => {

        const channel = await sug.obtener(`${message.guild.id}`,`${message.channel.id}`);
        const CanalesSugerencias = client.channels.cache.get(channel);

        if (!sug.tiene(`${message.guild.id}`, `${message.channel.id}`)){
            const noConf = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(":x: Error de configuración")
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`${message.author}, No esta configurado el canal de sugerencias. \nPorfavor llama a un administrador para configurarlo.`)
            .setFooter(`${message.guild.me.displayName}`)
            .setTimestamp();
            message.channel.send({embeds: [noConf]});
            return;
        }

        const sugerencia = args.join (" ");
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(":x: Error faltan argumentos")
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`${message.author}, Debes escribir una sugerencia.`)
        .setFooter(`${message.guild.me.displayName}`)
        .setTimestamp();
        if (!sugerencia) return message.channel.send({embeds: [embed]});

        const embed2 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`:white_check_mark: Sugerencia enviada con éxito`)
        .setImage("https://cdn.discordapp.com/attachments/983226126702878803/993455436613304390/52O8.gif")
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`${message.author}, Su sugerencia ha sido enviada correctamente. Revisa el canal ${CanalesSugerencias}`)
        .setFooter(`${message.guild.me.displayName}`)
        .setTimestamp();
        message.channel.send({embeds: [embed2]});

        const sugeEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`:white_check_mark: Sugerencia Nueva. Estado: En espera`)
        .setDescription(`${sugerencia}`)
        .setImage("https://cdn.discordapp.com/attachments/983226126702878803/993455436613304390/52O8.gif")
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
        .setFooter("Todas las sugerencias son importantes para nosotros.")
        .setTimestamp();

        message.delete();

        CanalesSugerencias.send({embeds: [sugeEmbed]}).then(msg => {
            msg.react("👍");
            msg.react("👎");
        });
    }
}