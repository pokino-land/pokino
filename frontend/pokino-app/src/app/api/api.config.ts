import {environment} from "../../environments/environment";

export class ApiConfig {
    private static readonly ROOT_URL: string = 'http://' + environment.rootAddress;
    private static readonly WEBSOCKET_ROOT_URL: string = 'ws://' + environment.rootAddress;
    private static readonly POKE_PORT: string = '8000';
    private static readonly GAME_PORT: string = '8001';
    private static readonly WEBSOCKET_PORT: string = '8001';

    private static readonly POKE_ENDPOINT: string = 'pokemon';
    private static readonly RANDOM_ENDPOINT: string = 'random';
    private static readonly WEATHER_ENDPOINT: string = 'weather';
    private static readonly GAME_ENDPOINT: string = 'game';
    private static readonly LOGIN_ENDPOINT: string = 'login';
    private static readonly READY_ENDPOINT: string = 'clickReady';
    private static readonly WEBSOCKET_INIT_ENDPOINT: string = 'pokino-websocket';
    private static readonly WEBSOCKET_GREETINGS_TOPIC: string = '/topic/init';

    /**
     * example: http://localhost:8000/pokemon/random
     */
    public static getPokemonRandomUrl(): URL {
        const root: Array<string> = [this.ROOT_URL, this.POKE_PORT];
        const endpoints: Array<string> = [this.POKE_ENDPOINT, this.RANDOM_ENDPOINT];
        return this.buildUrl(root, endpoints);
    }

    /**
     * example: http://localhost:8000/weather
     */
    public static getWeatherUrl(): URL {
        const root: Array<string> = [this.ROOT_URL, this.POKE_PORT];
        const endpoints: Array<string> = [this.WEATHER_ENDPOINT];
        return this.buildUrl(root, endpoints);
    }

    /**
     * example: http://localhost:8001/game/clickReady?playerName={playerName}&playerId={id}
     */
    public static getPlayerReadyUrl(playerName: string, playerId: string): URL {
        const root: Array<string> = [this.ROOT_URL, this.GAME_PORT];
        const endpoints: Array<string> = [this.GAME_ENDPOINT, this.READY_ENDPOINT];
        let url = this.buildUrl(root, endpoints).href;
        url += ('?playerName=' + playerName + '&playerId=' + playerId);
        return new URL(url);
    }

    /**
     * example: http://localhost:8001/game/login?playerName={playerName}
     */
    public static getLoginUrl(playerName: string): URL {
        const root: Array<string> = [this.ROOT_URL, this.GAME_PORT];
        const endpoints: Array<string> = [this.GAME_ENDPOINT, this.LOGIN_ENDPOINT];
        let url = this.buildUrl(root, endpoints).href;
        url += ('?name=' + playerName);
        return new URL(url);
    }

    // ws://localhost:8002/pokino-websocket
    public static getWebsocketUrl(): URL {
        const root: Array<string> = [this.WEBSOCKET_ROOT_URL, this.WEBSOCKET_PORT];
        const endpoints: Array<string> = [this.WEBSOCKET_INIT_ENDPOINT];
        return this.buildUrl(root, endpoints);
    }

    // /topic/greetings
    public static getWebsocketGreetingsTopic(): string {
        return this.WEBSOCKET_GREETINGS_TOPIC;
    }


    private static buildUrl(rootPort: Array<string>, endpoints: Array<string>): URL {
        let urlString: string = rootPort.join(":");
        if (endpoints.length > 0) {
            urlString = [urlString, ...endpoints].join("/");
        }
        return new URL(urlString);
    }
}
