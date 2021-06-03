import { Dirent, readdirSync } from 'fs';
import { join } from 'path';
import { Bot } from '../client';

export let loadCmd = (toLoad: string, bot: Bot): void => {
    let splitPath = toLoad.split("\\")
    let command = splitPath[splitPath.length-1];

    console.log(`Loading ${command}`);

    try {
        let file = require(toLoad);

        bot.commands.set(command.replace(/.js/g, ''), file);

        file.cmd_config.aliases.forEach(alias => {
            bot.aliases.set(alias, file);
        });

        console.log(`${command} loaded successfully.`);

    }
    catch(e) {
        console.log(`There was an error loading ${command}`);
        console.error(e);
    }
}
    

export let readFolder = (path: string, bot: Bot): void => {
    const files = readdirSync(path, {withFileTypes: true});

    files.forEach((file: Dirent) => {
        if (file.isDirectory()) {
            readFolder(join(path, file.name), bot);
        }
        else {
            if (!file.name.endsWith('.js')) return;
            try {
                loadCmd(join(path, file.name), bot);
            }
            catch (e) {
                console.error(e);
            }
        }
    });
}

module.exports = async (bot: Bot) => {
    readFolder(join(__dirname, '..', 'commands'), bot);
}
