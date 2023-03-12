//
// Welcome to Ricky The Raccoon Bot source code!
// For more information about recent updates and commands, see "README.md"
//

console.log("I'm ready!");
const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const bot = new Discord.Client();

bot.login("");

const queue = new Map();

// Ping Check

const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// Bot Activity Status

bot.on("ready", () => {
  bot.user.setStatus("available");
  bot.user.setPresence({
    game: {
      name: ">:3 | $help",
      type: "STREAMING",
      url: "https://www.twitch.tv/monstercat"
    }
  });
});

// Set the prefix

const prefix = "$";
bot.on("message", message => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
  // Check if content of message is "$ping"
  if (message.content.toLowerCase().startsWith(prefix + "ping")) {
    // Call .send() on the channel object the message was sent in
    message.channel.send("h");
  }
});

// Last updated

bot.on("message", message => {
  if (message.author == bot.user) {
    return;
  }
  if (message.content.toLowerCase().startsWith(prefix + "update")) {
    message.channel.send("> **Ricky The Raccoon bot was last updated on** `2019-02-09`");
  }
});

// Give roles when joins server

bot.on('serverNewMember', function(server, user) {
     user.addTo(server.roles.get("⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯", "⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯"));
});

// Messages

bot.on("message", message => {
  // Prevent bot from responding to its own messages
  if (message.author == bot.user) {
    return;
  }

  if (message.content.toLowerCase().startsWith(prefix + "help")) {
    message.channel.send("> You Called for help, but nobody came");
  }
  // Repeat what the user says
  if (message.content.toLowerCase().startsWith(prefix + "say")) {
    message.channel.send(message.author.username + " says: " + message.content.replace("+say ", "")
    );
  }
  // Send a message through the bot
  if (message.content.toLowerCase().startsWith(prefix + "send")) {
    message.delete(1);
    message.channel.send(message.content.replace("$send ", ""));
  }

  // Colors roles Commands

  // Show all available colors
  if (
    message.content.toLowerCase().startsWith(prefix + "colors") ||
    message.content.toLowerCase().startsWith(prefix + "colorslist")
  ) {
    const exampleEmbed = new Discord.RichEmbed()
      .attachFiles(["embed/colors.png"])
      .setImage("attachment://colors.png");
    message.channel.send(exampleEmbed);
  }

  // Rainbow (Since 2019-08-24, Rainbow bot doesn't works anymore, this command will be remain until further function)
  if (message.content.toLowerCase().startsWith(prefix + "iam " + "rainbow")) {
    message.channel
      .send("``It doesn't works anymore, you frick!!``")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "rainbow")
  ) {
    message.channel
      .send("``It doesn't works anymore, you frick!!``")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Light Red
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "light red") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "1")
  ) {
    message.member.addRole("608191366090063892");
    message.channel
      .send(message.author.username +" enjoy your <@&608191366090063892> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "light red") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "1")
  ) {
    message.member.removeRole("608191366090063892");
    message.channel
      .send("<@&608191366090063892> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Red
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "red") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "2")
  ) {
    message.member.addRole("519029920530169857");
    message.channel
      .send(message.author.username + " enjoy your <@&519029920530169857> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "red") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "2")
  ) {
    message.member.removeRole("519029920530169857");
    message.channel
      .send("<@&519029920530169857> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Satan Red
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "satan red") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "3")
  ) {
    message.member.addRole("608084225115160616");
    message.channel
      .send(message.author.username + " enjoy your <@&608084225115160616> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "satan red") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "3")
  ) {
    message.member.removeRole("608084225115160616");
    message.channel
      .send("<@&608084225115160616> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Deep Orange
	if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "deep orange") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "4")
  ) {
    message.member.addRole("519052968155283456");
    message.channel
      .send(message.author.username + " enjoy your <@&519052968155283456> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "deep orange") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "4")
  ) {
    message.member.removeRole("519052968155283456");
    message.channel
      .send("<@&519052968155283456> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Orange
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "orange") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "5")
  ) {
    message.member.addRole("519031205656788993");
    message.channel
      .send(
        message.author.username + " enjoy your <@&519031205656788993> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "orange") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "5")
  ) {
    message.member.removeRole("519031205656788993");
    message.channel
      .send("<@&519031205656788993> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Brown
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "brown") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "6")
  ) {
    message.member.addRole("519036336351477761");
    message.channel
      .send(message.author.username + " enjoy your <@&519036336351477761> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "brown") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "6")
  ) {
    message.member.removeRole("519036336351477761");
    message.channel
      .send("<@&519036336351477761> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Piss Yellow
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "piss yellow") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "7")
  ) {
    message.member.addRole("608084227485073418");
    message.channel
      .send(message.author.username + " enjoy your <@&608084227485073418> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "piss yellow") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "7")
  ) {
    message.member.removeRole("608084227485073418");
    message.channel
      .send("<@&608084227485073418> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Yellow
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "yellow") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "8")
  ) {
    message.member.addRole("519031288422727745");
    message.channel
      .send(message.author.username + " enjoy your <@&519031288422727745> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "yellow") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "8")
  ) {
    message.member.removeRole("519031288422727745");
    message.channel
      .send("<@&519031288422727745> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Light Yellow
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "light yellow") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "9")
  ) {
    message.member.addRole("608084233327476737");
    message.channel
      .send(message.author.username + " enjoy your <@&608084233327476737> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "light yellow") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "9")
  ) {
    message.member.removeRole("608084233327476737");
    message.channel
      .send("<@&608084233327476737> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Lime
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "lime") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "10")
  ) {
    message.member.addRole("519031608997707797");
    message.channel
      .send(message.author.username + " enjoy your <@&519031608997707797> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "lime") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "10")
  ) {
    message.member.removeRole("519031608997707797");
    message.channel
      .send("<@&519031608997707797> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Mint Green
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "mint green") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "11")
  ) {
    message.member.addRole("608084229930090526");
    message.channel
      .send(message.author.username + " enjoy your <@&608084229930090526> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "mint green") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "11")
  ) {
    message.member.removeRole("608084229930090526");
    message.channel
      .send("<@&608084229930090526> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Light Green
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "light green") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "12")
  ) {
    message.member.addRole("519052647278444545");
    message.channel
      .send(message.author.username + " enjoy your <@&519052647278444545> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "light green") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "12")
  ) {
    message.member.removeRole("519052647278444545");
    message.channel
      .send("<@&519052647278444545> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Green
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "green") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "13")
  ) {
    message.member.addRole("519031954188795936");
    message.channel
      .send(message.author.username + " enjoy your <@&519031954188795936> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "green") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "13")
  ) {
    message.member.removeRole("519031954188795936");
    message.channel
      .send("<@&519031954188795936> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Tree Green
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "tree green") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "14")
  ) {
    message.member.addRole("608084229825364014");
    message.channel
      .send(message.author.username + " enjoy your <@&608084229825364014> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "tree green") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "14")
  ) {
    message.member.removeRole("608084229825364014");
    message.channel
      .send("<@&608084229825364014> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Aquamarine
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "aquamarine") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "15")
  ) {
    message.member.addRole("519032187815985152");
    message.channel
      .send(message.author.username + " enjoy your <@&519032187815985152> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "aquamarine") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "15")
  ) {
    message.member.removeRole("519032187815985152");
    message.channel
      .send("<@&519032187815985152> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Teal
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "teal") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "16")
  ) {
    message.member.addRole("519052208080420865");
    message.channel
      .send(message.author.username + " enjoy your <@&519052208080420865> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "teal") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "16")
  ) {
    message.member.removeRole("519052208080420865");
    message.channel
      .send("<@&519052208080420865> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Cyan
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "cyan") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "17")
  ) {
    message.member.addRole("519032473561071675");
    message.channel
      .send(message.author.username + " enjoy your <@&519032473561071675> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "cyan") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "17")
  ) {
    message.member.removeRole("519032473561071675");
    message.channel
      .send("<@&519032473561071675> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Pastel Cyan
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "pastel cyan") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "18")
  ) {
    message.member.addRole("608087343030730753");
    message.channel
      .send(message.author.username + " enjoy your <@&608087343030730753> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "pastel cyan") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "18")
  ) {
    message.member.removeRole("608087343030730753");
    message.channel
      .send("<@&608087343030730753> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Light Blue
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "light blue") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "19")
  ) {
    message.member.addRole("519032676100079626");
    message.channel
      .send(message.author.username + " enjoy your <@&519032676100079626> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "light blue") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "19")
  ) {
    message.member.removeRole("519032676100079626");
    message.channel
      .send("<@&519032676100079626> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Discord Blue
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "discord blue") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "20")
  ) {
    message.member.addRole("608087654420185104");
    message.channel
      .send(message.author.username + " enjoy your <@&608087654420185104> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "discord blue") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "20")
  ) {
    message.member.removeRole("608087654420185104");
    message.channel
      .send("<@&608087654420185104> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Blue
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "blue") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "21")
  ) {
    message.member.addRole("519033502390550530");
    message.channel
      .send(message.author.username + " enjoy your <@&519033502390550530> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "blue") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "21")
  ) {
    message.member.removeRole("519033502390550530");
    message.channel
      .send("<@&519033502390550530> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Navy Blue
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "navy blue") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "22")
  ) {
    message.member.addRole("608084227027632128");
    message.channel
      .send(message.author.username + " enjoy your <@&608084227027632128> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "navy blue") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "22")
  ) {
    message.member.removeRole("608084227027632128");
    message.channel
      .send("<@&608084227027632128> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Indigo
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "indigo") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "23")
  ) {
    message.member.addRole("519034578866929674");
    message.channel
      .send(message.author.username + " enjoy your <@&519034578866929674> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "indigo") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "23")
  ) {
    message.member.removeRole("519034578866929674");
    message.channel
      .send("<@&519034578866929674> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Deep Purple
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "deep purple") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "24")
  ) {
    message.member.addRole("519053870425702430");
    message.channel
      .send(message.author.username + " enjoy your <@&519053870425702430> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "deep purple") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "24")
  ) {
    message.member.removeRole("519053870425702430");
    message.channel
      .send("<@&519053870425702430> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Purple
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "purple") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "25")
  ) {
    message.member.addRole("519033808180477952");
    message.channel
      .send(message.author.username + " enjoy your <@&519033808180477952> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "purple") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "25")
  ) {
    message.member.removeRole("519033808180477952");
    message.channel
      .send("<@&519033808180477952> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Mauve
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "mauve") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "26")
  ) {
    message.member.addRole("608084233625272332");
    message.channel
      .send(message.author.username + " enjoy your <@&608084233625272332> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "mauve") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "26")
  ) {
    message.member.removeRole("608084233625272332");
    message.channel
      .send("<@&608084233625272332> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Magenta
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "magenta") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "27")
  ) {
    message.member.addRole("519033938170216458");
    message.channel
      .send(message.author.username + " enjoy your <@&519033938170216458> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "magenta") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "27")
  ) {
    message.member.removeRole("519033938170216458");
    message.channel
      .send("<@&519033938170216458> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Hot Pink
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "hot pink") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "28")
  ) {
    message.member.addRole("519034420552794122");
    message.channel
      .send(message.author.username + " enjoy your <@&519034420552794122> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "hot pink") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "28")
  ) {
    message.member.removeRole("519034420552794122");
    message.channel
      .send("<@&519034420552794122> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Pink
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "pink") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "29")
  ) {
    message.member.addRole("519034029907902484");
    message.channel
      .send(message.author.username + " enjoy your <@&519034029907902484> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "pink") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "29")
  ) {
    message.member.removeRole("519034029907902484");
    message.channel
      .send("<@&519034029907902484> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Pastel Pink
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "pastel pink") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "30")
  ) {
    message.member.addRole("608087340434325504");
    message.channel
      .send(message.author.username + " enjoy your <@&608087340434325504> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "pastel pink") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "30")
  ) {
    message.member.removeRole("608087340434325504");
    message.channel
      .send("<@&608087340434325504> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Ivory
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "ivory") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "31")
  ) {
    message.member.addRole("608086842428096532");
    message.channel
      .send(message.author.username + " enjoy your <@&608086842428096532> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "ivory") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "31")
  ) {
    message.member.removeRole("608086842428096532");
    message.channel
      .send("<@&608086842428096532> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // White
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "white") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "32")
  ) {
    message.member.addRole("519034029907902484");
    message.channel
      .send(message.author.username + " enjoy your <@&519034029907902484> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "white") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "32")
  ) {
    message.member.removeRole("519034029907902484");
    message.channel
      .send("<@&519034029907902484> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Light Gray
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "light gray") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "32")
  ) {
    message.member.addRole("519036592254615562");
    message.channel
      .send(message.author.username + " enjoy your <@&519036592254615562> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "light gray") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "32")
  ) {
    message.member.removeRole("519036592254615562");
    message.channel
      .send("<@&519036592254615562> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Blue Gray
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "blue gray") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "33")
  ) {
    message.member.addRole("519055342290862080");
    message.channel
      .send(message.author.username + " enjoy your <@&519055342290862080> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "blue gray") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "33")
  ) {
    message.member.removeRole("519055342290862080");
    message.channel
      .send("<@&519055342290862080> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Gray
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "gray") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "34")
  ) {
    message.member.addRole("519036758416031745");
    message.channel
      .send(message.author.username + " enjoy your <@&519036758416031745> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "gray") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "34")
  ) {
    message.member.removeRole("519036758416031745");
    message.channel
      .send("<@&519036758416031745> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Black
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "black") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "35")
  ) {
    message.member.addRole("519034171058946048");
    message.channel
      .send(message.author.username + " enjoy your <@&519034171058946048> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "black") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "35")
  ) {
    message.member.removeRole("519034171058946048");
    message.channel
      .send("<@&519034171058946048> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Invisible
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "invisible") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "36")
  ) {
    message.member.addRole("608080962043117588");
    message.channel
      .send(message.author.username + " enjoy your <@&608080962043117588> color role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "invisible") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "36")
  ) {
    message.member.removeRole("608080962043117588");
    message.channel
      .send("<@&608080962043117588> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  //PRONOUNS ROLES
  
  // He / Him
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "man") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "boy") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "he") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "him")
  ) {
    message.member.addRole("624365203399770150");
    message.channel
      .send(message.author.username + " enjoy your <@&624365203399770150> pronoun role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "man") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "boy") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "he") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "him")
  ) {
    message.member.removeRole("624365203399770150");
    message.channel
      .send("<@&624365203399770150> pronoun role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // She / Her
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "woman") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "girl") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "she") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "her")
  ) {
    message.member.addRole("624365743219408915");
    message.channel
      .send(message.author.username + " enjoy your <@&624365743219408915> pronoun role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "woman") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "girl") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "she") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "her")
  ) {
    message.member.removeRole("624365743219408915");
    message.channel
      .send("<@&624365743219408915> pronoun role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // They / Their
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "neutral") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "genderless") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "they") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "their")
  ) {
    message.member.addRole("624365748965343244");
    message.channel
      .send(message.author.username + " enjoy your <@&624365748965343244> pronoun role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "neutral") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "genderless") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "they") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "their")
  ) {
    message.member.removeRole("624365748965343244");
    message.channel
      .send("<@&624365748965343244> pronoun role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // GROUPS ROLES
  
  // Midnight Cult Flicks (Cult Movie Night)
  if (message.content.toLowerCase().startsWith(prefix + "iam " + "cult")) 
  {
    message.member.addRole("622168721498177587");
    message.channel
      .send(message.author.username + " enjoy your <@&622168721498177587> role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (message.content.toLowerCase().startsWith(prefix + "iamnot " + "cult")) 
  {
    message.member.removeRole("622168721498177587");
    message.channel
      .send("<@&622168721498177587> role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // Neocities People
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "nc") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "neocities")
  ) {
    message.member.addRole("625785658899693608");
    message.channel
      .send(message.author.username + " enjoy your <@&625785658899693608> role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "nc") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "neocities")
  ) {
    message.member.removeRole("625785658899693608");
    message.channel
      .send("<@&625785658899693608> role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
  // News Subscriber (Announcements ping role)
  if (
    message.content.toLowerCase().startsWith(prefix + "iam " + "news") ||
    message.content.toLowerCase().startsWith(prefix + "iam " + "newsletter")
  ) {
    message.member.addRole("628767206989103134");
    message.channel
      .send(message.author.username + " enjoy your <@&628767206989103134> role!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "news") ||
    message.content.toLowerCase().startsWith(prefix + "iamnot " + "newsletter")
  ) {
    message.member.removeRole("628767206989103134");
    message.channel
      .send("<@&628767206989103134> role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  
});

// Music Commands

bot.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const serverQueue = queue.get(message.guild.id);

	if (
    message.content.toLowerCase().startsWith(prefix + "play") ||
    message.content.includes(prefix + "p")
  ) {
		execute(message, serverQueue);
		return;
	} else if (
    message.content.toLowerCase().startsWith(prefix + "skip") ||
    message.content.includes(prefix + "k")
  ) {
		skip(message, serverQueue);
		return;
	} else if (
    message.content.toLowerCase().startsWith(prefix + "stop") ||
    message.content.includes(prefix + "s")
  ) {
		stop(message, serverQueue);
		return;
	} else { }
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and speak in your voice channel!');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return message.channel.send('There is no song that I could skip!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}
