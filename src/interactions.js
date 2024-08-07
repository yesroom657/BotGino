const fs = require("fs");
const path = require("path");
const { token, applicationID, serverID } = require("../config.json");

const { REST, Routes, ApplicationCommandOptionType} = require("discord.js");

let commands = [];
let executes = [];

function getFiles(dir) {
	const files = fs.readdirSync(dir, {
		withFileTypes: true
	});
	let commandFiles = [];

	for(const file of files) {
		if(file.isDirectory()){
			commandFiles = [
				...commandFiles,
				...getFiles(`${dir}/${file.name}`)
			]
		} else if (file.name.endsWith(".js")){
			commandFiles.push(`${dir}/${file.name}`)
		}
	}

	return commandFiles;
}

const commandFiles = getFiles(__dirname + "/command");

for(const file of commandFiles) {
	const command = require(file);
	commands.push(command.data.toJSON());
	executes[command.data.toJSON().name] = command.execute;
}

const rest = new REST({ version: '10' }).setToken(token);

exports.registerCommands = () => {	
	rest.put(Routes.applicationGuildCommands(applicationID, serverID), { body: commands })
		.then(() => {
			for (c of commands) {
				console.log(`Slash Command Registered : /${c['name']}`)
			}
		})
		.catch(console.error)
}

exports.interactionCreate = (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	executes[interaction.commandName](interaction);
}