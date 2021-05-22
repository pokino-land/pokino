import {JsonObject} from "./json-object";

export class JsonPokemonObject implements JsonObject {

	public name: string = '';
	public type1: string = '';
	public type2: string = '';
	public healthPoints: number = 0;
	public defensePoints: number = 0;

	constructor() {}
}
