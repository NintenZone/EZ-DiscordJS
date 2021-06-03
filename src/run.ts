import { config } from './config';
import { ShardingManager } from 'discord.js';

const Manager = new ShardingManager('./client.js', {
    totalShards: "auto",
    token: config.token
});

Manager.spawn("auto", 0, 60000).catch((e) => {
    console.error(`There was a startup error:\n${e}`);
})