import { Bot } from "../client";

const reqEvent = event => require(`../events/${event}`);

module.exports = (bot: Bot) => {
	bot.client.on('message', message => reqEvent('message')(message, bot));
	
	bot.client.on('ready', () => reqEvent('console')(bot, 'ready'));

	bot.client.on('debug', bug => reqEvent('console')(bug, 'debug'));
	bot.client.on('warn', warn => reqEvent('console')(warn, 'warn'));
	bot.client.on('error', err => reqEvent('console')(err, 'error'));

	process.on('unhandledPromiseRejection', console.error);
	process.on('unhandledRejection', console.error);
};