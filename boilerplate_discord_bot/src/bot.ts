import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

const token = 'MTA4MjM3NTQzMjY1OTI4ODA3NA.Ghz5xg.vXoPY0min0FzxyAyE6Qv7loDOsd29a9V8PLZqg';

console.log('bot is starting...');

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(token);
