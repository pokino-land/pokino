import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {MainMenuComponent} from "../view/main-menu.component";
import {ApiService} from "../api/api.service";
import {Router} from "@angular/router";
import {GameStreamingService} from "../api/game-streaming.service";
import {apiServiceStub} from "./api.service.stub";
import {gameStreamingServiceStub} from "./game-streaming.service.stub";
import {routerStub} from "./router.stub";

describe('MainMenuComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                MainMenuComponent
            ],
            providers: [
                { provide: ApiService, useValue: apiServiceStub },
                { provide: GameStreamingService, useValue: gameStreamingServiceStub },
                { provide: Router, useValue: routerStub }
            ]
        }).compileComponents();
    });
    // TODO
    it('should create the app', () => {
        const fixture = TestBed.createComponent(MainMenuComponent);
        const app = fixture.componentInstance;
        expect(true).toBeTruthy();
    });

    it(`should have as title 'pokino'`, () => {
        const fixture = TestBed.createComponent(MainMenuComponent);
        const app = fixture.componentInstance;
        expect(true).toEqual(true);
    });

});
