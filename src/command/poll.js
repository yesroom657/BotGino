const { SlashCommandBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("poll")
		.setDescription("Take a poll")
		.addStringOption((option) => 
			option
				.setName('question')
				.setDescription("Question you want to ask")
				.setRequired(true)
			),
		
	async execute(interaction){
		//TODO create code for creating straw polls.
		const question = "Question: " + interaction.options.getString('question')
		interaction.reply(question)
	}
}