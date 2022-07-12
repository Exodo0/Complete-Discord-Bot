const warnSchema = require("../../models/warnSchema");
const mongoose = require("mongoose");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "warnings",
  description: "Revisa las advertencias de un usuario",
  aliases: ["warnlist", "listwarnings", "warns"],
  run: async (client, message, args) => {
    const mentionedUser = message.mentions.users.first() || message.member;

    const warnDoc = await warnSchema
      .findOne({
        guildID: message.guild.id,
        memberID: mentionedUser.id,
      })
      .catch((err) => console.log(err));

    if (!warnDoc || !warnDoc.warnings.length) {
      return message.channel.send(`${mentionedUser} no tiene advertencias`);
    }

    const data = [];

    for (let i = 0; warnDoc.warnings.length > i; i++) {
      data.push(`**Numero:** ${i + 1}`);
      data.push(`**Razon:** ${warnDoc.warnings[i]}`);
      data.push(
        `**Moderator:** ${await message.client.users
          .fetch(warnDoc.moderator[i])
          .catch(() => "Usuario Borrado")}`
      );
      data.push(
        `**Fecha:** ${new Date(warnDoc.date[i]).toLocaleDateString()}\n`
      );
    }

    const embed = new MessageEmbed()
      .setImage(client.user.displayAvatarURL({dynamic: true, format: "png", size: 512}))
      .setThumbnail(mentionedUser.displayAvatarURL({ dynamic: true }))
      .setColor("RANDOM")
      .setDescription(data.join("\n"));

    message.channel.send({embeds: [embed]});
  },
};
