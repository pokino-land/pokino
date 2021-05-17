import { Component, OnInit, OnDestroy } from '@angular/core';

import * as Stomp from 'stompjs';
import {WebsocketService} from "./websocket.service";


@Component({
  selector: 'app-auction-view',
  templateUrl: './websocket-test.component.html',
  styleUrls: ['./websocket-test.component.css', '../common.scss']
})
export class WebsocketTestComponent implements OnInit, OnDestroy {

  declare webSocket: WebSocket;
  declare client: Stomp.Client;
  receivedMessages: Array<string> = [];
  input = '';

  constructor(private httpService: WebsocketService) { }

  public ngOnInit(): void {
    this.openWebSocketConnection();
  }

  public ngOnDestroy(): void {
    this.closeWebSocketConnection();
  }

  public openWebSocketConnection(): void {
    this.webSocket = this.httpService.getWebSocket();

    this.client = Stomp.over(this.webSocket);

    this.client.connect({}, () => {
      this.client.subscribe(this.httpService.getGreetingsTopic(), (item) => {
        this.addMessage(JSON.parse(item.body).content);
      });
    });
  }

  addMessage(item: any): void {
    this.receivedMessages.push(item);
  }

  public getMessages(): any[] {
    return this.receivedMessages;
  }

  sendMessage(): void {
    if (this.input) {
      this.client.send('/pokino/hello' , {}, JSON.stringify(this.input));
      this.input = '';
    }

  }

  closeWebSocketConnection(): void {
    if (this.client) {
      this.webSocket.close();
      this.client.unsubscribe("/message");
    }
  }
}
