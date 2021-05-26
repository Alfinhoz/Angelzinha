const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`Olá ${message.author}. Abaixo está uma listinha sobre mim.`)
    .setTimestamp()
    .setFooter(`Comando feito por: ${message.author.username}`)
    .addFields(
        {
            name: 'Nome e Tag:',
            value: `**${client.user.tag}**`,
            inline: true
        },
        {
            name: 'Meu Ping:',
            value: `**${Math.round(client.ws.ping)}** ms`,
            inline: true
        },
        {
            name: 'Usuários:',
            value: `Cuido de **${client.users.cache.size}** usuários.`,
            inline: true
        },
        {
            name: 'Meu Criador:',
            value: 'Alfz',
            inline: true
        },
      
    )
    message.channel.send(embed);
}