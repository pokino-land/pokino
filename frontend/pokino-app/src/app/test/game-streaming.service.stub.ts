// functionality is tested in game-streaming.service.spec, so these are just fillers to ensure components work
import {GameStreamingService} from "../view/websocket-adapter/game-streaming.service";
import {JsonPlayerObject} from "../api/json-player-object";
import {JsonGameEndsObject} from "../api/json-game-ends-object";
import {JsonGameStateObject} from "../api/json-game-state.object";
import {JsonGameInitObject} from "../api/json-game-init-object";


let isMyTurn: boolean = true;

export const gameStreamingServiceStub: Partial<GameStreamingService> = {
    getWebSocket(): WebSocket {
        return new WebSocket('localhost://testurl');
    },

    getGameInitTopic(): string {
        return 'testTopic';
    },

    sendGameStartsConfirmation(player: JsonPlayerObject): Promise<void> {
        return new Promise(() => {});
    },


    openShutdownConnection(): void {
    },

    endGame(gameEndsMessage: JsonGameEndsObject): any {
    },

    openDownStreamConnection(): void {
    },

    gameStateChanged(gameState: JsonGameStateObject): any {
    },

    sendGameState(gameState: JsonGameStateObject): void {
    },

    closeDownStreamConnection(): void {
    },

    closeShutdownConnection(): void {
    },

    initGameIds(gameInitMessage: JsonGameInitObject): void {
    },

    getGameDownstreamTopic(): string {
        return 'testTopic';
    },

    getGameUpstreamTopic(): string {
        return 'testTopic';
    },

    getGameShutdownTopic(): string {
        return 'testTopic';
    },

    isMyTurn(): boolean {
        isMyTurn = isMyTurn;
        return isMyTurn;
    },

    sendBallThrown(didHit: boolean): void {
    }
};
