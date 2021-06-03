import { Message } from 'discord.js';
import { Bot } from '../../client';
import { CommandConfig, CommandHelp } from '../../types/Commands';

export async function run (message: Message, args: string[], prefix: string, suffix: string, bot: Bot): Promise<void> {
    let latency = Date.now() - message.createdTimestamp;
    message.channel.send(`Pong! \`${latency}ms\``)
};

export var cmd_config: CommandConfig = {
    enabled: true,
    aliases: ['pong'],
    clientPerms: [],
    userPerms: []
};

export var cmd_help: CommandHelp = {
    name: 'ping',
    description: 'Check the bot\'s ping!',
    usage: 'ping',
    category: 'ping'
};