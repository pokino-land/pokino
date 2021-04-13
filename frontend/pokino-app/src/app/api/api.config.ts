export class ApiConfig {
    private static readonly ROOT_URL: string = 'http://localhost';
    private static readonly POKE_PORT: string = '8000';
    private static readonly PLAYER_PORT: string = '0';

    private static readonly POKE_ENDPOINT: string = 'pokemon';
    private static readonly RANDOM_ENDPOINT: string = 'random';

    public static getPokemonRandomUrl(): URL {
        let urlString: string = this.concat([this.ROOT_URL, this.POKE_PORT], ":")
        urlString = this.concat([urlString, this.POKE_ENDPOINT, this.RANDOM_ENDPOINT], "/");
        return new URL(urlString);
    }

    public static getPlayerUrl(): URL {
        return new URL(this.concat([this.ROOT_URL, this.PLAYER_PORT], ":"));
    }

    private static concat(list: Array<string>, delimiter: string): string {
        return list.join(delimiter);
    }

}