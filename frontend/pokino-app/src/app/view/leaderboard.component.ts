import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';

import { Router } from '@angular/router';
import {JsonLeaderboardObject} from "../api/json-leaderboard-object";

@Component({
  selector: 'app-root',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss', './common.scss']
})
export class LeaderboardComponent {
  declare leaderboardEntries: JsonLeaderboardObject;

  constructor(private router: Router, private apiService: ApiService) {
    this.initLeaderboard();
  }

  public gotoMainMenu(): void {
    this.router.navigate(['/mainMenu']);
  }

  public async initLeaderboard(): Promise<void> {
    this.leaderboardEntries = await this.apiService.getLeaderboard();
  }
}
