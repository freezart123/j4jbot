const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`Savcı Official | Bot Giriş Yaptı!`);
});

let davet = "Sunucu Davet Linki"; //Sunucunuzun Davet Linki.
let sunucuid = "J4J Sunucu ID"; //J4J Sunucusunun ID Numarası.
let kanalid = "J4J Kanal ID"; //J4J Sunucusundaki, J4J Kanalın ID Numarası.
let token = "Buraya Token"; //Hesap Tokeninizi Yazın

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let fyukas = await data.get(msg.author.id)
        
        if (fyukas === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("J4J Yapıcaksan") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.      
          await sleep(2000)
          await msg.channel.send(`** ${davet} ** sunucum bu. Gel gelicem.`)      
      }
      }
    }
  }
})


client.on("guildCreate", savcibey => {
  sleep(1000);
  if (
    savcibey.id=== sunucuid || 
    savcibey.id === sunucuid
  ) {
    
  } else {
    savcibey.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get(kanalid) 


       a.send("J4j dm gelin türkler bot değilim")


      }, 30000);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get(kanalid)


       a.send("J4J Yapıcaklar Dm!")


      }, 60000);
})

client.login(token)
