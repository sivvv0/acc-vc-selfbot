const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require("@discordjs/voice");

const client = new Client({ checkUpdate: false });

const config = require(`${process.cwd()}/config.json`);

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    await joinVC(client, config);
});

client.on('voiceStateUpdate', async (oldState, newState) => {
    const oldVoice = oldState.channelId;
    const newVoice = newState.channelId;

    if (oldVoice !== newVoice) {
        if (!oldVoice) {
            // empty
        } else if (!newVoice) {
            if (oldState.member.id !== client.user.id) return;
            await joinVC(client, config);
        } else {
            if (oldState.member.id !== client.user.id) return;
            if (newVoice !== config.Channel) {
                await joinVC(client, config);
            }
        }
    }
});



client.on('ready', () => {
  PingChannel = client.guilds.cache.get("") // channel id spam 

});
const host = "";  // your id
var PingChannel;
var myinterval;

client.on('messageCreate', msg=>{
    if(msg.author.id  !== `${host}`){
      return;
    }
    else if(msg.content.includes === "?start"){
      msg.delete()
      myinterval = setInterval(function(){
        PingChannel.send('<@&707036166486097990>')
      }, 1500)
    }
    else if(msg.content.includes === "?stop"){
      clearInterval(myinterval)
      msg.reply('pinging successfully stopped!')
    }
});


















client.login(config.Token);

async function joinVC(client, config) {
    const guild = client.guilds.cache.get(config.Guild);
    const voiceChannel = guild.channels.cache.get(config.Channel);
    const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: guild.id,
        adapterCreator: guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute: true
    });
}
