import {JsonPokemonObject} from "../../api/json-pokemon-object";
import {JsonWeatherObject, WeatherWind} from "../../api/json-weather-object";
import { ApiService } from '../../api/api.service';

export class apiHandler{

    pokemon: JsonPokemonObject = new JsonPokemonObject();
    weather: JsonWeatherObject = new JsonWeatherObject();

    constructor(private apiService: ApiService){
        // init starting pokemon
        console.log('initialising pokemon');
        this.getRandomPokemonJson();
    }

    public async getRandomPokemonJson(): Promise<JsonPokemonObject> {
        this.pokemon = await this.apiService.getRandomPokemon();
        console.log('pokemon initialised');
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

    public async getWeather(): Promise<void> {
        this.weather = await this.apiService.getWeather();
      }
    getWind(): WeatherWind{
        this.getWeather();
        return this.weather.wind;
      }
}
