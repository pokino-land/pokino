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
    return ApiConfig.getWebsocketGreetingsTopic();
  }

  public async sendGameStartsConfirmation(player: JsonPlayerObject): Promise<void> {
    const playerStartingId: string = await this.apiService.sendGameStartsConfirmation(player);
    this.isMyTurn = (parseInt(this.player.id) === parseInt(playerStartingId));
    console.log('Send start confirmation. Received starting player id ' + playerStartingId + '. Turn? ' + this.isMyTurn);
  }


  public openShutdownConnection(): void {

    this.webSocket = this.getWebSocket();
    this.client = Stomp.over(this.webSocket);

    this.client.connect({}, () => {
      this.client.subscribe(this.getGameShutdownTopic(), (item) => {
        const response: JsonGameEndsObject = JSON.parse(item.body);
        const gameEndsMessage: JsonGameEndsObject = response;
        if (gameEndsMessage.gameId === this.currentGameId) {
          this.endGame(gameEndsMessage);
        }
      });
    });
  }

  public endGame(gameEndsMessage: JsonGameEndsObject): any {
    this.gameEndState.next(gameEndsMessage);
  }

  public openDownStreamConnection(): void {

    // this.webSocket = this.getWebSocket();
    this.downstreamClient = Stomp.over(this.webSocket);
    this.downstreamClient.subscribe(this.getGameDownstreamTopic(), (item) => {
      this.downStreamSubscribed = true;
      this.gameStateChanged(JSON.parse(item.body));
    });
  }

  public gameStateChanged(gameState: JsonGameStateObject): any {
    this.gameState.next(gameState);
  }

  public sendGameState(gameState: JsonGameStateObject): void {
    // ignore sending if the players are changing turns because they shouldn't send anymore during the process of it
    this.client.send(this.getGameUpstreamTopic(), {}, JSON.stringify(gameState));
  }

  public closeDownStreamConnection(): void {
    const gameTopic = this.getGameDownstreamTopic();
    if (this.client && this.downStreamSubscribed) {
      this.downStreamSubscribed = false;
      this.webSocket.close();
      this.client.unsubscribe(gameTopic);
    }
  }

  public closeShutdownConnection(): void {
    const gameTopic = this.getGameShutdownTopic();
    if (this.client) {
      this.webSocket.close();
      this.client.unsubscribe(gameTopic);
    }
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

  /**
   * changes the turn, regardless of whether the player hits or misses
   */
  public sendBallThrown(didHit: boolean): void {
      this.apiService.sendBallThrown(this.playerTurnId, didHit);
      this.changePlayerTurn();
  }

  private changePlayerTurn(): void {
    // TODO: Here should be a call to backend to get the current standings to update scores.
    // TODO: delete
    this.playerTurnId = (this.playerTurnId === this.player.id) ? this.opponentId : this.player.id;
    this.tempGameStateToBeSent.currentPlayerId = this.playerTurnId;
    this.client.send(this.getGameUpstreamTopic(), {}, JSON.stringify(this.tempGameStateToBeSent));
      // const nextPlayerGameState: JsonGameStateObject = this.gameState.;
    // gameState.currentPlayerId = this.playerTurnId;
    // this.gameState.next(nextPlayerGameState);
    //
    //
    // this.gameState.subscribe(
    //     gameState = new GameState
    // ).subscribe(
    //
    // )
    //
    // this.gameState.pipe(first()).subscribe((gameState: JsonGameStateObject) => {
    //   console.log("sent final game state");
    //
    //
    //   console.log(JSON.stringify(this.gameState));
    //   this.client.send(this.getGameUpstreamTopic(), {}, JSON.stringify(this.gameState));
    // });
    //
    // this.gameState.pipe(first()).subscribe((gameState: JsonGameStateObject) => {

    //  this.client.send(this.getGameUpstreamTopic(), {}, JSON.stringify(this.tempGameStateToBeSent));
  }
}
