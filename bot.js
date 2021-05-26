const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const express = require("express");
const db = require('quick.db');
const app = express();

app.get('/', (req, res) => res.send('Bom dia'))
app.listen(process.env.PORT || 3000)

client.on("message", message => {
    const prefixo =  db.get(`prefix_${message.guild.id}`) || "**"
    
  if(message.author.bot) return;
  if(message.content == `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
  const embed = new Discord.MessageEmbed()
  .setImage()
  .setDescription(`****Bom dia meu usuário lindo**** *me mencionou por que precisa da minha ajuda certo? Então aqui estou*`)
  .addField("meu prefixo:", `${prefixo}`)
  //.addField("Você pode alterar o prefix neste servidor!", `utilize ${prefixo}painel para configurar!`) ainda n tenho esse comando
  .setColor("RANDOM")
  message.channel.send(embed)
  }
  });

client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

   const args = message.content
       .trim().slice(config.prefix.length)
       .split(/ +/g);
   const command = args.shift().toLowerCase();

   try {
       const commandFile = require(`./commands/${command}.js`)
       commandFile.run(client, message, args);
   } catch (err) {
   console.error('Erro:' + err);
 }
});

client.on("message", async message => {
    const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
    if (regex.exec(message.content)) {
      await message.delete({timeout: 500});
        await message.channel.send(
          `${message.author} **você não pode postar link de outros servidores aqui!**`
        );
    }
  });

  client.on("ready", () => {
    let activities = [
        `Utilize ${config.prefix}help para obter ajuda`,
        `${client.guilds.cache.size} servidores!`,
        `${client.channels.cache.size} canais!`,
        `${client.users.cache.size} usuários!`
      ],
      i = 0;

    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: "WATCHING"
        }), 1000 * 60); 
    client.user
        .setStatus("Lokinho")
        .catch(console.error);
  console.log("Deu erro. Tente novamente.")
  });

client.on("ready", () => {
  console.log(`O bot foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidor.`);
  client.user.setActivity('Meu criador Alfz é doidinho', { type: 'PLAYING' });(`Eu estou em ${client.guilds.cache.size} servidores`);
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (ID do servidor: ${guild.id}). Membros: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidor.`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});


client.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

   const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
   const comando = args.shift().toLowerCase();
   



});

client.on("message", msg => {
  if (msg.content === '**helpfun') {
      msg.reply('**Em breve**')
  }
})

client.on("message", msg => {
  if (msg.content === 'Bem Vindx Angelzinha') {
      msg.reply('`Obrigada, eu e meu criador Alfz vamos tentar melhorar este servidor ao máximo, vou me apresentar brevemente, Eu me chamo Angelzinha, sou uma simples bot, fui criado por apenas uma pessoa ambiciosa, ainda não tenho muitos comandos só alguns bem simples, mas eu sei que Alfz, vai adicionar mais em breve, ele também me disse que eu vou gostar muito de vocês, por que vocês são pessoas maravilhosas para ele. Então espero que gostem de mim.`')
  }
})


client.login(config.token);


//codigos brincando