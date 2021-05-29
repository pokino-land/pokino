import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {ApiConfig} from "../api/api.config";

const testPlayerId: string = '1';
const testPlayerName: string = 'testPlayer';

describe('ApiConfig', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                ApiConfig
            ],
        }).compileComponents();
    });

    it('should create appropriate url for random pokemon', () => {
        const url: URL = ApiConfig.getPokemonRandomUrl();
        expect(url.href).toEqual('http://localhost:8000/pokemon/random');
    });

    it('should create appropriate url for weather', () => {
        const url: URL = ApiConfig.getWeatherUrl();
        expect(url.href).toEqual('http://localhost:8003/weather/random');
    });

    it('should create appropriate url for player ready', () => {
        const url: URL = ApiConfig.getPlayerReadyUrl(testPlayerName, testPlayerId);
        expect(url.href).toEqual('http://localhost:8001/game/clickReady?playerName=testPlayer&playerId=1');
    });

    it('should create appropriate url for login', () => {
        const url: URL = ApiConfig.getLoginUrl(testPlayerName);
        expect(url.href).toEqual('http://localhost:8001/game/login?name=testPlayer');
    });

    it('should create appropriate url for websocket root', () => {
        const url: URL = ApiConfig.getWebsocketUrl();
        expect(url.href).toEqual('ws://localhost:8001/pokino-websocket');
    });

    it('should create appropriate url for confirming game start', () => {
        const url: URL = ApiConfig.getConfirmGameStartsUrl(testPlayerId);
        expect(url.href).toEqual('http://localhost:8001/game/ready?playerId=1');
    });

    it('should create appropriate url for ball thrown', () => {
        const url: URL = ApiConfig.getBallThrownUrl(testPlayerId, true);
        expect(url.href).toEqual('http://localhost:8001/game/ballThrown?playerId=1&didHit=1');
    });

    it('should create appropriate topic for websocket initialisation', () => {
        const topic: string = ApiConfig.getWebsocketGreetingsTopic();
        expect(topic).toEqual('/topic/init');
    });

});
