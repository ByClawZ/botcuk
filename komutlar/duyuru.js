const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let guild = message.guild
	let duyurular = guild.channels.find('name', '📢・duyurular');
	if (!duyurular) return message.reply('`duyurular` kanalını bulamıyorum.');
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Bir şey yazmadınız.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setDescription(`:anchor: **Hey Ahali Bak Ne Yazdim :) ;**\n${mesaj}`)
    return guild.channels.get(duyurular.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru', 'duyuruyap'],
  permLevel: 0
};

exports.help = {
  name: 'duyuruyap',
  description: 'Sunucuda Duyuru yapmanızı sağlar.',
  usage: 'duyuruyap [yazı]'
};
