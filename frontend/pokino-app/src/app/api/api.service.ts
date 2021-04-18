import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPokemonObject } from './json-pokemon-object';
import { ApiConfig } from "./api.config";
import {JsonWeatherObject} from "./json-weather-object";


@Injectable()
export class ApiService {
	constructor(private http: HttpClient) {}

	public async getRandomPokemon(): Promise<JsonPokemonObject> {
		const url: URL = ApiConfig.getPokemonRandomUrl();

		return await this.get(url.href)
			.toPromise()
			.then((data: JsonPokemonObject) => {
				return data;
			});
	}

	public async getWeather(): Promise<JsonWeatherObject> {
		const url: URL = ApiConfig.getWeatherUrl();

		return await this.get(url.href)
			.toPromise()
			.then((data: JsonWeatherObject) => {
				return data;
			});
	}

	private get(url: string): any {
		return this.http.get(url);
	}

	private post(url: string, payload: any): any {
		return this.http.post(url, payload);
	}

}
