const Discord = require('discord.js-selfbot');
const config = require('./config.json');

const client = new Discord.Client();

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    await joinVC(client, config);
});

client.on('voiceStateUpdate', async (oldState, newState) => {
    const oldVoice = oldState.channelID;
    const newVoice = newState.channelID;

    if (oldVoice !== newVoice) {
        if (!oldVoice) {
            // empty
        } else if (!newVoice) {
            await joinVC(client, config);
        } else {
            await joinVC(client, config);
        }
    }
});

client.login(config.Token);

async function joinVC(client, config) {
    const guild = await client.guilds.cache.get(config.Guild);
    await guild.channels.cache.get(config.Channel).join()
        .then(connection => {
            connection.voice.setSelfDeaf(false);
            connection.voice.setSelfMute(true);
        })
        .catch(error => console.error(error));
}