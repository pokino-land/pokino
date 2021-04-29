import {Component, OnInit} from '@angular/core';
import { ApiService } from '../api/api.service';

import { Router } from '@angular/router';
import {JsonPokemonObject} from "../api/json-pokemon-object";
import {JsonWeatherObject} from "../api/json-weather-object";
import {JsonPlayerObject} from "../api/json-player-object";
import {RxStompService} from "@stomp/ng2-stompjs";
import {Message} from "@stomp/stompjs";

@Component({
  selector: 'app-root',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss', './common.scss']
})
export class MainMenuComponent implements OnInit {
  title = 'pokino';
  ready = false;
  pokemon: JsonPokemonObject = new JsonPokemonObject();
  weather: JsonWeatherObject = new JsonWeatherObject();
  player: JsonPlayerObject = new JsonPlayerObject();
  receivedMessages: Array<string> = [];

  constructor(private router: Router,
              private apiService: ApiService,
              private rxStompService: RxStompService) {
    this.getRandomPokemon();
  }

  ngOnInit(): void {
    // TODO integrate topic into config
    this.rxStompService.watch('/topic/pokino').subscribe((message: Message) => {
      this.receivedMessages.push(message.body);
    });
  }

  toggleReady(): void {
	  this.ready = true;
	  if (this.ready) {
	    this.apiService.toggleReadyPlayer(this.player.name);
      }
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

  sendTestMessageToStream(): void {
    const message = `test message: ${new Date()}`;
    // TODO integrate topic into config
    this.rxStompService.publish({destination: '/topic/pokino', body: message});
  }
}
