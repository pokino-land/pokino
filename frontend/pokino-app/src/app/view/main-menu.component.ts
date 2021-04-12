import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';

import { Router } from '@angular/router';
import {JsonPokemonObject} from "../api/json-pokemon-object";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  title = 'pokino';
  ready = false;
  pokemon: JsonPokemonObject = new JsonPokemonObject();
  
  constructor(private router: Router, private apiService: ApiService) {
  }
  
  toggleReady(): void {
	  this.ready = !this.ready;
  }
  
  public getReadyMessage(): string {
	  return (this.ready ? '' : 'not ') + 'ready';
  }
  
  public gotoGameScreen(): void{
    this.router.navigate(['/gameScreen']);
  }

  public gotoLeaderboard(): void{
    this.router.navigate(['/leaderboard']);
  }
  
  public getRandomPokemon(): void {
      this.apiService.getRandomPokemon()
          .subscribe((data: any) => this.pokemon = {
              name: data.name
          });
  }
}
