import {JsonObject} from "./json-object";

export class JsonGameStateObject implements JsonObject {

    declare ball: Ball;
    declare pokemon: Pokemon;
    declare currentPlayerId: number;
    declare scores: Score;

    constructor() {}
}

class Ball {
    declare x: number;
    declare y: number;
}

class Pokemon {
    declare x: number;
    declare y: number;
    declare name: string;
    declare isHit: boolean;
}

class Score {
    declare player1Id: number;
    declare player2Id: number;
}
