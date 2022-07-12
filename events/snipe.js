const client = require('../index');

client.on('messageDelete', (message) => {
    let snipes = client.snipes.get(message.channel.id) || [];
    if (snipes.length > 5) snipes = snipes.slice(1);

    snipes.unshift({
        msg: message,
        image: message.attachments.first() ? message.attachments.first().url : null,
        time: Date.now(),
    });

    client.snipes.set(message.channel.id, snipes);
})