const Discord = require('discord.js');

module.exports = {
    name: 'kiss',
    description: 'Da un beso',
    aliases: ['kiss'],

    run: async (client, message, args) => {
        
        const list= [
            "https://c.tenor.com/lYKyQXGYvBkAAAAC/oreshura-kiss.gif",
            "https://c.tenor.com/hK8IUmweJWAAAAAC/kiss-me-%D0%BB%D1%8E%D0%B1%D0%BB%D1%8E.gif",
            "https://images-ext-1.discordapp.net/external/qrimyl4P8zBi2kVSo0cZ8yweGOMXf-bJht5zKYvI38s/https/c.tenor.com/Daj-Pn82PagAAAAC/gif-kiss.gif",
            "https://c.tenor.com/_srv-YHvrjUAAAAC/anime-kiss.gif",
        ];
        
        const rand = list[Math.random() * list.length | 0];
        let person = message.mentions.members.first() || client.users.cache.get(args[0]);

        if(!person) return message.channel.send(`:x: ${message.author} Menciona a alguien Primero!`);

        const embed = new Discord.MessageEmbed()
        .setTitle('**Kiss**')
        .setDescription(`${message.author} **Te le a dado un beso a ${person}**`)
        .setImage(rand)
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: 'png' }))

        message.channel.send({embeds: [embed]});
    }
}