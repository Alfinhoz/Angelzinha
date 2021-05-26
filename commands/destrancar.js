const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    let motivo = args.slice(" ").join(" ")
    if(!motivo) motivo = "Motivo não informado"     
       let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
             if (!message.member.hasPermission("MANAGE_MESSAGES ")) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, Você não tem permissão para usar este comando.`)
        return message.channel.send(embed);
    }
  message.delete();
  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true
  })
  const embed = new Discord.MessageEmbed()
  .setTitle('__Destravado__')
  .setDescription('Este chat foi destravado.')
  .setFooter(`Id:${message.author.id}`)
  .addField('Trancar:', '**trancar', true)
  .addField('Destrancado Por:', `${message.author}`, true)
  .setTimestamp()
  .setThumbnail(avatar)
  .setColor('#00ff2e')
  message.channel.send(embed)
  
}