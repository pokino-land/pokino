import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../view/app.component';
import { RenderComponent } from '../view/render/render.component';

import { ApiService } from '../api/api.service';
import {MainMenuComponent} from "../view/main-menu.component";
import {LeaderboardComponent} from "../view/leaderboard.component";
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from "@stomp/ng2-stompjs";
import {RX_STOMP_CONFIG} from "../rx-stomp.config";

@NgModule({
    declarations: [
        AppComponent,
        RenderComponent,
        MainMenuComponent,
        LeaderboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        ApiService,
        {
            provide: InjectableRxStompConfig,
            useValue: RX_STOMP_CONFIG,
        },
        {
            provide: RxStompService,
            useFactory: rxStompServiceFactory,
            deps: [InjectableRxStompConfig],
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
