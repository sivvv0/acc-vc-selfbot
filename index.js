const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require("@discordjs/voice");

const client = new Client({ checkUpdate: false });

const config = require(`${process.cwd()}/config.json`);

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    await joinVC(client, config);
});
var facts = ['ProBot is a highly configurable, multipurpose bot that offers features like image greeting', 
'detailed logs, social commands, moderation, self-assignable roles',
'social media notifications, and protection for your server.',
'Welcome to the ProBot Docs!',
'Dashboard Your One-Stop-Shop for Server Management',
'Frequently Asked Questions',
'Custom Welcome and Goodbye Messages for Engaging Discord Server Management',
'MODULES Self-Assignable Roles',
'Easily create embeds for your server!',
'Level System',
'1',
'1525',
 '2',
 'hwav12',
 '3',
 'wkab1627',
 'r4',
 'wis18263',
 'd5',
 '@2/6',
 'dalal.s1',
 'y6',
 '@62?gab',
 'dalal-s1',
 'sivan-s1',
 '99d423',
 'd8-bass',
'sets the channel where Carl-bot will log things such as message deletions, name changes, role updates and a lot more which you can find later on in this documentation.',
'This guide will cover everything you need to do to get started with the basics of what carlbot offers.',
'Use the Dashboard to configure the bot easily without the need to use any commands.',
'Additionally, the bot uses converters which makes specifying roles, ',
'This argument is optional so you can either use foo or bar, or don’t specify it at all',
'Our documentation provides comprehensive explanations on how to use and configure each feature of ProBot, as well as troubleshooting tips for any issues that may arise.',
'Easily navigate to a specific module by clicking its name in the sidebar on the left. Each module has its own configuration page.',
'<foos...> This argument is mandatory and you can specify more than one',
'Each category of commands has their own page which can be found on the sidebar.',
'All ProBot commands have a dedicated page with usage examples and information. Check out our commands page for more details.',
'Step by Step to invite ProBot']
client.on('ready', () => {
  let channel = client.channels.cache.get('1107036287397011527')
  setInterval(function() {
    var fact = Math.floor(Math.random() * facts.length)
    channel.send(facts[fact])
  }, 60000)
})
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
client.login(config.Token);
// Copyright by sivvv0
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
