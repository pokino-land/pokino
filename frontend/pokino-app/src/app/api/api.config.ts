export class ApiConfig {
    private static readonly ROOT_URL: string = 'http://localhost';
    private static readonly POKE_PORT: string = '8000';
    private static readonly GAME_PORT: string = '8001';
    private static readonly MQ_PORT: string = '8001';

    private static readonly POKE_ENDPOINT: string = 'pokemon';
    private static readonly RANDOM_ENDPOINT: string = 'random';
    private static readonly WEATHER_ENDPOINT: string = 'weather';
    private static readonly GAME_ENDPOINT: string = 'game';
    private static readonly LOGIN_ENDPOINT: string = 'login';
    private static readonly READY_ENDPOINT: string = 'clickReady';

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
     * example: http://localhost:8001/game/clickReady/{playerId}
     */
    public static getPlayerReadyUrl(playerName: string): URL {
        const root: Array<string> = [this.ROOT_URL, this.GAME_PORT];
        const endpoints: Array<string> = [this.GAME_ENDPOINT, this.READY_ENDPOINT, playerName];
        return this.buildUrl(root, endpoints);
    }

    public static getLoginUrl(playerName: string): URL {
        const root: Array<string> = [this.ROOT_URL, this.GAME_PORT];
        const endpoints: Array<string> = [this.GAME_ENDPOINT, this.LOGIN_ENDPOINT, playerName];
        return this.buildUrl(root, endpoints);
    }


    public static getMqUrl(): URL {
        const root: Array<string> = [this.ROOT_URL, this.MQ_PORT];
        return this.buildUrl(root, []);
    }


    private static buildUrl(rootPort: Array<string>, endpoints: Array<string>): URL {
        let urlString: string = rootPort.join(":");
        if (endpoints.length > 0) {
            urlString = [urlString, ...endpoints].join("/");
        }
        return new URL(urlString);
    }
}
