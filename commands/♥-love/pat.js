const Discord = require('discord.js');

module.exports = {
    name: 'pat',
    description: 'Pat someone',
    aliaeses: ['pats','patted'],

    run: async (client, message, args) => {
        const list= [
            "https://cdn.discordapp.com/attachments/983226126388314182/993575983506530304/kanna-kamui-pat.gif",
            "https://cdn.discordapp.com/attachments/983226126388314182/993576002175369288/anime-pat.gif",
            "https://cdn.discordapp.com/attachments/983226126388314182/993576049755566201/anime-head-pat.gif",
            "https://cdn.discordapp.com/attachments/983226126388314182/993576049906548736/anime-pat_1.gif",
        ];
        
        const rand = list[Math.random() * list.length | 0];
        let person = message.mentions.members.first() || client.users.cache.get(args[0]);

        if(!person) return message.channel.send(`:x: | ${message.author} Menciona a alguien Primero!`);

        const embed = new Discord.MessageEmbed()
        .setTitle('**Pat**')
        .setDescription(`${message.author} **Le dio una palmadita a ${person}**`)
        .setImage(rand)
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: 'png' }))

        message.channel.send({embeds: [embed]});
    }
}