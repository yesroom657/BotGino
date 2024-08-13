const fs = require("fs");
const { ROOT_DIR, getFiles } = require('./helper');
const { token, applicationID, serverID } = require("./config.json");
const { REST, Routes } = require("discord.js");

let commands = [];
let executes = [];

const commandFiles = getFiles(ROOT_DIR("src/command"));

for(const file of commandFiles) {
	const command = require(file);
	commands.push(command.data.toJSON());
	executes[command.data.toJSON().name] = command.execute;
}

exports.registerCommands = () => {	
	const rest = new REST({ version: '10' })
		.setToken(token)
		.put(Routes.applicationGuildCommands(applicationID, serverID), { body: commands })
		.then(() => {
			for (c of commands) {
				console.log(`Slash Command Registered : /${c['name']}`)
			}
		})
		.catch(console.error)
}

exports.registerEvents = (client) => {
	const eventsPath = ROOT_DIR("src/events");
	const eventFiles = fs.readdirSync(eventsPath).filter((file) => file.endsWith('.js'));

	for (const file of eventFiles){
		const filePath = `${eventsPath}\\${file}`;
		const event = require(filePath);
		if(event.once) {
			client.once(event.name, event.execute)
		} else {
			client.on(event.name, event.execute)
		}
	}
}