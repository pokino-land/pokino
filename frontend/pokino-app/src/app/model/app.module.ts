import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../view/app.component';
import { RenderComponent } from '../view/render/render.component';

import { ApiService } from '../api/api.service';
import {MainMenuComponent} from "../view/main-menu.component";
import {LeaderboardComponent} from "../view/leaderboard.component";

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
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }