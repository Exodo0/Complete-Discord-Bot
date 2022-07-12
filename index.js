//Console clearing
console.clear();
//Discord
const config = require('./config.json');
const {Client,Collection} = require("discord.js");
const {readdirSync} = require("fs");
const {DisTube} = require('distube')
const Prefix = config.Prefix;
const {SpotifyPlugin} = require('@distube/spotify')
const {SoundCloudPlugin} = require('@distube/soundcloud')
const {YtDlpPlugin} = require('@distube/yt-dlp')
const { MessageEmbed } = require('discord.js');
const Token = config.Token;
const client = new Client({
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES",
    "GUILD_VOICE_STATES",
  ]
});

//Bot Handlers
client.commands = new Collection();
client.snipes = new Collection();
client.aliases = new Collection();
client.categories = readdirSync("./commands/");

//distube
client.distube = new DisTube(client, {
  leaveOnStop: true,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: true,
  emitAddListWhenCreatingQueue: false,
  plugins: [new SpotifyPlugin({emitEventsAfterFetching: true}),new SoundCloudPlugin(),new YtDlpPlugin()],
  youtubeDL: false
});
//distube
const status = queue =>
  `Volumen: \`${queue.volume}%\` | Filtro: \`${queue.filters.join(', ') || 'Off'}\` | Loop: \`${
    queue.repeatMode ? (queue.repeatMode === 2 ? 'Toda la lista' : 'Esta cancion') : 'Off'
  }\` | AutoPlay: \`${queue.autoplay ? 'On' : 'Off'}\``

client.distube
  .on('playSong', (queue, song) => queue.textChannel.send({embeds: [new MessageEmbed()
    .setTitle("🎶 >> Ahora Reproduciendo")
    .setColor("GREEN")
    .setThumbnail(song.thumbnail) 
    .setDescription(`Reproduciendo: \`${song.name}\` - \`${song.formattedDuration}\`\nPedida por: ${song.user}\n${status(queue)}`)]}
  ))
  .on('addSong', (queue, song) => queue.textChannel.send({embeds: [new MessageEmbed()
    .setTitle("📝 >> Agregada a la lista")
    .setColor("GREEN")
    .setDescription(`🎶 Agregada: ${song.name} - \`${song.formattedDuration}\`\nA la lista por: ${song.user}`)]}
  ))
  .on('addList', (queue, playlist) => queue.textChannel.send({embeds: [new MessageEmbed()
  .setTitle("📝 >> Agregada")
  .setColor("GREEN")
  .setDescription(`🎶 Agregada la lista: ${playlist.name} a la lista por: ${playlist.user}`)]}
  ))

  .on("error", (channel, e) => {
    channel.send({embeds: [new MessageEmbed().setColor("RED")
    .setTitle("Error")
    .setDescription(`🛑 >> Error: ${e}`)]})
  })

  .on('empty', channel => channel.send({embeds: [new MessageEmbed().setColor("RANDOM")
  .setTitle("😎 >> Lista Vacia")
  .setDescription(`El canal de voz esta vacio, Mevoe`)]}
  ))
  
  .on('searchNoResult', (message, query) => message.channel.send({embeds: [new MessageEmbed().setColor("RED")
  .setTitle("🛑 >> No se encontro nada")
  .setDescription(`🔍 >> No se encontro ninguna cancion con el termino: \`${query}\``)]}
  ))
  
  .on('finish', queue => queue.textChannel.send({embeds: [new MessageEmbed().setColor("GREEN")
  .setTitle("🛑 >> Lista Terminada")
  .setDescription(`🎶 >> La lista ha terminado, Saliendo del voice chat...`)]}
  ))

//Handlers
module.exports = client;
["handler"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
})
client.login(Token);