const Discord = require('discord.js');

module.exports = {
    name: '8ball',
    description: 'Da una respuesta a una pregunta',
    aliases: ['8ball'],
    run: async (client, message, args) => {

        if(!args[0]) return message.reply("Debes de poner una pregunta!");

        const replies = require ('../../Data/Replies8ball.json');

        const result = Math.floor(Math.random() * replies.length);
        const question = args.join(" ");

        const embed = new Discord.MessageEmbed()
        .setTitle('**8ball**')
        .setDescription(`El poder del Bot te responde:`)
        .addField(`Pregunta:`, question)
        .addField('Respuesta:', replies[result])
        .setColor('RANDOM')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
        .setTimestamp()
        .setFooter("Pregunta enviada por: " + message.author.tag);
        message.channel.send({embeds: [embed]})
    }
}