import {JsonObject} from "./json-object";

export class JsonGameStateObject implements JsonObject {

    ball: Ball = new Ball();
    pokemon: Pokemon = new Pokemon();
    scores: Score = new Score();
    declare currentPlayerId: number;

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
