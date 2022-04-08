const {Client, Intents} = require('discord.js');
const client = new Client({intents:[Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES]});

client.on('ready',() =>{
    console.log("im ready");
});

const activities = [
    "Text1",
    "Text2",
    "Text3",
    "Text4"
];

client.on('ready',() =>{
    setInterval(() => {
        const random = Math.floor(Math.random() * (activities.length-1)+1);
        const showactivities = activities[random];

        client.user.setActivity(showactivities);
    }, 5000);  

});

client.login('Your token');
