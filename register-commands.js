const {token, applicationID, serverID} = require("./config.json");
const { REST, Routes, ApplicationCommandOptionType} = require("discord.js");

const commands = [
	{
		name: "ping",
		description: "pong (Just for testing)",
	},
	{
		name: "poll",
		description: "Create a straw poll",
		options: [
			{
				name: "question",
				description: "What would you like you ask?",
				type: ApplicationCommandOptionType.String,
				required: true,
			}
		]
	}
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	console.log(commands);
	console.log(ApplicationCommandOptionType);
	try {
		await rest.put(
			Routes.applicationGuildCommands(applicationID, serverID),
			{ body: commands }
		)
		console.log(`Commands registered : ${commands}`)
	} catch (err) {
		console.error(err);
	}
})();