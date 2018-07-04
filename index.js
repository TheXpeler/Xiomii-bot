const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const ytdl = require('ytdl-core');
const economy = require('discord-eco')

var prefix = config.prefix;
let cooldown= new Set();
function jugandoa(){
  let elementos = ['Ser un bot', 'hacer cosas de bots','directo morido', 'ser Xiomii', 'Clubstep', 'los naipes', 'Ser manoseada por mi creador ;-;','Mirar a la nada pensando en todo','Suplantar a Xiomii','Ser Xiomih Ele Peh','Tomar awa helada','hacer cosas de Xiomii','dormir calentita en mi camita uwu','ZzZzZzZzZz','awa','ewe','uwu','matar dedos xd','Miauxd','Lalalalalalala','Escuchar música uwu','Geometry Dash'];
  
      client.user.setPresence({
          game: {
              name: elementos[Math.floor(elementos.length * Math.random())],url: "https://www.twitch.tv/xiomiilp",
          }
      });
  }
  setInterval(jugandoa, 60000);
  
client.on("ready" ,() => {
    console.log("El bot esta listo")
});

client.on("message", (message) => {

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if (command === 'ping') {

  let mensajes = Date.now() - message.createdTimestamp;
  let ping = Math.floor(message.client.ping);
  
  message.channel.send(":ping_pong: Pong!")
    .then(m => {

        m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(mensajes/100)} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
    
    });
  }

  if (message.content == ("Hola")) {
    message.channel.send("Holii n.n bienvenid@! :smile:");
  } else
  
if (message.content == ("hola")) {
    if(cooldown.has(message.author.id)){
        message.channel.send();
        return;
     }
     //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
     //no pueda utilizar el comando durante 10 segundos.
     cooldown.add(message.author.id);
     
     //Quita al usuario del enfriamiento después de pasar los 10 segundos.
     setTimeout(() => {
       cooldown.delete(message.author.id);
     }, 10000);
    
  message.channel.send("Holii n.n bienvenid@! :smile:");
} else


  if (message.content == ("ola")) {

    if(cooldown.has(message.author.id)){
        message.channel.send();
        return;
     }
     //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
     //no pueda utilizar el comando durante 10 segundos.
     cooldown.add(message.author.id);
     
     //Quita al usuario del enfriamiento después de pasar los 10 segundos.
     setTimeout(() => {
       cooldown.delete(message.author.id);
     }, 10000);

    message.channel.send("de mar :ocean: ");
  } else


   if (message.content == ("v:")) {
       
    if(cooldown.has(message.author.id)){
        message.channel.send();
        return;
     }
     //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
     //no pueda utilizar el comando durante 10 segundos.
     cooldown.add(message.author.id);
     
     //Quita al usuario del enfriamiento después de pasar los 10 segundos.
     setTimeout(() => {
       cooldown.delete(message.author.id);
     }, 10000);

    message.channel.send("que onda con el pacman >:v");
  } else

  if (command === "Razz") {
      
  if(cooldown.has(message.author.id)){
    message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
    return;
 }
 //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
 //no pueda utilizar el comando durante 10 segundos.
 cooldown.add(message.author.id);
 
 //Quita al usuario del enfriamiento después de pasar los 10 segundos.
 setTimeout(() => {
   cooldown.delete(message.author.id);
 }, 10000);

    message.channel.send("**Bbneko**. Razz x Ana es real uwu");
  } else

  if (command === "Kevin") {
    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
  
    message.channel.send("**Soy un niño rainbol dijo el kewin :rainbow:**");
  } else

  if (command === "Ge-ese") {
    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
  
    message.channel.send("**La money hace al cabaiero**");
  } else

  if (command === "Xiomii") {
    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
  
    message.channel.send("**Miau** :3 <a:Pandita:450363958881157120>");
  } else

  if (command === "Leann") {
    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
  
    message.channel.send("**Leann la biblia**");
  } else

  if (command === "Ana") {
    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
  
    message.channel.send("Ana-Chan x Razz es real uwu");
  } else

  if (message.content.startsWith("hermosa")) {
    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
  
    message.channel.send(message.author.username+ " mas hermosa eres tu bb 7w7r");
  } else

  if (command === "Calamar") {
    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
  
    message.channel.send("._.     :|      .-.     |:");
  } else

  if (command === "Geo") {
    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
  
    message.channel.send("<:rikolinho:415612971117576202> 7u");
  } else

  if (command === "Kuki") {
    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
  
    message.channel.send("Te wa a comer con un vaso de leshe tibia >:3");
  } else

  if (command === "Joshe") {
    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
  
    message.channel.send("**Para cuando Xiomii en featured >:v**");
  } else

  if (command === "Añan") {
    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
  
    message.channel.send("La legendaria palta que llego a los 100 subs >:3 las paltas dominarán al mundo");
  } else

  if (command === "Javii") {
    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
  
    message.channel.send("?warn @itsjavii11 por subido >:c                                                                           Pasate Hypersonic xdd");
  } else

  if (command === "ban") {
    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);

let mention = message.mentions.members.first();
let user = message.mentions.users.first();
  if(mention == null) {
    message.channel.send("<:ban:422266423902076959> | Menciona a alguien para banear 7u")
  }else

    message.channel.send(":white_check_mark: | El usuario " + user.username +" ha sido baneado con exito");
  } else
  
  if (command === "tags") {
    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
  
    message.channel.send(message.author.username +", ``tags`` is temporarily disabled!");
  } else

if(command ==='purgar'){
    const user = message.mentions.users.first();
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    if (!amount) return message.reply('Especifica la cantidad de mensajes que deseas borrar');
    if (!amount && !user) return message.reply('Especifica un usuario y cantidad de mensajes');
    message.channel.fetchMessages({
        limit: amount,
    }).then((messages) => {
        if (user) {
            const filterBy = user ? user.id : Client.user.id;
            messages = messages.filter(m => m.author.id === filterBy).arary().slice(0, amount);
        }
        message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
//Puede eliminar el message.channel.send que se encuentra abajo si lo desea, es opcional.
        message.channel.send("¡Los mensajes han sido purgados correctamente! n.n");
    });
};

if(command ==='clear'){
  const user = message.mentions.users.first();
  const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
  if (!amount) return message.reply('Especifica la cantidad de mensajes que deseas borrar');
  if (!amount && !user) return message.reply('Especifica un usuario y cantidad de mensajes');
  message.channel.fetchMessages({
      limit: amount,
  }).then((messages) => {
      if (user) {
          const filterBy = user ? user.id : Client.user.id;
          messages = messages.filter(m => m.author.id === filterBy).arary().slice(0, amount);
      }
      message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
//Puede eliminar el message.channel.send que se encuentra abajo si lo desea, es opcional.
      message.channel.send("¡Los mensajes han sido limpiados correctamente! n.n");
  });
};

if(command ==='prune'){
  const user = message.mentions.users.first();
  const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
  if (!amount) return message.reply('Especifica la cantidad de mensajes que deseas borrar');
  if (!amount && !user) return message.reply('Especifica un usuario y cantidad de mensajes');
  message.channel.fetchMessages({
      limit: amount,
  }).then((messages) => {
      if (user) {
          const filterBy = user ? user.id : Client.user.id;
          messages = messages.filter(m => m.author.id === filterBy).arary().slice(0, amount);
      }
      message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
//Puede eliminar el message.channel.send que se encuentra abajo si lo desea, es opcional.
      message.channel.send("¡Los mensajes han sido borrados correctamente! n.n");
  });
};

if(command === 'user'){
  let userm = message.mentions.users.first()
  if(!userm){
    var user = message.author;
    
      const embed = new Discord.RichEmbed()
      .setThumbnail(user.avatarURL)
      .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
      .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
      .addField('ID', user.id, true)
      .addField('Estado', user.presence.status, true)
      .addField('Apodo', message.member.nickname, true)
      .addField('Cuenta Creada', user.createdAt.toDateString(), true)
      .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
      .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
      .setColor(0x66b3ff)
      
     message.channel.send({ embed });
  }else{
    const embed = new Discord.RichEmbed()
    .setThumbnail(userm.avatarURL)
    .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
    .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
    .addField('ID', userm.id, true)
    .addField('Estado', userm.presence.status, true)
    .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
    .setColor(0x66b3ff)
    
   message.channel.send({ embed });
  }
  
}
if(command === 'server'){

  var server = message.guild;

  const embed = new Discord.RichEmbed()
  .setThumbnail(server.iconURL)
  .setAuthor(server.name, server.iconURL)
  .addField('ID', server.id, true)
  .addField('Region', server.region, true)
  .addField('Creado el', server.joinedAt.toDateString(), true)
  .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
  .addField('Miembros', server.memberCount, true)
  .addField('Roles', server.roles.size, true)
  .setColor(0x66b3ff)
  
 message.channel.send({ embed });

}

if(message.content.startsWith(prefix + 'help')){

  message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
  message.author.send('**Comandos de Xiomii n.n**\n```\n'+
                      '-> '+prefix+'help           :: Muestra este mensaje de ayuda n.n\n'+
                      '-> '+prefix+'ping           :: Comprueba la latencia del bot y de tus mensajes.\n'+
                      '-> '+prefix+'avatar <@user> :: Muestra el avatar de un usuario.\n'+
                      '-> '+prefix+'user <@user>   :: Muestra información sobre un usuario mencioando.\n'+
                      '-> '+prefix+'server         :: Muestra información del server.\n'+
                      '-> '+prefix+'8ball          :: Hazme una pregunta y te responderé.\n'+
                      '-> '+prefix+'prune          :: Borra cierta cantidad de mensajes.\n'+
                      '-> '+prefix+'Xiomii         :: Comando especial 7u7\n'+
                      '-> '+prefix+'Razz           :: Comando especial 7u7\n'+
                      '-> '+prefix+'Ana            :: Comando especial 7u7\n'+
                      '-> '+prefix+'Ge-ese         :: Comando especial 7u7\n'+
                      '-> '+prefix+'Leann          :: Comando especial 7u7\n'+
                      '-> '+prefix+'Joshe          :: Comando especial 7u7\n'+
                      '-> '+prefix+'Javii          :: Comando especial 7u7\n'+
                      '-> '+prefix+'Añan           :: Comando especial 7u7\n'+
                      '-> '+prefix+'Kuki           :: Comando especial 7u7\n'+
                      '-> '+prefix+'Geo            :: Comando especial 7u7\n'+
                      '-> '+prefix+'Ellin          :: Comando especial 7u7\n'+
                      '-> '+prefix+'Calamar        :: Comando especial 7u7\n'+
                      '-> hola                     :: Retorna un saludo como mensaje.\n```\n\n'+
                      '**Unete al server de discord de Xiomii n.n/ **\nhttps://discord.gg/bnJ8MDM');
  
}

if(command === "test")) {
  message.author.send("**ok**")
}

if(command === 'avatar'){

  let img = message.mentions.users.first()
  if (!img) {

      const embed = new Discord.RichEmbed()
      .setImage(`${message.author.avatarURL}`)
      .setColor(0x66b3ff)
      .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
      message.channel.send({ embed });

  } else if (img.avatarURL === null) {

      message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");

  } else {

      const embed = new Discord.RichEmbed()
      .setImage(`${img.avatarURL}`)
      .setColor(0x66b3ff)
      .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
      message.channel.send({ embed });

  };
}

if(command === '8ball'){
  var rpts = ["Sí", "No", "Nu c xd", "Podria ser :thinking:", "A lo mejor", "Nu she ewe", "Definitivamente", " ¡Claro! "," Sisi "," No "," akzhy "," Por supuesto... que no :v "];
  if (!args) return message.reply(`Escriba una pregunta.`);
  message.channel.send(message.member.user+' a su pregunta `'+args+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');

}

 

      if(command === 'hug'){

  if(cooldown.has(message.author.id)){
    message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
    return;
 }
 //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
 //no pueda utilizar el comando durante 10 segundos.
 cooldown.add(message.author.id);
 
 //Quita al usuario del enfriamiento después de pasar los 10 segundos.
 setTimeout(() => {
   cooldown.delete(message.author.id);
 }, 10000);


  let user = message.mentions.users.first();
        const gifs =
            ['https://m.popkey.co/fca5d5/bXDgV.gif','','https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif','https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093','https://i.pinimg.com/originals/34/79/07/347907b29298c58cc6093c650b3b5ec8.gif','http://i68.tinypic.com/sm4mmw.gif','https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif','https://media.giphy.com/media/pHllRX210dKjS/source.gif','http://nocturnal-romance.net/galeria/sr5.gif','https://78.media.tumblr.com/a8d7e72935a362df266573c3056da306/tumblr_olmh4wPiMn1slt45io1_250.gif','https://s3.favim.com/orig/151124/anime-couple-cry-gif-Favim.com-3637833.gif', 'https://thumbs.gfycat.com/AlienatedUnawareArcherfish-max-1mb.gif', 'https://i.pinimg.com/originals/c5/85/27/c58527caa736f8d5ce4ab6ee6e3f736b.gif', 'https://vignette.wikia.nocookie.net/degrassi/images/f/f1/Asuna_hugs_Kirito.gif/revision/latest?cb=20141016013927', 'https://2.bp.blogspot.com/-XPqck-C979s/V-QbRIOoqbI/AAAAAAAADzM/seUBJKyKCiQ5W2kScB627WjcKU5Pq1VKwCLcB/s1600/chuunibyou.gif' ,'https://78.media.tumblr.com/28e86413485a973ae859a745a7a5382e/tumblr_o1hf0uK2NL1uapp8co1_500.gif' ,'http://i.imgur.com/pME21N2.gif', 'https://thumbs.gfycat.com/FastNegligibleDuck-max-1mb.gif', 'http://s.orzzzz.com/news/85/c2/586606ec10e31.gif', 'https://data.whicdn.com/images/203117037/original.gif'];

       /* if (message.mentions.users.first() === message.author) return message.channel.send(':)'); */ //esta línea es opcional, es si quieres que salga algo cuando se mencione el mismo..
       if (message.mentions.users.first() === message.author) return message.channel.send('No te puedes abrazar a ti mismo ;-;');
        if (message.mentions.users.size < 1) return message.reply('**Tienes que mencionar a alguien para darle un abrazo**').catch(console.error); //Para que mencione a alguien.
        message.channel.send({
            embed: {
                description: message.author.username + " **Le dio una abrazo a** " + user.username + " uwu",
                color: 15105570, //Puedes poner el color de tu preferencia.
                image: {
                    url: gifs[Math.floor(gifs.length * Math.random())]  //MathRandom para los gifs, pueden poner el rich embed, pero yo lo dejo así xD
                }
            }
        })
      }

      if(command === 'chocolatada'){

        if(cooldown.has(message.author.id)){
          message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
          return;
       }
       //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
       //no pueda utilizar el comando durante 10 segundos.
       cooldown.add(message.author.id);
       
       //Quita al usuario del enfriamiento después de pasar los 10 segundos.
       setTimeout(() => {
         cooldown.delete(message.author.id);
       }, 10000);
        
        let user = message.mentions.users.first();
              const gifs =
                  ['https://m.popkey.co/fca5d5/bXDgV.gif','','https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif','https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093','https://i.pinimg.com/originals/34/79/07/347907b29298c58cc6093c650b3b5ec8.gif','http://i68.tinypic.com/sm4mmw.gif','https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif','https://media.giphy.com/media/pHllRX210dKjS/source.gif','http://nocturnal-romance.net/galeria/sr5.gif','https://78.media.tumblr.com/a8d7e72935a362df266573c3056da306/tumblr_olmh4wPiMn1slt45io1_250.gif','https://s3.favim.com/orig/151124/anime-couple-cry-gif-Favim.com-3637833.gif', 'https://thumbs.gfycat.com/AlienatedUnawareArcherfish-max-1mb.gif', 'https://i.pinimg.com/originals/c5/85/27/c58527caa736f8d5ce4ab6ee6e3f736b.gif', 'https://vignette.wikia.nocookie.net/degrassi/images/f/f1/Asuna_hugs_Kirito.gif/revision/latest?cb=20141016013927', 'https://2.bp.blogspot.com/-XPqck-C979s/V-QbRIOoqbI/AAAAAAAADzM/seUBJKyKCiQ5W2kScB627WjcKU5Pq1VKwCLcB/s1600/chuunibyou.gif' ,'https://78.media.tumblr.com/28e86413485a973ae859a745a7a5382e/tumblr_o1hf0uK2NL1uapp8co1_500.gif' ,'http://i.imgur.com/pME21N2.gif', 'https://thumbs.gfycat.com/FastNegligibleDuck-max-1mb.gif', 'http://s.orzzzz.com/news/85/c2/586606ec10e31.gif', 'https://data.whicdn.com/images/203117037/original.gif'];
      
             /* if (message.mentions.users.first() === message.author) return message.channel.send(':)'); */ //esta línea es opcional, es si quieres que salga algo cuando se mencione el mismo..
             if (message.mentions.users.first() === message.author) return message.channel.send('c tomo una chocolatada -w-');
              if (message.mentions.users.size < 1) return               message.channel.send({
                  embed: {
                      description: message.author.username + " **se ha tomado una chocolatada** -w-",
                      color: 15105570, //Puedes poner el color de tu preferencia.
                  }.catch(console.error); //Para que mencione a alguien.
              message.channel.send({
                  embed: {
                      description: message.author.username + " **Le dio una chocolatada a** " + user.username + " uwu",
                      color: 15105570, //Puedes poner el color de tu preferencia.
                  }
              })
            }
      if(command === 'kiss'){

        if(cooldown.has(message.author.id)){
          message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
          return;
       }
       //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
       //no pueda utilizar el comando durante 10 segundos.
       cooldown.add(message.author.id);
       
       //Quita al usuario del enfriamiento después de pasar los 10 segundos.
       setTimeout(() => {
         cooldown.delete(message.author.id);
       }, 10000);
      

        let user = message.mentions.users.first();
              const gifs =
                  ['https://i.imgur.com/eisk88U.gif','https://media1.tenor.com/images/5654c7b35e067553e99bb996535c0a75/tenor.gif?itemid=10358833','https://i.pinimg.com/originals/44/16/a8/4416a853b05bb16e88e163286a7950ac.gif','https://i.gifer.com/B82h.gif','https://data.whicdn.com/images/160215214/original.gif','http://25.media.tumblr.com/ea431c278ccd1ae3d1041709a4943b64/tumblr_mpqhwgauaS1swflh7o1_500.gif','http://estamosalaire.com/wp-content/archivos/2016/05/Taiga_x_Ryuuji_kiss.gif','https://media1.tenor.com/images/0de1905e4a8b2bb465d04a1f96df7f85/tenor.gif?itemid=4797281','https://thumbs.gfycat.com/IdioticInnocentColt-size_restricted.gif','https://i.gifer.com/9p3w.gif'];
             /* if (message.mentions.users.first() === message.author) return message.channel.send(':)'); */ //esta línea es opcional, es si quieres que salga algo cuando se mencione el mismo..
             if (message.mentions.users.first() === message.author) return message.channel.send('No te puede besar a ti mismo.. ;-;');
              if (message.mentions.users.size < 1) return message.reply('**Tienes que mencionar a alguien para darle un beso uwu**').catch(console.error); //Para que mencione a alguien.
              message.channel.send({
                  embed: {
                      description: message.author.username + " **Le dio una apasionado beso a** " + user.username + ' uwu♥',
                      color: 15105570, //Puedes poner el color de tu preferencia.
                      image: {
                          url: gifs[Math.floor(gifs.length * Math.random())]  //MathRandom para los gifs, pueden poner el rich embed, pero yo lo dejo así xD
                      }
                  }
              })
 }

 if(command === 'fuck'){
  if(cooldown.has(message.author.id)){
    message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
    return;
 }
  if(message.channel.nsfw == false){
    message.channel.send('El canal tiene que ser __**NSFW**__ para esto 7u7');
  }
  else if(message.channel.nsfw == true){
  let user = message.mentions.users.first();
        const gifs =
            ['http://linea-erotica.xxx/wp-content/uploads/2013/11/053.gif','https://ifl-porn.com/wp-content/uploads/2015/05/tumblr_nm3egib64j1suh97yo1_500.gif','https://steemitimages.com/0x0/https://images.sex.com/images/pinporn/2017/07/27/620/18117446.gif','https://i0.wp.com/inmoodforsex.com/wp-content/uploads/17784971.gif?resize=620%2C345&ssl=1','https://images.sex.com/images/pinporn/2017/07/27/620/18117437.gif','https://images.sex.com/images/pinporn/2016/03/19/620/15262380.gif','https://images.sex.com/images/pinporn/2016/11/28/620/16971367.gif','http://78.media.tumblr.com/e84a1c878e4129c6085aeb2e988fb64c/tumblr_oo0qezSGvH1sshi03o1_500.gif','https://a.im9.eu/orgy-1-gif-group-porn-4.gif','http://naughtyteens.eu/wp-content/uploads/2017/03/tumblr_nog0tiw2uc1u2o0xmo6_500.gif','http://www.pornosexgif.org/wp-content/uploads/2015/12/kucakta-porno-gif.gif','https://i.imgur.com/HoNAC3Y.gif'];
       if (message.mentions.users.first() === message.author) return message.channel.send('No te puedes coger a ti mismo XDDD WTF!?... a no seeer 7u');
        if (message.mentions.users.size < 1) return message.reply('**Tienes que mencionar a alguien para darle amor 7u7**').catch(console.error); //Para que mencione a alguien.
        message.channel.send({
            embed: {
                description: message.author.username + " **Se cogio a **" + user.username + ' 7u',
                color: 15105570,
                image: {
                    url: gifs[Math.floor(gifs.length * Math.random())]
                    
                }
            }
        });
      }
    }
    if(command === 'suicide'){

      if(cooldown.has(message.author.id)){
        message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
        return;
     }
     //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
     //no pueda utilizar el comando durante 10 segundos.
     cooldown.add(message.author.id);
     
     //Quita al usuario del enfriamiento después de pasar los 10 segundos.
     setTimeout(() => {
       cooldown.delete(message.author.id);
     }, 10000);
    

      let user = message.mentions.users.first();
            const gifs =
                ['http://img11.hostingpics.net/pics/773535diaboliklovers.gif','http://24.media.tumblr.com/tumblr_m55szzX9tK1romnmlo1_r1_500.gif','https://i.pinimg.com/originals/03/43/e6/0343e651eded6629041d165f9c0d7cf7.gif','https://media.giphy.com/media/ru08UolwD4xRm/giphy.gif','http://data.whicdn.com/images/107593752/large.gif','https://i.gifer.com/F5Ai.gif','https://i.pinimg.com/originals/a5/f1/96/a5f196464ed42f493b95a600099e83b9.gif','https://media.giphy.com/media/WsWJZcJoxmLUk/giphy.gif','https://media1.tenor.com/images/47892bb88afc132a3afb775988208240/tenor.gif?itemid=5505166','https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif?itemid=5091706','https://pa1.narvii.com/5773/6b54cae1dc28b51d3f5227be910475811254a5f1_hq.gif'];
            message.channel.send({
                embed: {
                    description: message.author.username + " **se suicido, te vamos a extrañar...**",
                    color: 15105570, //Puedes poner el color de tu preferencia.
                    image: {
                        url: gifs[Math.floor(gifs.length * Math.random())]  //MathRandom para los gifs, pueden poner el rich embed, pero yo lo dejo así xD
                    }
                }
            })
}

if(command === 'cry'){

    if(cooldown.has(message.author.id)){
      message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
      return;
   }
   //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
   //no pueda utilizar el comando durante 10 segundos.
   cooldown.add(message.author.id);
   
   //Quita al usuario del enfriamiento después de pasar los 10 segundos.
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
  

    let user = message.mentions.users.first();
          const gifs =
              ['http://images5.fanpop.com/image/photos/31900000/Minene-minene-uryuu-31910556-500-281.gif','https://d.wattpad.com/story_parts/279782491/images/145e7bcef82b3879918104321933.gif','https://data.whicdn.com/images/46186791/original.gif','https://i2.wp.com/thebookwars.ca/wp-content/uploads/2016/12/i-dnt-know.gif','https://data.whicdn.com/images/32413898/original.gif','http://66.media.tumblr.com/2e430af119ca307e7b283e47135b5c81/tumblr_o50d7fV5Ed1v8tshbo1_500.gif','https://i.pinimg.com/originals/0b/52/ce/0b52cee8836e97d3f834cb18922180cb.gif','https://footstepsofagiant.files.wordpress.com/2016/07/anime-couple-cry-gif-favim-com-3637833.gif','https://uploads.spiritfanfiction.com/usuarios/jornal/eu-nao-sou-8577667-040420171652.gif','https://i.pinimg.com/originals/73/b1/3b/73b13bcd2590cd93ca1ca9bbc7f917be.gif','https://i.pinimg.com/originals/f7/7c/4b/f77c4b40ad4064720b950b85d59aaff9.gif','http://fanaru.com/a-certain-scientific-railgun/image/51939-a-certain-scientific-railgun-crying-misaka.gif','https://cdn150.picsart.com/229018434092202.gif','https://pa1.narvii.com/5790/581ae10ebab5467414eb14d38692894c75dd4f5f_hq.gif','https://i.pinimg.com/originals/69/03/37/690337c1590b9b1dfd1228969258b6fc.gif','http://pa1.narvii.com/5937/8d630120c2c2b5a44bb29dd88803181cf6248690_00.gif','http://i0.kym-cdn.com/photos/images/original/001/108/819/45a.gif','https://i.pinimg.com/originals/e8/10/ab/e810abc7b8979bcc8d2b2db33d1676f9.gif','https://em.wattpad.com/03d788da8ce1ba54ac7adef97457eef2312eb449/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6258713068714a414f6e6e7567773d3d2d3532393736303035332e313530663439616462636465363065613633373939373839363936302e676966?s=fit&w=720&h=720','https://vignette.wikia.nocookie.net/anime-arts/images/8/85/Tumblr_m3zd6v4MIQ1qf0jm4o1_500.gif/revision/latest?cb=20130413224113','https://s2.favim.com/orig/151121/anime-ao-haru-ride-black-and-white-crying-Favim.com-3616970.gif','https://avatars.mds.yandex.net/get-pdb/49816/90c6259e-5340-491e-ad6b-23eaf0d71f16/orig','https://i.pinimg.com/originals/3b/99/c3/3b99c394a306d04b8462f3ae781302bf.gif','https://i.gifer.com/C1la.gif'];
          message.channel.send({
              embed: {
                  description: message.author.username + " **...**",
                  color: 15105570, //Puedes poner el color de tu preferencia.
                  image: {
                      url: gifs[Math.floor(gifs.length * Math.random())]  //MathRandom para los gifs, pueden poner el rich embed, pero yo lo dejo así xD
                  }
              }
          })
}

    if(command === 'kill'){

      if(cooldown.has(message.author.id)){
        message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
        return;
     }
     //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
     //no pueda utilizar el comando durante 10 segundos.
     cooldown.add(message.author.id);
     
     //Quita al usuario del enfriamiento después de pasar los 10 segundos.
     setTimeout(() => {
       cooldown.delete(message.author.id);
     }, 10000);
    

      let user = message.mentions.users.first();
            const gifs =
                [,'https://media.giphy.com/media/P8hX7E1ffIOWY/giphy.gif','http://pa1.narvii.com/6434/cb48fa7c5be0cbde406b938fed72c1587b0d0f0b_hq.gif','https://i.gifer.com/7ODW.gif','https://i.pinimg.com/originals/c4/4a/88/c44a88df7c06f5db4ee00ca5ce708fe1.gif','https://vignette.wikia.nocookie.net/akamegakillfanon/images/1/1f/Akame_welcome.gif/revision/latest?cb=20151209114030','https://media1.tenor.com/images/25f853a32137e24b11cd13bc2142f63a/tenor.gif?itemid=7172028','https://media1.tenor.com/images/46051e203deaefc5642916c1eafa54a7/tenor.gif?itemid=3660367'];
           /* if (message.mentions.users.first() === message.author) return message.channel.send(':)'); */ //esta línea es opcional, es si quieres que salga algo cuando se mencione el mismo..
           if (message.mentions.users.first() === message.author) return message.channel.send('M-m-m-men-ciona a-a algui-en.. Porfavor ;-;');
            if (message.mentions.users.size < 1) return message.reply('**M-m-m-men-ciona a-a algui-e-en.. Porfavor ;-;**').catch(console.error); //Para que mencione a alguien.
            message.channel.send({
                embed: {
                    description: message.author.username + " **Ha matado a** " + user.username + ' ;-; tengo miedo',
                    color: 15105570, //Puedes poner el color de tu preferencia.
                    image: {
                        url: gifs[Math.floor(gifs.length * Math.random())]  //MathRandom para los gifs, pueden poner el rich embed, pero yo lo dejo así xD
                    }
                }
            })
}
    if(command === 'amor'){

      if(cooldown.has(message.author.id)){
        message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
        return;
     }
     //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
     //no pueda utilizar el comando durante 10 segundos.
     cooldown.add(message.author.id);
     
     //Quita al usuario del enfriamiento después de pasar los 10 segundos.
     setTimeout(() => {
       cooldown.delete(message.author.id);
     }, 10000);
    

    let users = message.mentions.users.map(m => m.username).join(' y ');
if(!users) return message.channel.send('Mencione a dos usuarios para calcular');
    
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    if(random < 50){
        heard=':broken_heart:';

    }else if(random < 80){
        heard=':sparkling_heart: ';

    }else if(random == 69){
        heard='( ͡° ͜ʖ ͡°) ';

    }else if(random < 101){
        heard=':heart:';

    }
            
const embed = new Discord.RichEmbed()
    .setAuthor('El porcentaje de amor de '+users+' es:')
    .setDescription(heard+' **'+random+' %**'+' '+heard)
    .setColor(0xff4d4d)

message.channel.send({embed});
}

if(command === 'odio'){

  if(cooldown.has(message.author.id)){
    message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
    return;
 }
 //Si no se encuentra dentro del enfriamiento, agrega al usuario para que
 //no pueda utilizar el comando durante 10 segundos.
 cooldown.add(message.author.id);
 
 //Quita al usuario del enfriamiento después de pasar los 10 segundos.
 setTimeout(() => {
   cooldown.delete(message.author.id);
 }, 10000);


let users = message.mentions.users.map(m => m.username).join(' y ');
if(!users) return message.channel.send('Mencione a dos usuarios para calcular');

const random = Math.floor(Math.random() * 100);
let heard = "";

if(random < 50){
    heard=':slight_smile:';

}else if(random < 80){
    heard=':angry:';

}else if(random == 69){
    heard='( ͡° ͜ʖ ͡°)';

}else if(random < 101){
    heard=':rage:';

}

const embed = new Discord.RichEmbed()
.setAuthor('El porcentaje de odio de '+users+' es:')
.setDescription(heard+' **'+random+' %**'+' '+heard)
.setColor(0xff4d4d)

message.channel.send({embed});
}

if(command === "join"){
    let Canalvoz = message.member.voiceChannel;
  if (!Canalvoz || Canalvoz.type !== 'voice') {
  message.channel.send('Necesitas unirte a un canal de voz primero :/').catch(error => message.channel.send(error));

} else if (message.guild.voiceConnection) {
    message.channel.send('Ya estoy conectada en un canal e.e');

} else {
     message.channel.send('Conectando...').then(m => {
          Canalvoz.join().then(() => {

               m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
         }).catch(error => message.channel.send(error));

     }).catch(error => message.channel.send(error));

}}

if(command === "leave"){
if(!Canalvoz){
    message.channel.send('No estoy en un canal de voz.');

} else {
    message.channel.send('Dejando el canal de voz.').then(() => {
        Canalvoz.leave();

    }).catch(error => message.channel.send(error));

  }
}
});
client.login(config.token);     
