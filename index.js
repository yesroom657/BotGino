const {token} = require("./config.json");
const {interactionCreate, registerCommands} = require("./src/interactions");
const { 
	Client, 
	RichEmbed, 
	Events, 
	GatewayIntentBits
} = require("discord.js");

const bot = new Client({ intents: [ GatewayIntentBits.Guilds ]});

const onReady = async (client) => {
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

bot.on(Events.ClientReady, onReady);
bot.on(Events.InteractionCreate, interactionCreate);

bot.login(token);
