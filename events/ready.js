const mongoose = require('mongoose');
const client = require('../index');
const config = require('../config.json');
const Prefix = config.Prefix;
const Discord = require('discord.js');
const mongoDBURL = config.mongoDBURL;

//Mongoose
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('MongoDB: Conectado'))

//Bot Login
client.on('ready', () => {
    console.log(`Bot iniciado: ${client.user.tag}!`,
    `\nEstoy en: ${client.guilds.cache.size} Servidores`);
    // Random status
    function pickStatus() {
        let status = [`Para saber más sobre los comandos. Usa ${Prefix}help`, `Los Servidores donde estoy: ${client.guilds.cache.size}`];

        let statusRotate = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[statusRotate], {
            type: "PLAYING", 
            type: "WATCHING",
            type: "LISTENING",
        })
    }
    setInterval(pickStatus, 10000);
    //Filter
    client.on('messageCreate', async message => {
        if (/(https?)/gi.test(message.content)) {
            if (message.member.permissions.has("ADMINISTRATOR", "EMBED_LINKS", "ATTACH_FILES")) {
                return
            } else {
                message.delete()
                message.channel.send({embeds: [new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("Filtro anti-links")
                .setDescription(`No puedes enviar links de ningun tipo ${message.author} \n Evita ser Muteado o Baneado`)
                .setFooter('Sigue las Reglas del Servidor')
                .setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))]})
            } console.log(`Filtro anti-links en Funcionamiento...
            \nse Borro el mensaje de: ${message.author.tag}
            \nContenido: ${message.content}
            \nEn: ${message.channel.name}`)
            
        }
    })
});