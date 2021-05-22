import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../view/app.component';
import { RenderComponent } from '../view/render/render.component';

import { ApiService } from '../api/api.service';
import {MainMenuComponent} from "../view/main-menu.component";
import {LeaderboardComponent} from "../view/leaderboard.component";
import {FormsModule} from "@angular/forms";
import {WebsocketService} from "../view/websocket-adapter/websocket.service";
import {WebsocketTestComponent} from "../view/websocket-adapter/websocket-test.component";

@NgModule({
    declarations: [
        AppComponent,
        RenderComponent,
        MainMenuComponent,
        LeaderboardComponent,
        WebsocketTestComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [ApiService, WebsocketService],
    bootstrap: [AppComponent]
})
export class AppModule { }
