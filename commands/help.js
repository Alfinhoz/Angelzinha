const Discord = require('discord.js')

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#5700a0')
    .setTimestamp()
    .setDescription('*Aqui é sua central de ajuda, abaixo estará uma listinha do que poderá fazer.* Obs: Utilize Help antes :)')
    .setFooter(`Autor: @${message.author.tag}`)
    .addField('*Mod*', '`para obter ajuda com moderação`')
    .addField('*Geral*', '`para comandos gerais`')
    .addField('*Fun*', '`para comandos divertidos`') //em breve

    message.channel.send(embed)
}