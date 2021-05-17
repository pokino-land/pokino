import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderComponent } from '../view/render/render.component';

import {MainMenuComponent} from '../view/main-menu.component';
import {AppComponent} from '../view/app.component';
import {LeaderboardComponent} from '../view/leaderboard.component';
import {WebsocketTestComponent} from "../view/websocket-adapter/websocket-test.component";

const routes: Routes = [
    {path: '', component: MainMenuComponent},
    {path: 'mainMenu', component: MainMenuComponent},
    {path: 'gameScreen', component: RenderComponent},
    {path: 'leaderboard', component: LeaderboardComponent},
    {path: 'websocket-test', component: WebsocketTestComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
