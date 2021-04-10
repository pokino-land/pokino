import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  title = 'pokino';
  ready = false;
  
  constructor(private router: Router, private apiService: ApiService) {
  }
  
  public gotoMainMenu(){
    this.router.navigate(['/mainMenu']);
  }
}
