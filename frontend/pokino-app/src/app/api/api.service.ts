import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPokemonObject } from './json-pokemon-object';
import { ApiConfig } from "./api.config";


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

	private get(url: string): any {
		return this.http.get(url);
	}

	private post(url: string, payload: any): any {
		return this.http.post(url, payload);
	}

}
