const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

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
		const question = interaction.options.getString('question');
		const embed = new EmbedBuilder()
			.setColor(0xFF0000)
			.setTitle(question)
			.setAuthor({
				name: interaction.user.tag,
				iconURL: interaction.user.displayAvatarURL()
			});

		interaction.channel.send({embeds: [embed]})
		.then((m) => {
			m.react("✅");
			m.react("❎"); //#ED4245
		})
	}
}