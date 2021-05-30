import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderComponent } from './render.component';
import {ApiService} from "../../api/api.service";
import {JsonPokemonObject} from "../../api/json-pokemon-object";
import { GameStreamingService } from "../../api/game-streaming.service";
import {JsonPlayerObject} from "../../api/json-player-object";
import {JsonGameEndsObject} from "../../api/json-game-ends-object";
import {JsonGameInitObject} from "../../api/json-game-init-object";
import { Router } from '@angular/router';
import { routerStub } from 'src/app/test/router.stub';


describe('RenderComponent', () => {
  let component: RenderComponent;
  let fixture: ComponentFixture<RenderComponent>;

  // mock necessary parts of services
  const apiServiceStub: Partial<ApiService> = {
    async getRandomPokemon(): Promise<JsonPokemonObject> {
      const testPokemon: JsonPokemonObject = new JsonPokemonObject();
      return new Promise(() => testPokemon);
    }
  };


  beforeEach(async () => {
    const mockConfigService = {
      player: {id: '1', name: 'test'},
      getWebSocket(): WebSocket {
        return new WebSocket('ws://testurl');
      },
      getGameInitTopic(): string {
        return 'testTopic';
      },

      sendGameStartsConfirmation(player: JsonPlayerObject): Promise<void> {
        return new Promise(() => {});
      },

      endGame(gameEndsMessage: JsonGameEndsObject): any {
      },

      initGameIds(gameInitMessage: JsonGameInitObject): void {
      },

      getGameDownstreamTopic(): string {
        return 'testTopic';
      },

      getGameUpstreamTopic(): string {
        return 'testTopic';
      },

      getGameShutdownTopic(): string {
        return 'testTopic';
      },

      sendBallThrown(didHit: boolean): void {
      }
    };

    await TestBed.configureTestingModule({
      declarations: [ RenderComponent ],
      providers: [
        { provide: ApiService, useValue: apiServiceStub },
        { provide: GameStreamingService, useValue: mockConfigService },
        { provide: Router, useValue: routerStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});