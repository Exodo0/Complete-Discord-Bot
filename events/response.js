const Discord = require('discord.js');
const size = require('megadb/methods/size');
const client = require('../index');

const JM = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Auto-Responser")
    .setDescription("Jefe y Dueño de Jackson")
    .setThumbnail("https://tr.rbxcdn.com/2c3cf0bb8013105fcf32d9afe28f93cb/150/150/AvatarHeadshot/Png")
    .addField("Te Baneo", "👀")
    .addField("Me enojo facil", "UnU")
    .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-yS7dOBWVaxNHnLdyQbHzeJXcCHwAu4XNw&usqp=CAU")
    .setTimestamp();
//embed de jm
const JACK = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Auto-Responser")
    .setImage("https://tr.rbxcdn.com/4d89f37b515435ff5ad77851d2b7ef1f/150/150/AvatarHeadshot/Png")
    .setDescription("Soy Jackson y Hacker")
    .addField("Te Baneo", "🗿")
    .setTimestamp()
//embed de jack
const Phantom = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Auto-Responser")
    .setThumbnail("https://tr.rbxcdn.com/5d14a076b0684ddd652f38829e5bdf34/150/150/AvatarHeadshot/Png")
    .setImage('https://c.tenor.com/N50XeT-PNbYAAAAd/gato-bailando.gif')
    .setDescription('Bolox')
    .addField("Quemen al silla", "😠 👊")
    .setTimestamp()
//embed de phantom
const Pony = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Auto-Responser")
    .setThumbnail("https://tr.rbxcdn.com/47ca1df883d22a336bb45bbecae91561/150/150/AvatarHeadshot/Png")
    .setImage(`https://cdn.discordapp.com/attachments/976671106486394911/977386118301487124/unknown.png`)
    .setDescription('Soy el pony mas sepsi del mundo 🌍')
    .addField('Ahora es el Misho de joel', '♥')
    .setFooter('Pony si brilla o tal vez no.')
    .setTimestamp()
//embed de pony
const Kary = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Auto-Responser")
    .setDescription("Un Ñao OwO")
    .addField("Hay que adoptar miauws", "UwU")
    .setThumbnail('https://tr.rbxcdn.com/90a6724fdddaeff9e1c9661167add51e/150/150/AvatarHeadshot/Png')
    .setImage('https://cdn.discordapp.com/avatars/512853125594349568/8aff45422705543d4b0f06bb5e253873.png?size=4096')
    .setFooter('Sigue la promesa de darte a los miaws xdd')
    .setTimestamp()
//embed de kary
const Nuberto = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Auto-Responser")
    .setDescription("Robo nombres y fotos")
    .addField("Se copia todo", "👻")
    .setImage('https://cdn.discordapp.com/avatars/789547661799063572/b56672cfc9b4d9a13b16d19001e5fe95.png?size=1024')
    .setTimestamp()
//embed de nuberto
const Emiks = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Soy roba roles UwU")
    .setTitle("Auto-Responser")
    .setImage('https://cdn.discordapp.com/attachments/957516112457764875/993576144119025744/d229b9189e1a7af1a8cd7cff7cdbb514.jpg')
    .setTimestamp()
//embed de emiks
const Pibe = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Auto-Responser")
    .setDescription("Soy un hetero pro 💪")
    .setThumbnail('https://cdn.discordapp.com/avatars/808000733844078592/1ad8ef83fe01e15bfebb2fc67ef5bd14.png?size=4096')
    .addField('Hetero??', 'Realmente no se si sea Hetero')
    .addField('Troll', 'si es gai pogger')
    .setImage('https://cdn.discordapp.com/attachments/988279989810131005/992977290717831198/images.jpg')
    .setTimestamp()
//embed de pibe
const Danielos = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Auto-Responser")
    .setDescription("Ahora tengo un comando")
    .addField("Soy inactivo", "😢")
    .setImage('https://cdn.discordapp.com/avatars/870447496260902983/194bc83bcdd17490a1a781e252a3c6ef.png?size=1024')
    .setTimestamp()
//embed de danielos
const Bola = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Auto-Responser")
    .setDescription("Soy una bolita de manteca")
    .setImage('https://laroussecocina.mx/wp-content/uploads/2018/01/Manteca-de-cerdo.jpg')
    .addField("Diabetes", "💩")
    .addField("Cuidado que te mueres", "💀")
    .setFooter('Realmente no se porque es puso ese emoji')
    .setTimestamp()
//embed de bola
const Joel = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Auto-Responser")
    .setDescription("Soy un joelito cartelerito valiente UwU")
    .setThumbnail('https://tr.rbxcdn.com/3b92491e2826c0a831870a0867a493ed/150/150/AvatarHeadshot/Png')
    .setImage('https://cdn.discordapp.com/attachments/957516112457764875/982827908823404554/unknown.png')
    .addField("Se traba al Hablar", "👻 por pony")
    .addField("Es pro", "🤙")
    .setTimestamp()
//embed de joel
const Joela = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Auto-Responser")
    .setDescription("Soy una joelita me declare LGBTQ 🏳‍🌈")
    .addField("Ahora es el Misho de pony", "♥")
    .setImage('https://cdn.discordapp.com/attachments/957516112457764875/986808670316810250/unknown.png')
    .setFooter("Sospecho lo de pony 🤔")
    .setTimestamp()
//embed de joela
const JoeSen = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Auto-Responser")
    .setDescription("Es pro Aimbot 🔫🔫")
    .setImage('https://cdn.discordapp.com/avatars/431925323089838081/257f259056d12de21e578f58ad3fefa3.png?size=4096')
    .setTimestamp()
//embed de joe sen
const RatonLo = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Auto-Responser")
    .setDescription("Es pro lag -499 fps")
    .setImage('https://c.tenor.com/8AZ_ceKZaVgAAAAd/lowfps.gif')
    .addField("Es pro", "🤙")
    .addField("Es un raton", "🐭")
    .setTimestamp()
//embed de RatonLoco
const Decuin = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Auto-Responser")
    .setDescription("Ponche de emergenchi")
    .setImage('https://cdn.discordapp.com/attachments/976671106486394911/977383974752092190/unknown.png')
    .setFooter('Ta potente')
    .setTimestamp()
//embed de decuin
const Loxe = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Auto-Responser")
    .setDescription("Soy loxe")
    .setImage('https://cdn.discordapp.com/avatars/805528360381317142/9fb8bc08c145269ed4ba2a2acc0bad0d.png?size=1024')
    .addField("Mucho pide", "😠")
    .addField("Ojala lo banen", "🤙")
    .setTimestamp()

client.on('message', message => {
    if (message.content.toLocaleLowerCase() === 'jmc')
        message.channel.send({
            embeds: [JM]
        });
    else if (message.content.toLocaleLowerCase() === 'jack')
        message.channel.send({
            embeds: [JACK]
        });
    else if (message.content.toLocaleLowerCase() === 'panri')
        message.channel.send({
            embeds: [Phantom]
        });
    else if (message.content.toLocaleLowerCase() === 'pony')
        message.channel.send({
            embeds: [Pony]
        });
    else if (message.content.toLocaleLowerCase() === 'kary')
        message.channel.send({
            embeds: [Kary]
        });
    else if (message.content.toLocaleLowerCase() === 'nuberto')
        message.channel.send({
            embeds: [Nuberto]
        });
    else if (message.content.toLocaleLowerCase() === 'emiks')
        message.channel.send({
            embeds: [Emiks]
        });
    else if (message.content.toLocaleLowerCase() === 'soyunpibe')
        message.channel.send({
            embeds: [Pibe]
        });
    else if (message.content.toLocaleLowerCase() === 'oesp')
        message.channel.send({
            embeds: [Danielos]
        });
    else if (message.content.startsWith("BolaDeMantecaOwO"))
        message.channel.send({
            embeds: [Bola]
        });
    else if (message.content.toLocaleLowerCase() === 'joel')
        message.channel.send({
            embeds: [Joel]
        });
    else if (message.content.toLocaleLowerCase() === 'joela')
        message.channel.send({
            embeds: [Joela]
        });
    else if (message.content.toLocaleLowerCase() === 'joesen')
        message.channel.send({
            embeds: [JoeSen]
        });
    else if (message.content.toLocaleLowerCase() === 'ratonloco')
        message.channel.send({
            embeds: [RatonLo]
        });
    else if (message.content.toLocaleLowerCase() === 'decuin')
        message.channel.send({
            embeds: [Decuin]
        });
    else if (message.content.toLocaleLowerCase() === 'loxe')
        message.channel.send({
            embeds: [Loxe]
        });
});