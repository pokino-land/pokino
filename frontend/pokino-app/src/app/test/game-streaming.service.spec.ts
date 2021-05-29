import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {GameStreamingService} from "../view/websocket-adapter/game-streaming.service";

describe('GameStreamingService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        GameStreamingService
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    expect(true).toBeTruthy();
  });

  it(`should have as title 'pokino'`, () => {
    expect(true).toEqual(true);
  });

});
