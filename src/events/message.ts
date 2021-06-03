import * as fs from 'fs';
import { config } from '../config';
import { Message } from 'discord.js';
import { Bot } from '../client';

module.exports = async (message: Message, bot: Bot) => {
    if (message.author.bot) return;
    if (message.channel.type !== 'text') return;

    const client = message.client;
    if (!message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;

    let defprefix = config.defPrefix;

    if (message.content.startsWith(`${defprefix}prefix`) || message.content.startsWith(`${defprefix}prefix`) || message.content.startsWith(`<@!${client.user.id}> prefix`)) return message.reply('This server\'s prefix is `' + defprefix + '`').catch();

    if (!message.content.startsWith(defprefix)) return;

    let suffix = message.content.slice(defprefix.length);
    let args = suffix.split(/ +/g);
    const command = args[0].toLowerCase();

    suffix = suffix.slice(args[0].length + 1);
    args = args.slice(1);

    const cmdFile = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command));

    if (!cmdFile) return;

    if (!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) return message.reply('I need permission `EMBED_LINKS` in this channel to function properly!');

    let go = true;
    let missingPerms = [];
    let clientGo = true;
    let clientMissingPerms = [];

    if (cmdFile.cmd_config.userPerms && message.guild) {
        cmdFile.cmd_config.userPerms.forEach(p => {
            if (!message.member.hasPermission(p)) {
                go = false;
                missingPerms.push(p.toUpperCase())
            }
        })
    }

    if (cmdFile.cmd_config.clientPerms && message.guild) {
        cmdFile.cmd_config.clientPerms.forEach(p => {
            if (!message.guild.me.hasPermission(p)) {
                clientGo = false;
                clientMissingPerms.push(p.toUpperCase())
            }
        })
    }

    if (cmdFile.cmd_config.enabled) {
        try {
            cmdFile.run(message, args, defprefix, suffix, bot);
        }
        catch (err) {
            message.reply('there was an error executing this command.');
            console.error(`Command ${command} failed to run!\n\n${err.stack}`);
        }
    }
    else {
        message.reply('that command is currently disabled.')
    }
};
