import { Injectable } from '@angular/core';
import {ApiConfig} from "../../api/api.config";
import {ApiService} from "../../api/api.service";
import {JsonPlayerObject} from "../../api/json-player-object";
import {JsonGameInitObject} from "../../api/json-game-init-object";

// TODO look up if we need that annotation, the feeling is that it is obsolete
@Injectable({
  providedIn: 'root'
})
export class GameStreamingService {

  private webSocketUrl = ApiConfig.getWebsocketUrl().href;
  declare currentGameId: string;
  declare playerTurnId: string;
  declare opponentId: string;
  declare player: JsonPlayerObject;
  downStreamSubscribed: boolean = false;

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

  public initGameIds(gameInitMessage: JsonGameInitObject): void {
    this.currentGameId = gameInitMessage.gameId;
    if (this.player.id === gameInitMessage.playerId1) {
      this.opponentId = gameInitMessage.playerId2;
    } else {
      this.opponentId = gameInitMessage.playerId1;
    }
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
    return this.playerTurnId === this.player.id;
  }

  /**
   * changes the turn, regardless of whether the player hits or misses
   */
  public sendBallThrown(didHit: boolean): void {
      this.apiService.sendBallThrown(this.playerTurnId, didHit);
      this.changePlayerTurn();
  }

  private changePlayerTurn(): void {
    this.playerTurnId = (this.playerTurnId === this.player.id) ? this.opponentId : this.player.id;
  }
}
