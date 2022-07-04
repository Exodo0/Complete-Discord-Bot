const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: ['p', 'latency'],
    description: 'Revisa el Ping del Bot',
    category: 'info',

    run : async (client, message, args) => {
        
        const msg = await message.channel.send('Revisando ping....');
        const pingEmbed = new Discord.MessageEmbed()
        .setTitle('Pong !')
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`${client.ws.ping} Bot Ping ms`)
        .setColor("RANDOM")
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
        .setTimestamp()
        
        await message.channel.send({embeds: [pingEmbed]});
        msg.delete();
    }
}