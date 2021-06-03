import { CommandCategory } from './types/CommandCategory';

export const config: BotConfig = {
    name: "BOT_NAME_HERE",
    token: "MzM5NTE3MTMwMTQ1OTIzMDc0.WXe19w.NZJbjj5YpeUBpq-dHCOHQcKTtyA",
	version: "1.0",
    ownerID: "180857074488442880",
    defPrefix: "!",
    cmd_categories: [
        new CommandCategory("Fun", "Fun commands for your server!")
    ]
};

/**
 * @name BotConfig
 * @field name: The name of your Discord bot.
 * @field token: The Discord OAUTH token for your bot.
 * @field version: The current version of your bot.
 * @field ownerID: The DiscordID of the owner of the bot.
 * @field defPrefix: The default prefix of your Discord bot.
 * @field cmd_categories: An array of CommandCategory for your help command.
 */
export class BotConfig {
    name: string = '';
    token: string = '';
    version: string = '';
    ownerID: string = '';
    defPrefix: string = '';
    cmd_categories: CommandCategory[] = [];
};