import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderComponent } from './render.component';
import {ApiService} from "../../api/api.service";
import {JsonPokemonObject} from "../../api/json-pokemon-object";

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
    await TestBed.configureTestingModule({
      declarations: [ RenderComponent ],
      providers: [
        { provide: ApiService, useValue: apiServiceStub }
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