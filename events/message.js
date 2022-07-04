const client = require ('../index');
const config = require('../config.json');
const Prefix = config.Prefix;

// Message Event (Para comandos)
client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(Prefix)) return;
    if (!message.guild) return;

    const args = message.content.slice(Prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args);
})