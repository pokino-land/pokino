import {JsonPokemonObject} from "../../api/json-pokemon-object";
import { ApiService } from '../../api/api.service';

export class apiHandler{

    pokemon: JsonPokemonObject = new JsonPokemonObject();

    constructor(private apiService: ApiService){ }

    public async getRandomPokemonJson(): Promise<JsonPokemonObject> {
        this.pokemon = await this.apiService.getRandomPokemon();
        return this.pokemon;
    }
    
    getRandomPokemonName(): string{
        this.getRandomPokemonJson();
        return this.pokemon.name;
    }

    updateRandomPokemon(): JsonPokemonObject{
        this.getRandomPokemonJson();
        return this.pokemon;
    }
}
