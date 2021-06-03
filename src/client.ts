import { Client, Collection } from 'discord.js';
import { BotConfig, config } from './config';

/**
 * @name Bot: Class that contains a Discord client and all important information.
 * @field client: A Discord.js client.
 * @field token: The OAUTH token of the bot.
 * @field commands: Commands of the bot.
 * @field aliases: Aliases of bot commands.
 */
export class Bot {
    client: Client;
    private token: string;
    commands: Collection<string, any> = new Collection();
    aliases: Collection<string, any> = new Collection();
    
    constructor(token) {
        this.client = new Client();
        this.client.login(token).catch(console.error);
    }
}

let bot: Bot = new Bot(config.token);

require('./loaders/cmdloader.js')(bot);
require('./loaders/eventloader.js')(bot);

