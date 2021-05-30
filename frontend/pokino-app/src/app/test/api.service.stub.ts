// functionality is tested in game-streaming.service.spec, so these are just fillers to ensure components work
import {ApiService} from "../api/api.service";
import {JsonPokemonObject} from "../api/json-pokemon-object";

export const apiServiceStub: Partial<ApiService> = {
    async getRandomPokemon(): Promise<JsonPokemonObject> {
        const testPokemon: JsonPokemonObject = new JsonPokemonObject();
        return new Promise(() => testPokemon);
    }
};
