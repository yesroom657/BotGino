const {token} = require("./config.json");
const {registerEvents} = require("./interactions");

const { 
	Client, 	
	GatewayIntentBits
} = require("discord.js");

const bot = new Client({ 
	intents: [ 
		GatewayIntentBits.Guilds 
	]});

registerEvents(bot);

bot.login(token);
