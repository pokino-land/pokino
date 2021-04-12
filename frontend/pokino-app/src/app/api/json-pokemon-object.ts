export class JsonPokemonObject {

	public name: string = '';
	public type1: string = '';
	public type2: string = '';
	public healthPoints: string = '';
	public defensePoints: string = '';

	constructor() {}

	public static fromJSON(data: any): JsonPokemonObject {
		const pokemon: JsonPokemonObject = new JsonPokemonObject();
		pokemon.name = data.name;
		pokemon.type1 = data.type1;
		pokemon.type2 = data.type2;
		pokemon.healthPoints = data.healthPoints;
		pokemon.defensePoints = data.defensePoints;
		return pokemon;
	}
}
