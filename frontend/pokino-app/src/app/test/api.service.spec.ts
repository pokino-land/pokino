import {getTestBed, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {ApiService} from "../api/api.service";
import {ApiConfig} from "../api/api.config";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {JsonPlayerObject} from "../api/json-player-object";

describe('ApiService', () => {
	let service: ApiService;
	let httpMock: HttpTestingController;
	const testPlayer: JsonPlayerObject = new JsonPlayerObject('1', 'testPlayer');

	beforeEach(() => {

		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ApiService]
		});

		const testBed = getTestBed();
		service = testBed.get(ApiService);
		httpMock = testBed.get(HttpTestingController);
	});


	it('should call the random pokemon endpoint', () => {
		const spy = spyOn(ApiConfig, 'getPokemonRandomUrl');
		service.getRandomPokemon();
		expect(spy).toHaveBeenCalledOnceWith();
	});

	it('should call the weather endpoint', () => {
		const spy = spyOn(ApiConfig, 'getWeatherUrl');
		service.getWeather();
		expect(spy).toHaveBeenCalledOnceWith();
	});

	it('should call the login endpoint', () => {
		const spy = spyOn(ApiConfig, 'getLoginUrl');
		service.loginPlayer(testPlayer.name);
		expect(spy).toHaveBeenCalledOnceWith('testPlayer');
	});

	it('should call the ready endpoint', () => {
		const spy = spyOn(ApiConfig, 'getPlayerReadyUrl');
		service.toggleReadyPlayer(testPlayer);
		expect(spy).toHaveBeenCalledOnceWith('testPlayer', '1');
	});

	it('should call the game start endpoint', () => {
		const spy = spyOn(ApiConfig, 'getConfirmGameStartsUrl');
		service.sendGameStartsConfirmation(testPlayer);
		expect(spy).toHaveBeenCalledOnceWith('1');
	});

	it('should call the ball thrown endpoint', () => {
		const spy = spyOn(ApiConfig, 'getBallThrownUrl');
		service.sendBallThrown(testPlayer.id, true);
		expect(spy).toHaveBeenCalledOnceWith('1', true);
	});

});
