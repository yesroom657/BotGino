const { Events } = require("discord.js");
const { registerCommands} = require(`${process.mainModule.path}\\interactions`);

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		console.clear();
		console.log(`Logged in as ${client.user.tag}!`);
		registerCommands();
		
		const g = await client.guilds.fetch();

		g.forEach((key, val ) => {
			console.log({
				serverName: key.name,
				serverId: val,
			})
		})
	}

}