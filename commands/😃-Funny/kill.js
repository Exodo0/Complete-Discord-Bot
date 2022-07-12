const Discord = require ('discord.js');

module.exports = {
    name: 'kill',
    description: 'Asesina a un Usuario',
    aliases: ['kill','Kill'],

    run: async (client, message, args) => {
        const list= [
            "https://c.tenor.com/NbBCakbfZnkAAAAC/die-kill.gif",
            "https://c.tenor.com/Ze50E1rW44UAAAAd/akudama-drive.gif",
            "https://c.tenor.com/EWhFGCTfmucAAAAC/akame-ga-kill-akame.gif",
            "https://c.tenor.com/Hpa1FyBhRusAAAAC/anime-zombies.gif",
            "https://c.tenor.com/7wLQeXyCPkIAAAAC/akame-ga-kill-anime.gif",
            "https://c.tenor.com/AMdy8GyVKx4AAAAC/kill-la-kill-machine-gun.gif",
        ];
        
        const rand = list[Math.random() * list.length | 0];
        let person = message.mentions.members.first() || client.users.cache.get(args[0]);

        if(!person) return message.channel.send(`:x: ${message.author} Menciona a alguien Primero!`);

        const embed = new Discord.MessageEmbed()
        .setTitle('**Asesinato ☠**')
        .setDescription(`${message.author} **Acaba de asesinar a: ${person}**`)
        .setImage(rand)
        .setColor('RED')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: 'png' }))

        message.channel.send({embeds: [embed]});
    }
}