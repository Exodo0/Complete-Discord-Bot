const Discord = require ('discord.js')

module.exports = {
    name: 'slap',
    aliases: ['slaps','slapped', 'Slap'],
    description: 'Abofetea a alguien',

    run: async (client, message, args) => {
        const list= [
            "https://cdn.discordapp.com/attachments/983226126388314182/994115858290982952/girl-slap.gif",
            "https://cdn.discordapp.com/attachments/983226126388314182/994115858748166144/anime-slap.gif",
            "https://cdn.discordapp.com/attachments/983226126388314182/994115859134025820/giphy.gif",
            "https://cdn.discordapp.com/attachments/983226126388314182/994115905153941595/anime-slap-mad.gif",
            "https://cdn.discordapp.com/attachments/983226126388314182/994123091670224946/cc87656cf72979fb8ee01c3eebc5cdff.gif",
            "https://cdn.discordapp.com/attachments/983226126388314182/994123091905101894/original.gif",
            "https://cdn.discordapp.com/attachments/983226126388314182/994123092269989918/akame-ga-kill-anime.gif",
            "https://cdn.discordapp.com/attachments/983226126388314182/994123092693630987/3eea37907d4c674036fce1eddd59ca2f.gif",
        ];
        
        const rand = list[Math.random() * list.length | 0];
        let person = message.mentions.members.first() || client.users.cache.get(args[0]);

        if(!person) return message.channel.send(`:x: | ${message.author} Menciona a alguien Primero!`);

        const embed = new Discord.MessageEmbed()
        .setTitle('**Slap**')
        .setDescription(`${message.author} **Abofeteo a  ${person}**`)
        .setImage(rand)
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: 'png' }))

        message.channel.send({embeds: [embed]});
    }
}