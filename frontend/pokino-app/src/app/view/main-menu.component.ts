import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  title = 'pokino';
  ready = false;
  
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
  
  public demoApiTest(): void {
	  const accounts: any = this.apiService.getAccountsDemo();
	  const firstAccount: any = accounts[0][0];
	  alert("first account belongs to: " + firstAccount);
  }
}
