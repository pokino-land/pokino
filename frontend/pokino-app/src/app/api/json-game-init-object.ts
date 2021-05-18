import {JsonObject} from "./json-object";

export class JsonGameInitObject implements JsonObject {

	public playerId1: string = '';
	public playerId2: string = '';
	public gameId: string = '';

	constructor(playerId1: string, playerId2: string, gameId: string) {
		this.playerId1 = playerId1;
		this.playerId2 = playerId2;
		this.gameId = gameId;
	}

	public static fromJSON(data: any): JsonGameInitObject | undefined {
		try {
			const obj: JsonGameInitObject = new JsonGameInitObject(data.playerId1, data.playerId2, data.gameId);
			return obj;
		} catch (err) {
			console.error('Game Initialisation failed, probably faulty JSON:');
			console.error(err);
			return undefined;
		}
	}
}
