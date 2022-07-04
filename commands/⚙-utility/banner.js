const Discord = require('discord.js')
const config = require('../../config.json')
const Token = config.Token
const axios = require ('axios')

module.exports = {
    name: 'banner',
    description: 'Muestra tu banner',
    aliases: ['banner','bn'],

    run: async (client, message, args) => {
        const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    try {
        const data = await
        axios.get(`https://discord.com/api/users/${user.id}`, {
            headers: {
                Authorization: `Bot ${Token}`
            }
        }).then (d => d.data);
        if(data.banner){
            let url = data.banner.startsWith("a_") ? ".gif?size=4096" : ".png";
            url = `https://cdn.discordapp.com/banners/${user.id}/${data.banner}${url}`;
            let avatar = user.displayAvatarURL({ dynamic: true});
        const embed = new Discord.MessageEmbed()
        .setTitle(`Banner de: ${user.tag}`)
        .setColor("RANDOM")
        .setDescription(`[Download Banner](${url})\n[Download Avatar](${user.displayAvatarURL({ dynamic: true })})\nTodos los links seguros. 🗿👻`)
        .setImage(url)
        .setThumbnail(avatar)
        .setFooter({ text: `Solicitado por: ${message.author.tag}`, icon_url: message.author.displayAvatarURL({ dynamic: true }) })
        .setTimestamp()
        message.channel.send({embeds: [embed]})
        } else {
            message.channel.send(`${user.tag} no tiene banner.`)
        };
    } catch (err){
        console.log(err)
    }}
}
