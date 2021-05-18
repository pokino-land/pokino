import { Injectable } from '@angular/core';
import {ApiConfig} from "../../api/api.config";

// TODO look up if we need that annotation, the feeling is that it is obsolete
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private webSocketUrl = ApiConfig.getWebsocketUrl().href;

  constructor() { }

  getWebSocket(): WebSocket {
    return new WebSocket(this.webSocketUrl);
  }

  getGameInitTopic(): string {
    return ApiConfig.getWebsocketGreetingsTopic();
  }

}
