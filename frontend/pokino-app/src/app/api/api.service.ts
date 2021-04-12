import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPokemonObject } from './json-pokemon-object';


@Injectable()
export class ApiService {
	constructor(private http: HttpClient) {}

	private pokemonUrl = 'http://localhost:8000/pokemon';

	public getRandomPokemon(): Observable<JsonPokemonObject> {
		const url: string = this.pokemonUrl + '/random';
		return this.get(url);
	}

	private get(url: string): any {
		return this.http.get(url);
	}

	private post(url: string, payload: any): any {
		return this.http.post(url, payload);
	}

}
