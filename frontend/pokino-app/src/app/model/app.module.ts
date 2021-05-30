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
import {GameStreamingService} from "../api/game-streaming.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AlertBasicComponent} from "../view/alert-basic.component";

@NgModule({
    declarations: [
        AppComponent,
        RenderComponent,
        MainMenuComponent,
        LeaderboardComponent,
        AlertBasicComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule
    ],
    providers: [ApiService, GameStreamingService],
    bootstrap: [AppComponent]
})
export class AppModule { }
