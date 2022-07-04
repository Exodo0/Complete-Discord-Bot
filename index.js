//Console clearing
console.clear();
//
const config = require('././config.json');
const { Client, Collection } = require ("discord.js");
const { readdirSync } = require ("fs");
const Token = config.Token;
const client = new Client({intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS"]});

//Bot Handlers
client.commands = new Collection();
client.aliases = new Collection();
client.categories = readdirSync("./commands/");

module.exports = client;
["handler"].forEach( handler => {
    require(`./handlers/${handler}`)(client);
})
client.login(Token);