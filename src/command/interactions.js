exports.interactionCreate = (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	switch(interaction.commandName){
		case "ping":
			// Just for testing purposes.
			interaction.reply("Pong!")
			break;

		case "poll":
			//TODO create code for creating straw polls.
			break;
		
		default: 
			break;
	}
}