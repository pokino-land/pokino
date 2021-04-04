import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'pokino';
  ready = false;

  constructor(private router: Router) {}
  
  toggleReady() {
	  this.ready = !this.ready;
  }
  gotoGameScreen(){
    this.router.navigate(['/gameScreen']);
  }
  
  public getReadyMessage() {
	  return (this.ready ? "" : "not ") + "ready";
  }
}
