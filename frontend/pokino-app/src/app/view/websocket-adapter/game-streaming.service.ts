import { Injectable } from '@angular/core';
import {ApiConfig} from "../../api/api.config";
import {ApiService} from "../../api/api.service";
import {JsonPlayerObject} from "../../api/json-player-object";
import {JsonGameInitObject} from "../../api/json-game-init-object";
import * as Stomp from "stompjs";
import {JsonGameEndsObject} from "../../api/json-game-ends-object";
import {RenderComponent} from "../render/render.component";
import {JsonGameStateObject} from "../../api/json-game-state.object";
import {Subject} from "rxjs";
import {finalize, first} from "rxjs/operators";

// TODO look up if we need that annotation, the feeling is that it is obsolete
@Injectable({
  providedIn: 'root'
})
export class GameStreamingService {

  private webSocketUrl = ApiConfig.getWebsocketUrl().href;
  declare currentGameId: string;
  declare opponentId: string;
  declare player: JsonPlayerObject;

  declare webSocket: WebSocket;
  declare client: Stomp.Client;
  declare switchClient: Stomp.Client;
  declare downstreamClient: Stomp.Client;
  declare tempGameStateToBeSent: JsonGameStateObject;
  declare isMyTurn: boolean

  downStreamSubscribed: boolean = false;
  gameState: Subject<JsonGameStateObject> = new Subject<JsonGameStateObject>();
  gameEndState: Subject<JsonGameEndsObject> = new Subject<JsonGameEndsObject>();

  constructor(private apiService: ApiService) {
        this.webSocket = this.getWebSocket();
  }

  public getWebSocket(): WebSocket {
    return new WebSocket(this.webSocketUrl);
  }

  public getGameInitTopic(): string {
    return ApiConfig.getWebsocketInitTopic();
  }

  public async sendGameStartsConfirmation(player: JsonPlayerObject): Promise<void> {
    const playerStartingId: string = await this.apiService.sendGameStartsConfirmation(player);
    this.isMyTurn = (this.player.id.toString() === playerStartingId.toString());
    console.log('player with id ' + this.player.id);
    console.log('Send start confirmation. Received starting player id ' + playerStartingId + '. Turn? ' + this.isMyTurn);
  }

  public endGame(gameEndsMessage: JsonGameEndsObject): any {
    this.gameEndState.next(gameEndsMessage);
  }

  public initGameIds(gameInitMessage: JsonGameInitObject): void {
    this.currentGameId = gameInitMessage.gameId;
    if (this.player.id.toString() === gameInitMessage.playerId1.toString()) {
      this.opponentId = gameInitMessage.playerId2;
    } else {
      this.opponentId = gameInitMessage.playerId1;
    }
  }

  public getGameDownstreamTopic(): string {
    return `/queue/downstream/${this.currentGameId}`;
  }

  public getPlayerSwitchTopic(): string {
    return `/topic/switch/${this.currentGameId}`;
  }

  public getGameUpstreamTopic(): string {
    return `/pokino/upstream/${this.currentGameId}`;
  }

  public getGameShutdownTopic(): string {
    return `/topic/shutdown`;
  }

  /**
   * changes the turn, regardless of whether the player hits or misses
   */
  public sendBallThrown(didHit: boolean): void {
      this.apiService.sendBallThrown(this.player.id, didHit);
  }
}
