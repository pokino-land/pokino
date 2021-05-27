import {environment} from "../../environments/environment";

export class ApiConfig {
    private static readonly ROOT_URL: string = 'http://' + environment.rootAddress;
    private static readonly WEBSOCKET_ROOT_URL: string = 'ws://' + environment.rootAddress;
    private static readonly POKE_PORT: string = '8000';
    private static readonly GAME_PORT: string = '8001';
    private static readonly WEBSOCKET_PORT: string = '8001';
    private static readonly WEATHER_PORT: string = '8003';

    private static readonly POKE_ENDPOINT: string = 'pokemon';
    private static readonly RANDOM_ENDPOINT: string = 'random';
    private static readonly WEATHER_ENDPOINT: string = 'weather';
    private static readonly BALL_THROWN_ENDPOINT: string = 'ballThrown';
    private static readonly GAME_ENDPOINT: string = 'game';
    private static readonly LOGIN_ENDPOINT: string = 'login';
    private static readonly CLICK_READY_ENDPOINT: string = 'clickReady';
    private static readonly READY_ENDPOINT: string = 'ready';
    private static readonly WEBSOCKET_INIT_BASE: string = 'pokino-websocket';
    private static readonly WEBSOCKET_INIT_TOPIC: string = '/topic/init';

    /**
     * example: http://localhost:8000/pokemon/random
     */
    public static getPokemonRandomUrl(): URL {
        const root: Array<string> = [this.ROOT_URL, this.POKE_PORT];
        const endpoints: Array<string> = [this.POKE_ENDPOINT, this.RANDOM_ENDPOINT];
        return this.buildUrl(root, endpoints);
    }

    /**
     * example: http://localhost:8003/weather/random
     */
    public static getWeatherUrl(): URL {
        const root: Array<string> = [this.ROOT_URL, this.WEATHER_PORT];
        const endpoints: Array<string> = [this.WEATHER_ENDPOINT, this.RANDOM_ENDPOINT];
        return this.buildUrl(root, endpoints);
    }

    /**
     * example: http://localhost:8001/game/clickReady?playerName={playerName}&playerId={id}
     */
    public static getPlayerReadyUrl(playerName: string, playerId: string): URL {
        const root: Array<string> = [this.ROOT_URL, this.GAME_PORT];
        const endpoints: Array<string> = [this.GAME_ENDPOINT, this.CLICK_READY_ENDPOINT];
        let url = this.buildUrl(root, endpoints).href;
        url += ('?playerName=' + playerName + '&playerId=' + playerId);
        console.log(url);
        return new URL(url);
    }

    /**
     * example: http://localhost:8001/game/login?name={playerName}
     */
    public static getLoginUrl(playerName: string): URL {
        const root: Array<string> = [this.ROOT_URL, this.GAME_PORT];
        const endpoints: Array<string> = [this.GAME_ENDPOINT, this.LOGIN_ENDPOINT];
        let url = this.buildUrl(root, endpoints).href;
        url += ('?name=' + playerName);
        return new URL(url);
    }

    /**
     * example: ws://localhost:8001/pokino-websocket
     */
    public static getWebsocketUrl(): URL {
        const root: Array<string> = [this.WEBSOCKET_ROOT_URL, this.WEBSOCKET_PORT];
        const endpoints: Array<string> = [this.WEBSOCKET_INIT_BASE];
        return this.buildUrl(root, endpoints);
    }


    static getConfirmGameStartsUrl(playerId: string): URL {
        const root: Array<string> = [this.ROOT_URL, this.GAME_PORT];
        const endpoints: Array<string> = [this.GAME_ENDPOINT, this.READY_ENDPOINT];
        let url = this.buildUrl(root, endpoints).href;
        url += ('?playerId=' + playerId);
        return new URL(url);
    }

    static getBallThrownUrl(playerId: string, didHit: boolean): URL {
        const root: Array<string> = [this.ROOT_URL, this.GAME_PORT];
        const endpoints: Array<string> = [this.GAME_ENDPOINT, this.BALL_THROWN_ENDPOINT];
        let url = this.buildUrl(root, endpoints).href;
        url += ('?playerId=' + playerId);
        url += ('&didHit=' + (didHit ? '1' : '0'));
        return new URL(url);
    }

    public static getWebsocketGreetingsTopic(): string {
        return this.WEBSOCKET_INIT_TOPIC;
    }


    private static buildUrl(rootPort: Array<string>, endpoints: Array<string>): URL {
        let urlString: string = rootPort.join(":");
        if (endpoints.length > 0) {
            urlString = [urlString, ...endpoints].join("/");
        }
        return new URL(urlString);
    }
}
