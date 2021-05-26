const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const hora = new Date();
    hora.setHours(hora.getHours() - 3);
    message.delete().catch(O_o => {});
    const reason = args.join(' ');
    if(!reason) return message.reply(":pika_de_dima: Voce precisa especificar seu bug").then(msg => msg.delete({timeout: 5000}))
  
    //Mensagem na Log
    console.log(`
    =================================
     ⚠️ Novo Bug Reportado ⚠️ 
    
    Bug: ${reason}
    Reportado por: ${message.author.tag} ID: ${message.author.id}
    Hora: ${hora.getUTCHours()}:${hora.getUTCMinutes()}:${hora.getUTCSeconds()}
    =================================`);
  
    //Mensagem no Chat
    const embed = new Discord.MessageEmbed()
    .setTitle(`⚠️Bug Reportado⚠️`)
    .setColor('#ff009a')
    .setDescription(`Bug: ${reason}`)
    .setFooter(`Bug reportado por: ${message.author.tag}`)
    message.channel.send(embed);
  
    //Mensagem no Privado
    const privado = new Discord.MessageEmbed()
    .setTitle(`⚠️Bug reportado:⚠️`)
    .setColor('#ff009a')
    .setDescription(`${message.author} muito obrigado por nos reportar o bug **${reason}**, caso seja necessario nossa equipe entrará em contato com voce!:emoji_63:`)
    .setFooter(`Atenciosamente, Staff Angels`)
    message.author.send(privado);
  };