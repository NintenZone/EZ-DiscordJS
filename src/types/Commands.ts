/**
 * @name CommandConfig
 * @field enabled: A boolean that sets your command as enabled or disabled.
 * @field aliases: An array of aliases for your command, can be empty.
 * @field clientPerms: An array of Discord permissions that your bot will need to execute this command.
 * @field userPerms: An array of Discord permissions that the command executor will need to execute this command.
 */

import { CommandCategory } from "./CommandCategory";

export class CommandConfig {
    enabled: boolean = true;
    aliases: string[] = [];
    clientPerms: string[] = [];
    userPerms: string[] = [];
};

/**
 * @name CommandHelp
 * @field name: The name of your command.
 * @field description: A short description of your command.
 * @field usage: Usage of your command. Required fields wrapped in <>, optional in [].
 * @field category: The name of the category that this command is in.
 */

export class CommandHelp {
    name: string = '';
    description: string = '';
    usage: string = '';
    category: string = '';
}