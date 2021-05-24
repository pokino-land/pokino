import { Injectable } from '@angular/core';
import {ApiConfig} from "../../api/api.config";
import {ApiService} from "../../api/api.service";
import {JsonPlayerObject} from "../../api/json-player-object";

// TODO look up if we need that annotation, the feeling is that it is obsolete
@Injectable({
  providedIn: 'root'
})
export class GameStreamingService {

  private webSocketUrl = ApiConfig.getWebsocketUrl().href;
  declare currentGameId: string;
  declare playerTurnId: string;
  declare player: JsonPlayerObject;

  constructor(private apiService: ApiService) { }

  public getWebSocket(): WebSocket {
    return new WebSocket(this.webSocketUrl);
  }

  public getGameInitTopic(): string {
    return ApiConfig.getWebsocketGreetingsTopic();
  }

  public async sendGameStartsConfirmation(player: JsonPlayerObject): Promise<void> {
    this.playerTurnId = await this.apiService.sendGameStartsConfirmation(player);
  }

  public getGameDownstreamTopic(): string {
    return `/queue/downstream/${this.currentGameId}`;
  }

  public getGameUpstreamTopic(): string {
    return `/pokino/upstream/${this.currentGameId}`;
  }

  public getGameShutdownTopic(): string {
    return `/topic/shutdown`;
  }

  public isMyTurn(): boolean {
    console.log(this.player.id + ', '+ this.playerTurnId);
    return this.playerTurnId === this.player.id;
  }

}
