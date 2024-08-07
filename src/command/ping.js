const { SlashCommandBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("PONG!!!!"),
		
	async execute(interaction){
		interaction.reply("Pong!")
	}
}