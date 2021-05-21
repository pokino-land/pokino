import {JsonObject} from "./json-object";

export class JsonPokemonObject implements JsonObject {

	public name: string = '';
	public type1: string = '';
	public type2: string = '';
	public healthPoints: number = 0;
	public defensePoints: number = 0;

	constructor() {}

	public static fromJSON(data: any): JsonPokemonObject | null {
		try {
			const pokemon: JsonPokemonObject = new JsonPokemonObject();
			pokemon.name = data.name;
			pokemon.type1 = data.type1;
			pokemon.type2 = data.type2;
			pokemon.healthPoints = data.healthPoints;
			pokemon.defensePoints = data.defensePoints;
			return pokemon;
		} catch (err) {
			console.error('Initialising Pokemon object failed, probably faulty JSON:');
			console.error(err);
			return null;
		}
	}
}
