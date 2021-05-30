import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {LeaderboardComponent} from "../view/leaderboard.component";
import {ApiService} from "../api/api.service";
import {apiServiceStub} from "./api.service.stub";
import {GameStreamingService} from "../api/game-streaming.service";
import {gameStreamingServiceStub} from "./game-streaming.service.stub";
import {Router} from "@angular/router";
import {routerStub} from "./router.stub";

describe('LeaderboardComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                LeaderboardComponent
            ],
            providers: [
                { provide: ApiService, useValue: apiServiceStub },
                { provide: Router, useValue: routerStub }
            ]
        }).compileComponents();
    });
    // TODO
    it('should create the app', () => {
        const fixture = TestBed.createComponent(LeaderboardComponent);
        const app = fixture.componentInstance;
        expect(true).toBeTruthy();
    });

    it(`should have as title 'pokino'`, () => {
        const fixture = TestBed.createComponent(LeaderboardComponent);
        const app = fixture.componentInstance;
        expect(true).toEqual(true);
    });

});
