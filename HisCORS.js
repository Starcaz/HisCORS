/* V1.0.0
This library can be use to bypass Jagex its CORS mechanism.
To use this library, simply call the getHiscores function.
Remember that this function is async.

GitHub: Starcaz
Reddit: Starcaz
RuneScape: Starcaz
Twitch: Starcaz
Twitter: @Starcaz_
Website: Starcaz.net

Made by Starcaz*/

// The URL of the site used to bypass Jagex's CORS mechanism
var corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
// The URL of the Oldschool Runescape API its Hiscore endpoint
var osrsHiscoreEndpoint = "http://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player=";

// The index of the column containing a skill its level value
var hiscoreLevelIndex = 1;
// A list of the skill names, its ordered the same way as the API data
var hiscoreNames = ["Overall", "Attack", "Defence", "Strength",
					"Hitpoints", "Ranged", "Prayer", "Magic",
					"Cooking", "Woodcutting", "Fletching", "Fishing",
					"Firemaking", "Crafting", "Smithing", "Mining",
					"Herblore", "Agility", "Thieving", "Slayer",
					"Farming", "Runecraft", "Hunter", "Construction"]

// The async function of this library to be called
// Returns a map containing skill (key) & level (value) pairs
async function getHiscores(rsn) {
	var data = await getHiscoreData(rsn);
	var hiscores = parseHiscoreData(data);
	var mappedHiscores = mapHiscores(hiscores);
	return mappedHiscores;
}

// Does a XHR GET request in order to obtain the raw hiscore data
async function getHiscoreData(rsn) {
	return await $.ajax(corsAnywhereUrl + osrsHiscoreEndpoint + rsn);
}

// Parses the raw data
// First create rows by splitting new lines
// Then reate columns by splitting comma's
function parseHiscoreData(data) {
	var hiscores = [];
	
	data.split("\n").forEach(function(row){
		hiscores.push(row.split(","));
	});
	
	return hiscores;
}

// Loops through the skillnames and pairs each one with level value that has been retrieved
function mapHiscores(hiscores) {
	mappedHiscores = new Map();
	
	hiscoreNames.forEach(function(skill, index){
		level = hiscores[index][hiscoreLevelIndex];
		mappedHiscores.set(skill, parseInt(level));
	});
	
	return mappedHiscores;
}