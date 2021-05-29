import {JsonObject} from "./json-object";

export class JsonGameStateObject implements JsonObject {

    ball: Ball = new Ball();
    pokemon: Pokemon = new Pokemon();
    score: Score = new Score();
    declare sendingPlayerId: string;

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
