import {Component, OnDestroy, OnInit} from '@angular/core';
import { ApiService } from '../api/api.service';

import { Router } from '@angular/router';
import {JsonPokemonObject} from "../api/json-pokemon-object";
import {JsonWeatherObject} from "../api/json-weather-object";
import {JsonPlayerObject} from "../api/json-player-object";
import * as Stomp from "stompjs";
import {GameStreamingService} from "./websocket-adapter/game-streaming.service";
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

  loggedIn: boolean = false;
  declare player: JsonPlayerObject;
  declare weather: JsonWeatherObject;


  constructor(private router: Router, private apiService: ApiService, private gameStreamingService: GameStreamingService) {
    this.getRandomPokemon();
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
  }

  public async loginPlayer(playerName: string): Promise<void> {
    const playerId: string = await this.apiService.loginPlayer(playerName);
    this.player = new JsonPlayerObject(playerId, playerName);
    // TODO make this more pretty
    this.gameStreamingService.player = this.player;
    this.loggedIn = true;
  }

  public checkIfRelevantGameStarts(response: JsonGameInitObject): void {
    // if a game init object contains the id of the current player, the player should join the game
    // this happens concurrently for both players involved since the game init messages are sent in real time
    const relevantGameStarts: boolean = ((response.playerId1.toString() === this.player.id.toString())
        || (response.playerId2.toString()) === this.player.id.toString());
    if (relevantGameStarts) {
      this.gameStreamingService.initGameIds(response);
      this.gotoGameScreen();
      this.gameStreamingService.sendGameStartsConfirmation(this.player);
    }
  }

  public ngOnInit(): void {
    this.openWebSocketConnection();
  }

  public ngOnDestroy(): void {
    this.closeWebSocketConnection();
  }


  public openWebSocketConnection(): void {
    this.webSocket = this.gameStreamingService.getWebSocket();
    this.client = Stomp.over(this.webSocket);

    this.client.connect({}, () => {
      this.client.subscribe(this.gameStreamingService.getGameInitTopic(), (item) => {
        console.log('game starts');
        const response: JsonGameInitObject = JSON.parse(item.body);
        this.checkIfRelevantGameStarts(response);
      });
    });
  }

  closeWebSocketConnection(): void {
    if (this.client) {
      this.webSocket.close();
      this.client.unsubscribe("/message");
    }
  }

  public setUsername(name: string): void {
    if (!this.loggedIn) {
      this.loginPlayer(name);
    } else {
      alert("You have already chosen a name!");
    }
  }
}
