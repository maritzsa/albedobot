const discord = require ('discord.js');

var client = new discord.Client();

var albpics = ["https://imgur.com/n5FCixA", "https://imgur.com/bpscZJ3", "https://imgur.com/9xfxYe8", "https://imgur.com/awJzp63", "https://imgur.com/rCCOigd", 
"https://imgur.com/ImAuYEN", "https://imgur.com/UDTUEMl", "https://imgur.com/PFlAPbD", "https://imgur.com/I8yzLC1", "https://imgur.com/NXprUoa", "https://imgur.com/M9eXEK0", "https://imgur.com/hPBvwE1",
"https://imgur.com/3YGC6vs", "https://imgur.com/NsQRdgE", "https://imgur.com/89V9cpb", "https://imgur.com/SH5ySU4", "https://imgur.com/ZcorsAU", "https://imgur.com/8NkRe1u",
"https://imgur.com/ONzxYRv", "https://imgur.com/TEslBnV", "https://imgur.com/Gx6by7D", "https://imgur.com/UXSQ8dl", "https://imgur.com/Euwjy0l", "https://imgur.com/xafpCQt",
"https://imgur.com/zEIsKTc", "https://imgur.com/QElnQRc", "https://imgur.com/6k4uCmJ", "https://imgur.com/hDzTcn4", "https://imgur.com/B2MiW06", "https://imgur.com/DlcoZnX",
"https://imgur.com/0mwmppS", "https://imgur.com/PeSNAJY", "https://imgur.com/rXn9EbJ", "https://imgur.com/BAvtQs0", "https://imgur.com/1JRdjYL", "https://imgur.com/u7JREAY",
"https://imgur.com/7phBd2X", "https://imgur.com/8zl0suw", "https://imgur.com/akXFFIj", "https://imgur.com/E5ufaIq", "https://imgur.com/wzaABap", "https://imgur.com/vQoy9Ip", 
"https://imgur.com/nkCZeAu", "https://imgur.com/JPHiNSV", "https://imgur.com/TvvhScv", "https://imgur.com/JafS7RY", "https://imgur.com/jZ8B0iZ", "https://imgur.com/cwJXVsc",
"https://imgur.com/gUUJst2", "https://imgur.com/tFjKLA3", "https://imgur.com/hJtz2ba", "https://imgur.com/cpiUms0", "https://imgur.com/TOTyj8E", "https://imgur.com/4oogKLm",
"https://imgur.com/EFPowuo", "https://imgur.com/9obKiq8", "https://imgur.com/6Zakw8t", "https://imgur.com/hBcByTM", "https://imgur.com/NAF9VZ8", "https://imgur.com/RYV5gAP",
"https://imgur.com/cGRDWUn", "https://imgur.com/oHULjj0", "https://imgur.com/AfAOEvP", "https://imgur.com/rigE3Ax", "https://imgur.com/AdFzA2x", "https://imgur.com/kqh72TX",
"https://imgur.com/bw3z5zQ", "https://imgur.com/B0UwIWK", "https://imgur.com/m6PbIrg", "https://imgur.com/S93dBmq", "https://imgur.com/bNX3Yaf", "https://imgur.com/IeGoOvP",
"https://imgur.com/yeMNakl", "https://imgur.com/gxJgNPB", "https://imgur.com/lsKu6zm", "https://imgur.com/HWqAAg3", "https://imgur.com/hx5cAbf", "https://imgur.com/YsHlFZM",
"https://imgur.com/FfsDkph", "https://imgur.com/FZehD2t", "https://imgur.com/E1EaWp6", "https://imgur.com/s6yI0uw", "https://imgur.com/rj14oaO", "https://imgur.com/sLfPJP8",
"https://imgur.com/fFk6dAB", "https://imgur.com/Qdjrxsg", "https://imgur.com/4vdKrXh", "https://imgur.com/jp9rJUl", "https://imgur.com/27omvgP", "https://imgur.com/CbN9pjR",
"https://imgur.com/h7Kk9kP", "https://imgur.com/PS27PQN", "https://imgur.com/F3DPkO5", "https://imgur.com/IZU4M77", "https://imgur.com/vGZFGca", "https://imgur.com/334odvD", "https://imgur.com/jbrz3Pr",
"https://imgur.com/tZeEESw", "https://imgur.com/OZ9RHNO", "https://imgur.com/KjPcRyW", "https://imgur.com/ves3otS", "https://imgur.com/0lnJt4X", "https://imgur.com/Eh7vMPU",
"https://imgur.com/7ayFmHB", "https://imgur.com/2XzSGKm", "https://imgur.com/S2YGMKN", "https://imgur.com/otyVIUN", "https://imgur.com/tNdwASa", "https://imgur.com/dUnkacx",
"https://imgur.com/MDF3FCW", "https://imgur.com/R0pO5DB", "https://imgur.com/owjwlyK", "https://imgur.com/cpN82je", "https://imgur.com/wnhs2By", "https://imgur.com/7xxCxhL",
"https://imgur.com/1N9Mwds", "https://imgur.com/exHv3EB", "https://imgur.com/BZuRTj2", "https://imgur.com/7447Xln", "https://imgur.com/taoN6VV", "https://imgur.com/W9Fwl3Z", 
"https://imgur.com/hGJCHrQ", "https://imgur.com/Bvnbfm1", "https://imgur.com/wNX9zCF", "https://imgur.com/5FudpbM", "https://imgur.com/ZqKIQns", "https://imgur.com/E81oxfl",
"https://imgur.com/2q2pCat", "https://imgur.com/fssjHek", "https://imgur.com/3UYzqzH", "https://imgur.com/cMRyVxh", "https://imgur.com/Ka7PqcZ",
"https://imgur.com/KnNEdCB", "https://imgur.com/lhP7sN7", "https://imgur.com/eMtEe80", "https://imgur.com/BiVzDCI", "https://imgur.com/CoJjWQr" ]; 

var albgifs = ["https://imgur.com/MMZZCtm", "https://imgur.com/eeg3oWk", "https://imgur.com/Pd3C2Nb", "https://imgur.com/2TNZ83I", "https://imgur.com/XfFOYKi", "https://imgur.com/dRMqwyt",
"https://imgur.com/oXMcoTo", "https://imgur.com/NoxveOG", "https://imgur.com/kVBmgSj", "https://imgur.com/XxWBzcV", "https://imgur.com/Nm3Pd05",
"https://imgur.com/6yNKqQ0", "https://imgur.com/zpCFNEb", "https://imgur.com/KkkWzVp", "https://imgur.com/J2ro9yo", "https://imgur.com/5vNqg2n", "https://imgur.com/8UTpYXI", "https://imgur.com/0f2V3oF",
"https://imgur.com/toCgCcr", "https://imgur.com/ebjlKTK", "https://imgur.com/8t6o88i", "https://imgur.com/P5SAAIJ", "https://imgur.com/I0BtUUZ", "https://imgur.com/nqOIrkJ", "https://imgur.com/9sp59Vr",
"https://imgur.com/ednnay4", "https://imgur.com/IEt0il8", "https://imgur.com/zMrSnYK", "https://imgur.com/J37Rhoe", "https://imgur.com/VsKr91a" ];

var alblewd = ["https://imgur.com/tK33HpW", "https://imgur.com/LBMwjPp", "https://imgur.com/LBMwjPp", "https://imgur.com/1EsiwyY", "https://imgur.com/EEXOuuR", "https://imgur.com/MIl0Xsh",
"https://imgur.com/oWoVtva", "https://imgur.com/iZVK9VD", "https://imgur.com/MJqVCH4", "https://imgur.com/720BUNz", "https://imgur.com/rtCnDuA", "https://imgur.com/GBjQQB3", 
"https://imgur.com/0Taas1a", "https://imgur.com/1NQHZj1", "https://imgur.com/Sq3wzpI", "https://imgur.com/WIGU79o", "https://imgur.com/TIGKuwZ", "https://imgur.com/ggY9a8R",
"https://imgur.com/Vgy8sNJ", "https://imgur.com/1gmt9Rm", "https://imgur.com/GRYOliH", "https://imgur.com/9Db8HVl", "https://imgur.com/tfojit6", "https://imgur.com/UNNdSVy",
"https://imgur.com/kVEt0CY", "https://imgur.com/40FDUyi", "https://imgur.com/M3rQSS3", "https://imgur.com/KPRxHyi", "https://imgur.com/ZO51Q59", "https://imgur.com/OzacceV",
"https://imgur.com/1uTOAzd", "https://imgur.com/lHpGkdy", "https://imgur.com/2QWYcvW", "https://imgur.com/MKA0fCN", "https://imgur.com/yzmYL1p", "https://imgur.com/EumiPrl",
"https://imgur.com/SFqUN4m", "https://imgur.com/DG6hjBf", "https://imgur.com/ED8L1rP", "https://imgur.com/YzNlEEo", "https://imgur.com/fn0ppcA", "https://imgur.com/ghZ7qmA",
"https://imgur.com/GcxDwEW", "https://imgur.com/2nFhjCh", "https://imgur.com/4l05ktw", "https://imgur.com/E3cJhNE", "https://imgur.com/VIwj6MO", "https://imgur.com/twZkedD",
"https://imgur.com/bQktB6C", "https://imgur.com/jttflCB", "https://imgur.com/IlR67C7", "https://imgur.com/38wRYl1", "https://imgur.com/zdUk90Z", "https://imgur.com/adqFQ18",
"https://imgur.com/bmOIWIz", "https://imgur.com/FVYbytF", "https://imgur.com/VQtChSr", "https://imgur.com/M5H7CjY", "https://imgur.com/mrdaezi", "https://imgur.com/GlJ0pkj",
"https://imgur.com/brM4hb2", "https://imgur.com/I4EaFfq", "https://imgur.com/Pdh2uj1", "https://imgur.com/ZQGmhQd", "https://imgur.com/mYeh1CM", "https://imgur.com/ahLgTuk",
"https://imgur.com/Bu8wncb", "https://imgur.com/gsfLwrB", "https://imgur.com/F6mdvHv", "https://imgur.com/9phxMwl", "https://imgur.com/SdKyZY1", "https://imgur.com/Tmn7uO5",
"https://imgur.com/dDp76ZZ", "https://imgur.com/97GxnlO", "https://imgur.com/KWbFvc1", "https://imgur.com/KgRBBEv", "https://imgur.com/9wLKOQJ", "https://imgur.com/LbkXJVF",
"https://imgur.com/Pjn9EMg", "https://imgur.com/pnFShje", "https://imgur.com/KLMnVe7", "https://imgur.com/FLlYCCW", "https://imgur.com/syCo6QI", "https://imgur.com/4hvRuNJ",
"https://imgur.com/N5Xs6s9", "https://imgur.com/SPAowkM", "https://imgur.com/HJzlMQQ", "https://imgur.com/Ub7XR4n", "https://imgur.com/OJTf43a", "https://imgur.com/4O3ilzn" ];

client.on ("ready", () => {
    console.log ("ready!");

    client.user.setActivity ("with My Wings");
});

const prefix = "a!"
client.on ("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith (prefix + "hello")) {
            message.reply ('Hello! *bows*') + message.channel.send ("https://imgur.com/6kRYRZu"); 
    }
    if (message.content.startsWith (prefix + "creator")) {
            message.reply ('My creator is Maritza-sama. You can contact him in this server https://discord.gg/EghbQF4') ;
    }


    if (message.content.startsWith (prefix + "gif")) {
        number = 30;
        link = albgifs[Math.floor (Math.random() * (number - 1 + 1)) ];
        message.channel.send (link);
    }

    if (message.content.startsWith (prefix + "help")) {

        const embed = new discord.RichEmbed()
            .setColor(0x8415BC)
        

        embed.setTitle ('**MY COMMANDS:**')
        embed.addField ('**a!help**', 'A list of my commands')
        embed.addField ('**a!creator**', 'Name of my creator and link to the support server')
        embed.addField ('**a!hello**', 'Hello!')
        embed.addField ('**a!albedo**', 'Random picked images of me from 130+ images :innocent:')
        embed.addField ('**a!gif**', 'Cute, random gifs of me :heart:' )
        embed.addField ('**a!lewd**', 'Random picked NSFW images of me :underage: :flushed:' )

        embed.setFooter ("Hope I served you well")


        message.author.send ({embed});
        message.channel.send ({embed: {
            color: 0x8415BC,
            description: '**CHECK YOUR DMs!**' + message.author
            
        }});
    
    }      

    if (message.content.includes ("Love") || (message.content.includes ("love"))) {
        message.channel.send ('**Love! Love! LOVE! . . .**') + message.channel.send ("https://imgur.com/bPomYoz");
    }

  

    if (message.content.startsWith (prefix + "lewd")) {
        number = 90;
        link = alblewd[Math.floor (Math.random() * (number - 1 + 1)) ];      
        message.channel.send (link);
    }

    if (message.content.startsWith (prefix + "albedo")) {
        number = 138;
        link = albpics[Math.floor (Math.random() * (number - 1 + 1)) ];
        message.channel.send (link);
    }

});

client.login (process.env.token);
