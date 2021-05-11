import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';

import { Router } from '@angular/router';
import {JsonPokemonObject} from "../api/json-pokemon-object";
import {JsonWeatherObject} from "../api/json-weather-object";
import {JsonPlayerObject} from "../api/json-player-object";

@Component({
  selector: 'app-root',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss', './common.scss']
})
export class MainMenuComponent {
  title = 'pokino';
  ready = false;
  pokemon: JsonPokemonObject = new JsonPokemonObject();


  weather: JsonWeatherObject = new JsonWeatherObject();
  player: JsonPlayerObject = new JsonPlayerObject();


  constructor(private router: Router, private apiService: ApiService) {
    this.getRandomPokemon();
  }


  toggleReady(): void {
	  this.ready = true;
	  this.apiService.toggleReadyPlayer(this.player.name);
  }

  public getReadyMessage(): string {
	  return (this.ready ? '' : 'not ') + 'ready';
  }

  public gotoGameScreen(): void{
    this.router.navigate(['/gameScreen']);
  }

  public gotoLeaderboard(): void{
    this.router.navigate(['/leaderboard']);
  }

  public gotoWebsocketTest(): void{
    this.router.navigate(['/websocket-test']);
  }

  public async getRandomPokemon(): Promise<JsonPokemonObject> {
      this.pokemon = await this.apiService.getRandomPokemon();
      return this.pokemon;
  }

  public async getWeather(): Promise<void> {
    this.weather = await this.apiService.getWeather();
    console.log(this.weather);
    alert('location: ' + this.weather.location + ' , clouds: ' + this.weather.clouds);
  }

  public async loginPlayer(): Promise<void> {
    this.player = await this.apiService.loginPlayer('test');
    alert('name: ' + this.player.name);
    console.log(this.player);
  }
}
