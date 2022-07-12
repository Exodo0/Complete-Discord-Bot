const weather = require('weather-js');
const Discord = require('discord.js');

module.exports ={
    name: 'clima',
    description: 'Muestra el clima de una ciudad',
    aliases: ['clima', 'weather'],

    run: async (client, message, args) => {
        const ErrorEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error')
        .setDescription('Debes especificar una ciudad')
        .setFooter('Ejemplo: `Clima en Mexico`')

        weather.find({search: args.join(" "),degreeType: 'c'}, function(error,result) { 
            if(error) return message.channel.send(error)
            if(!args[0]) return message.channel.send(ErrorEmbed)

            if( result === undefined || result.lenght === 0) return message.channel.send({embeds: [new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Falta de informacion')
            .setDescription('No se encontro ninguna ciudad con ese nombre')]})
            
            const current = result[0].current;
            const location = result[0].location;

            const weatherInfo = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setThumbnail(client.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
            .setDescription(`Clima en ${location.name}`)
            .setImage(current.imageUrl)
            .addField('Temperatura', `${current.temperature}°C`, true)
            .addField('Humedad', `${current.humidity}%`, true)
            .addField('Viento', `${current.windspeed} km/h`, true)
            .addField('Direccion', `${current.winddisplay}`, true)
            .addField('Timezone', `UTC${location.timezone}`, true)
            .setFooter('Comando de Clima :v')

            message.channel.send({embeds: [weatherInfo]})
        })
    }
}