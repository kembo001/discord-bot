const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
import { config } from 'dotenv';
config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ],
});

const TOKEN = process.env.DISCORD_TOKEN; 
const SONG_PATH = './Songs/song.mp3'

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase().includes('green')) {
        message.reply({ content: 'Here is the song!', files: [SONG_PATH] });
    }    
    // Ignore messages from bots
    if (message.author.bot) return;

    // Check if the message contains "green"
    if (message.content.toLowerCase().includes('green')) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            message.reply('Please fall in love with me');
            return;
        }

        // Join the voice channel
        const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });

        // Create an audio player and play the song
        const player = createAudioPlayer();
        const resource = createAudioResource(SONG_PATH);

        player.play(resource);
        connection.subscribe(player);

        message.reply('Who tryna fuck"!');

        // Disconnect when the song finishes
        player.on('idle', () => {
            connection.destroy();
        });
    }
});

client.login(TOKEN);
