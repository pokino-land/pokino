import {JsonObject} from "./json-object";

export class JsonGameInitObject implements JsonObject {

	public playerId1: string = '';
	public playerId2: string = '';
	public playerName1: string = '';
	public playerName2: string = '';
	public gameId: string = '';

	constructor(playerId1: string, playerId2: string, gameId: string) {
		this.playerId1 = playerId1;
		this.playerId2 = playerId2;
		this.gameId = gameId;
	}
}
