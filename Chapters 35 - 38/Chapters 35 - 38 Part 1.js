function makeFirstLetterUpper() {
	stringInput = prompt("convert content in Capitalize");
	newStringInput = stringInput.toLowerCase().split(" ");
	for (i = 0; i < newStringInput.length; i++) {
		newStringInput[i] = newStringInput[i][0].toUpperCase() + newStringInput[i].substr(1);
	}
	console.log(newStringInput.join(" "));
}
		
makeFirstLetterUpper()
