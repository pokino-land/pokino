import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokino';
  ready = false;
  
  toggleReady() {
	  this.ready = !this.ready;
  }
  
  public getReadyMessage() {
	  return (this.ready ? "" : "not ") + "ready";
  }
}
