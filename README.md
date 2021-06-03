# EZ-DiscordJS

Welcome to EZ-DiscordJS! EZ-DiscordJS is different from a Discord Bot library. EZ-Discordjs is instead a barebones, preconfigured bot to get you started! This framework is highly customizable for any use case.

## Setup

Start using EZ-DiscordJS in a few easy steps!

1) Clone the repo
   - Download this rep as a .zip, or fork it to start.

2) Navigate to the `/src` directory.
3) Create a file called `config.ts`.
4) Copy-paste the following code into the file, and fill in the information as needed. You may also need to create a Discord application to get a token.
```import { CommandCategory } from './types/CommandCategory';

export const config: BotConfig = {
    name: "BOT_NAME_HERE",
    token: "YOUR_DISCORD_BOT_TOKEN_HERE",
	version: "1.0",
    ownerID: "YOUR_DISCORD_ID_HERE",
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
```

5) Run `npm install` in the root directory.
6) Run `npm run build` and then `npm run start`
7) You should be up and running! If your bot didn't start successfully, retry these steps. If you're still having problems, create an issue in this repo and let me know what went wrong.


This software is licensed under the MIT license and is free to redistribute. Attribution appreciated. Credits to [Gymnophoria's Arthur Bot](https://github.com/Gymnophoria/Arthur) for inspiration on this framework.
