const {token, applicationID, serverID} = require("./config.json");
const {interactionCreate} = require("./src/command/interactions");

const {Client, RichEmbed, REST, Routes, GatewayIntentBits } = require("discord.js");
const bot = new Client({ intents: []});

bot.on("ready", () => {
	console.clear();
	console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on('interactionCreate', interactionCreate)
bot.login(token);
