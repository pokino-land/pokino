import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPokemonObject } from './json-pokemon-object';
import { ApiConfig } from "./api.config";
import {JsonWeatherObject} from "./json-weather-object";
import {JsonPlayerObject} from "./json-player-object";
import {JsonLeaderboardObject} from "./json-leaderboard-object";


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

	public async loginPlayer(playerName: string): Promise<string> {
		const url: URL = ApiConfig.getLoginUrl(playerName);
		// const player: JsonPlayerObject = this.createPlayer(playerName);

		return await this.get(url.href)
			.toPromise()
			.then((id: any) => {
				return id;
			});
	}

	public async toggleReadyPlayer(player: JsonPlayerObject): Promise<JsonPlayerObject> {
		const url: URL = ApiConfig.getPlayerReadyUrl(player.name, player.id);

		return await this.get(url.href)
			.toPromise()
			.then((data: any) => {
				console.log("login was a success");
			});
	}


	public async getLeaderboard(): Promise<JsonLeaderboardObject> {
		// returns the starting player's id
		const url: URL = ApiConfig.getLeaderboardUrl();

		return await this.get(url.href)
			.toPromise()
			.then((data: JsonLeaderboardObject) => {
				return data;
			});
	}

	public async sendGameStartsConfirmation(player: JsonPlayerObject): Promise<string> {
		// returns the starting player's id
		const url: URL = ApiConfig.getConfirmGameStartsUrl(player.id);

		return await this.get(url.href)
			.toPromise()
			.then((data: any) => {
				console.log("sent game confirmation message to backend");
				const playerStartsId: string = data;
				return playerStartsId;
			});
	}

	public async sendBallThrown(playerId: string, didHit: boolean): Promise<void> {
		const url: URL = ApiConfig.getBallThrownUrl(playerId, didHit);
		console.log('send ball thrown!');
		return await this.get(url.href)
			.toPromise()
			.then((data: any) => {
				console.log("sent ball thrown; did it hit? " + didHit);
			});
	}

	private get(url: string): any {
		return this.http.get(url);
	}

	private post(url: string, payload: any): any {
		return this.http.post(url, payload);
	}
}
