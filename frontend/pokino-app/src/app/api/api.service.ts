import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { JsonObject } from './json-object';
import {JsonPokemonObject} from "./json-pokemon-object";


@Injectable()
export class ApiService {
	constructor(private http: HttpClient) {}

	pokemonUrl = 'localhost:8000/pokemon';

	public getRandomPokemon(): any {
		console.log(this.pokemonUrl + '/random');
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
