const path = require('path');
const { Events } = require("discord.js");

module.exports = {
	name: Events.InteractionCreate,
	once: false,
	execute(client) {
		if (!client.isChatInputCommand()) return;
		executes[client.commandName](client);
	}
}