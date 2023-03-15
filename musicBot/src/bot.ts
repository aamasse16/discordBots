import { Client, ClientOptions } from "discord.js";
import { Player } from "discord-player";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

const token = 'MTA4MjM3NTQzMjY1OTI4ODA3NA.Ghz5xg.vXoPY0min0FzxyAyE6Qv7loDOsd29a9V8PLZqg';

console.log('bot is starting...');

const client = new Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "MessageContent",
        "GuildVoiceStates"
    ]
});

//entry point for the discord-player based app
const player = new Player(client)

player.events.on('playerStart', (queue: any, track: any) =>{
    queue.metadata.channel.send(` Now playing **${track.title}**! `);
})

ready(client);

interactionCreate(client);

client.login(token);
