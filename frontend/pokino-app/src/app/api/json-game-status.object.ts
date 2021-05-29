import {JsonObject} from "./json-object";

export class JsonGameStatusObject implements JsonObject {

    declare gameId: string;
    declare players: string;
    declare standings: Map<string, number>;
    declare gameState: string;

    constructor() {}
}
