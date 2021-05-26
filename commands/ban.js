const Discord = require('discord.js')

exports.run =  (client, message, args) => {
    let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024  })
      var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      if (!membro) return message.reply(`O comando que você digitou está errado, por favor digite ${config.prefix}help para saber mais.`)
      if (membro === message.member) return message.reply('Não tem permissão para isto.')

      var motivo = args.slice(1).join(" ");
      if (!motivo) return message.channel.send(`| Motivo inválido.`)
      if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply(`| Desculpe, você não tem permissão para isto.`)
      if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(`| Desculpe, você não tem permissão para isto.`)
      if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.channel.send(`| Desculpe, você não tem permissão para isto.`)

         message.channel.send(`Tem certeza que quer banir o ${membro}?`).then(msg => {
             msg.react("✅");
              msg.react("❌").then(r => {
                msg.react("❌")
                })

             let filtro = (reaction, usuario) => reaction.emoji.name === "✅" &&usuario.id === message.author.id;
             let coletor = msg.createReactionCollector(filtro,{max: 1})
             let filtro2 = (reaction, usuario) => reaction.emoji.name === "❌" &&usuario.id === message.author.id;
             let coletor2 = msg.createReactionCollector(filtro,{max: 1})
             
             

             coletor2.on("collect", () => {
                 msg.delete()})

             coletor.on("collect", cp => {
                 cp.remove(message.author.id); {
                     let embed = new Discord.MessageEmbed()
                     .setTitle('Banido')
                     .setColor('#ff0000')
                     .setTimestamp()
                     .setThumbnail(avatar)
                     .setFooter(`Id:${message.author.id}`)
                     .addFields(
                         {
                             name: "``Informações do Ban:``",
                             value: `**Usuário banido**: ${membro} \n **Motivo**: ${motivo} \n **Banido por**: ${message.author.username}`
                         }
                     )
                     message.channel.send(embed);
                 }
                 membro.ban();
             })
         }) 
}

