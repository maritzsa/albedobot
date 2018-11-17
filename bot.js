const discord = require ('discord.js');

var client = new discord.Client();
var fs = require("fs");
var commandsList = fs.readFileSync ("./COMMANDS.txt", {"encoding": "utf-8"});

const token = "NTEzMDYyNTYwNDA5NDUyNTc5.DtCipQ.ZputuI8BN3MftZJhSaaEQCQ4L_0";

Albedo = require ("./aetherbot");

client.on ("ready", () => {
    console.log ("ready!");

    client.user.setActivity ("with My Wings");
});

const prefix = "a!"
client.on ("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith (prefix + "hello")) {
            message.reply ('Hello! *bows*');
    }
    if (message.content.startsWith (prefix + "creator")) {
            message.reply ('My creator is Maritza-sama');
    }


    if (message.content.startsWith (prefix + "gif")) {
        number = 33;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./albedogifs/" + imageNumber + ".gif"]} )
    }

        
    if (message.content.startsWith (prefix + "help")) {
        message.channel.send (commandsList)
    }

    if (message.content.includes ("Love")) {
        message.channel.send ('**Love! Love! LOVE! . . .**');
    }

    if (message.content.includes ("love")) {
        message.channel.send ('**Love! Love! LOVE! . . .**');
    }

    if (message.content.startsWith (prefix + "albedo")) {
        number = 85;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./albedopics/" + imageNumber + ".jpg"]} )  
    }



});

client.login (process.env.BOT_TOKEN);
