import {JsonPokemonObject} from "../../api/json-pokemon-object";
import {JsonWeatherObject} from "../../api/json-weather-object";
import { ApiService } from '../../api/api.service';

export class apiHandler{

    pokemon: JsonPokemonObject = new JsonPokemonObject();
    weather: JsonWeatherObject = new JsonWeatherObject();

    constructor(private apiService: ApiService){
        // init starting pokemon
        console.log('initialising pokemon');
        this.getRandomPokemonJson();
    }

    updateRandomPokemon(): JsonPokemonObject {
        this.getRandomPokemonJson();
        return this.pokemon;
    }

    fetchRandomPokemon(): Promise<JsonPokemonObject> {
        return this.apiService.getRandomPokemon();
    }

    // asynchronous version of fetchRandomPokemon for convenience
    public async getRandomPokemonJson(): Promise<JsonPokemonObject> {
        this.pokemon = await this.fetchRandomPokemon();
        console.log('pokemon initialised');
        return this.pokemon;
    }

    public async getWeather(): Promise<void> {
        this.weather = await this.apiService.getWeather();
      }
    getWind(): JsonWeatherObject{
        this.getWeather();
        return this.weather;
      }
}
