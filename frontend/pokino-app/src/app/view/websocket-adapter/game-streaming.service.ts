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

  constructor(private apiService: ApiService) { }

  public getWebSocket(): WebSocket {
    return new WebSocket(this.webSocketUrl);
  }

  public getGameInitTopic(): string {
    return ApiConfig.getWebsocketGreetingsTopic();
  }

  public sendGameStartsConfirmation(player: JsonPlayerObject): void {
    this.apiService.sendGameStartsConfirmation(player);
  }

  public getGameTopic(): string {
    return `/queue/${this.currentGameId}/downstream`;
  }
}
