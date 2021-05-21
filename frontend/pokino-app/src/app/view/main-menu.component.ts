import {Component, OnDestroy, OnInit} from '@angular/core';
import { ApiService } from '../api/api.service';

import { Router } from '@angular/router';
import {JsonPokemonObject} from "../api/json-pokemon-object";
import {JsonWeatherObject} from "../api/json-weather-object";
import {JsonPlayerObject} from "../api/json-player-object";
import * as Stomp from "stompjs";
import {WebsocketService} from "./websocket-adapter/websocket.service";
import {JsonGameInitObject} from "../api/json-game-init-object";

@Component({
  selector: 'app-root',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss', './common.scss']
})
export class MainMenuComponent implements OnInit, OnDestroy  {
  title = 'pokino';
  ready = false;
  pokemon: JsonPokemonObject = new JsonPokemonObject();
  declare webSocket: WebSocket;
  declare client: Stomp.Client;
  receivedMessages: Array<string> = [];
  input = '';

  weather: JsonWeatherObject = new JsonWeatherObject();
  declare player: JsonPlayerObject;
  declare currentGameId: string;


  constructor(private router: Router, private apiService: ApiService, private httpService: WebsocketService) {
    this.getRandomPokemon();
    this.loginPlayer('test2');
  }


  toggleReady(): void {
	  this.ready = true;
	  this.apiService.toggleReadyPlayer(this.player);
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

  public async loginPlayer(playerName: string): Promise<void> {
    const playerId: string = await this.apiService.loginPlayer(playerName);
    this.player = new JsonPlayerObject(playerId, playerName);
  }

  public checkIfRelevantGameStarts(response: JsonGameInitObject): void {
    // if a game init object contains the id of the current player, the player should join the game
    // this happens concurrently for both players involved since the game init messages are sent in real time
    const relevantGameStarts: boolean = ((response.playerId1.toString() === this.player.id.toString())
        || (response.playerId2.toString()) === this.player.id.toString());
    if (relevantGameStarts) {
      this.currentGameId = response.gameId;
      this.gotoGameScreen();
    }
  }

  public ngOnInit(): void {
    this.openWebSocketConnection();
  }

  public ngOnDestroy(): void {
    this.closeWebSocketConnection();
  }

  public openWebSocketConnection(): void {
    this.webSocket = this.httpService.getWebSocket();
    this.client = Stomp.over(this.webSocket);

    this.client.connect({}, () => {
      this.client.subscribe(this.httpService.getGameInitTopic(), (item) => {
        const response: JsonGameInitObject = JSON.parse(item.body);
        this.checkIfRelevantGameStarts(response);
      });
    });
  }

  addMessage(item: any): void {
    this.receivedMessages.push(item);
  }

  sendMessage(): void {
    if (this.input) {
      this.client.send('/pokino/hello' , {}, JSON.stringify(this.input));
      this.input = '';
    }

  }

  closeWebSocketConnection(): void {
    if (this.client) {
      this.webSocket.close();
      this.client.unsubscribe("/message");
    }
  }
}
