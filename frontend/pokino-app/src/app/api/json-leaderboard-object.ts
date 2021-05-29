import {JsonObject} from "./json-object";

export class JsonLeaderboardObject implements JsonObject {

	declare leaderboardEntries: Array<JsonLeaderboardEntry>;

	constructor() {}
}

class JsonLeaderboardEntry implements JsonObject {

	declare playerName;
	declare gamesWon;
	declare gamesLost;
	declare numberOfPokeHits;
	declare numberOfPokeMisses;

	constructor(playerName: string, gamesWon: string, gamesLost: string, numberOfPokeHits: string, numberOfPokeMisses: string) {
		this.playerName = playerName;
		this.gamesWon = gamesWon;
		this.gamesLost = gamesLost;
		this.numberOfPokeHits = numberOfPokeHits;
		this.numberOfPokeMisses = numberOfPokeMisses;
	}
}
