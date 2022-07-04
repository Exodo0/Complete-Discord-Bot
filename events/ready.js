const mongoose = require('mongoose');
const client = require('../index');
const config = require('../config.json');
const Prefix = config.Prefix;
const mongoDBURL = config.mongoDBURL;

//Mongoose
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('MongoDB: Conectado'))

//Bot Login
client.on('ready', () => {
    console.log(`Bot iniciado: ${client.user.tag}!`);
    // Random status
    function pickStatus() {
        let status = [`Hola Para saber más sobre los comandos. Usa ${Prefix}help`, `Servidores donde estoy: ${client.guilds.cache.size}`];

        let statusRotate = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[statusRotate], {
            type: 'WATCHING',
        })
    }
    setInterval(pickStatus, 5000);
});