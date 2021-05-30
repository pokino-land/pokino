// functionality is tested in game-streaming.service.spec, so these are just fillers to ensure components work
import {GameStreamingService} from "../api/game-streaming.service";
import {JsonPlayerObject} from "../api/json-player-object";
import {JsonGameEndsObject} from "../api/json-game-ends-object";
import {JsonGameInitObject} from "../api/json-game-init-object";

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

    endGame(gameEndsMessage: JsonGameEndsObject): any {
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

    sendBallThrown(didHit: boolean): void {
    }
};
