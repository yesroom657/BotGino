const fs = require('fs');
const path = require('path');

module.exports.ROOT_DIR = (filename) => path.join(process.mainModule.path, filename)

function getFiles(dir) {
	const files = fs.readdirSync(dir, {	withFileTypes: true	});
	
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

module.exports.getFiles = getFiles;