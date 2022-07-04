const Discord = require('discord.js');
const fs = require ('fs');
const Prefix = require('../../config.json').Prefix;

module.exports = {
    name: 'help',
    description: 'Muestra la lista de comandos disponibles',
    aliases: ['ayuda', 'help', 'commands', 'comandos', 'cmds', 'cmd', 'comandos'],

    run: async (client, message, args) => {
        if (!args[0]) {
            let categories = [];

            fs.readdirSync('./commands/').forEach(dir => {
                const commands = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));

                const cmds = commands.map(command => {
                    let file = require(`../../commands/${dir}/${command}`);

                    if (!file.name) return 'Sin nombre del comando';

                    let name = file.name.replace('.js', '');

                    return `\`${name}\``; 
                });

                let data = new Object();
                
                data = {
                    name: dir.toUpperCase(),
                    value: cmds.length === 0 ? 'En Progreso' : cmds.join(' '),
                };

                categories.push(data);
            });

            const helpEmbed = new Discord.MessageEmbed()
            .setTitle('Menú de Ayuda')
            .setColor('RANDOM')
            .addFields(categories)
            .setDescription(`Usa \`${Prefix}help [comando]\` para ver más información sobre un comando.`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()

            return message.channel.send({embeds: [helpEmbed]});
        } else {
            const command = client.commands.get(args[0].toLowerCase()) || client.commands.find(c => c.aliases && c.aliases.includes(args[0].toLowerCase()));

            if (!command){
                const noCommandEmbed = new Discord.MessageEmbed()
                .setTitle(`Comando no encontrado 💥!. Usa\`${Prefix}help\`Para revisar la lista de los comandos` )
                .setColor("RED")
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()

                return message.channel.send({embeds: [noCommandEmbed]});
            }
            const helpMenuEmbed = new Discord.MessageEmbed()
            .setTitle('Información del Comando')
            .setColor('PURPLE')
            .addField('Prefix:', `\`${Prefix}\``)
            .addField('Comando:', command.name ? `\`${command.name}\`` : 'Sin nombre del comando')
            .addField('Alias:', command.aliases ? `\`${command.aliases.join('` `')}\`` : 'Sin alias')
            .addField('Uso:', command.usage ? `\`${Prefix}${command.name} ${command.usage}\`` : `\`${Prefix}${command.name}\``)
            .addField('Descripción:', command.description ? command.description : 'Sin descripción')
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()

            return message.channel.send({embeds: [helpMenuEmbed]});
         }
    }
}