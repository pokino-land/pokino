import {JsonObject} from "./json-object";

export class JsonGameEndsObject implements JsonObject {

	declare public playerId1: string;
	declare public playerName1: string;
	declare public playerId2: string;
	declare public playerName2: string;
	declare public gameId: string;
	declare public finalStandings: Map<string, number>;

	constructor(playerId1: string, playerName1: string, playerId2: string,
				playerName2: string, gameId: string, finalStandings: Map<string, number>) {
		this.playerId1 = playerId1;
		this.playerName1 = playerName1;
		this.playerId2 = playerId2;
		this.playerName2 = playerName2;
		this.gameId = gameId;
		this.finalStandings = finalStandings;
	}
}
