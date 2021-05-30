import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderComponent } from '../view/render/render.component';

import {MainMenuComponent} from '../view/main-menu.component';
import {LeaderboardComponent} from '../view/leaderboard.component';

const routes: Routes = [
    {path: '', component: MainMenuComponent},
    {path: 'mainMenu', component: MainMenuComponent},
    {path: 'gameScreen', component: RenderComponent},
    {path: 'leaderboard', component: LeaderboardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
