import { Bot } from '../client';
import { config } from '../config';

module.exports = (stack: any, type) => {
	if (type === 'debug') if (!stack.includes('eartbeat')) console.log(stack);
	if (type === 'warn') console.warn(stack);
	if (type === 'error') console.error(stack);
	if (type === 'ready') {
		console.log(`Logged in as ${stack.client.user.tag}!`);
	}
};
