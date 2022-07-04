const Discord = require('discord.js');

module.exports = {
    name: 'hug',
    description: 'Da un abrazo',
    aliases: ['hug'],

    run: async (client, message, args) => {
        const list= [
            'https://i.pinimg.com/originals/bb/84/1f/bb841fad2c0e549c38d8ae15f4ef1209.gif',
            'https://c.tenor.com/FYKsVaNI7lkAAAAC/anime-hug.gif',
            "https://c.tenor.com/bsMvxQQCrCkAAAAC/hug-anime.gif",
            "https://acegif.com/wp-content/gif/anime-hug-38.gif",
        ];
        
        const rand = list[Math.random() * list.length | 0];
        let person = message.mentions.members.first() || client.users.cache.get(args[0]);

        if(!person) return message.channel.send(`:x: | ${message.author} Menciona a alguien Primero!`);

        const embed = new Discord.MessageEmbed()
        .setTitle('**Hug**')
        .setDescription(`${message.author} **Le dio un abrazo a ${person}**`)
        .setImage(rand)
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: 'png' }))

        message.channel.send({embeds: [embed]});
    }
}