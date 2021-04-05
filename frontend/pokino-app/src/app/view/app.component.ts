import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokino';
  ready = false;
  
  constructor(private router: Router, private apiService: ApiService) {
  }
  
  toggleReady() {
	  this.ready = !this.ready;
	  alert("ready");
  }
  
  public getReadyMessage() {
	  return (this.ready ? "" : "not ") + "ready";
  }
  
  public gotoGameScreen(){
    this.router.navigate(['/gameScreen']);
  }
  
  public demoApiTest() {
	  let accounts: any = this.apiService.getAccountsDemo();
	  let firstAccount: any = accounts[0]['name'];
	  alert("first account belongs to: " + firstAccount);
  }
}
