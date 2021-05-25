import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three'
import { PokinoScene } from "../../model/render/PokinoScene"
import { player } from "../../model/render/player"
import { enemy } from "../../model/render/enemy"
import { mouseInfo } from "../../model/render/handleInput"
import { physics } from '../../model/render/physics';
import { ApiService } from '../../api/api.service';
import { apiHandler } from '../../model/render/apiHandler';
import { JsonGameStateObject } from "../../api/json-game-state.object";
import * as Stomp from "stompjs";
import { GameStreamingService } from "../websocket-adapter/game-streaming.service";
import { Router } from "@angular/router";
import { JsonGameEndsObject } from "../../api/json-game-ends-object";


enum WebSocketConnection { UNDEFINED, OPEN, CLOSED };

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss']
})
export class RenderComponent implements OnInit, OnDestroy {


  declare webSocket: WebSocket;
  declare client: Stomp.Client;
  gameState: JsonGameStateObject = new JsonGameStateObject();

  @ViewChild('rendererContainer') rendererContainer: ElementRef | undefined;


  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {

    //get position of html element to account for offsets
    const node = event.target as HTMLElement;
    const { left, top } = node.getBoundingClientRect();
    //transform mouse coordinates into threejs coordinate frame
    this.m_mouseInfo.x = (event.x - this.m_sceneWidth / 2) + left;
    this.m_mouseInfo.y = (event.y - this.m_sceneHeight / 2) * -1 + top;

  }
  interval = setInterval(() => { }, 1000);
  @HostListener('mousedown', ['$event'])
  onMousedown() {
    this.m_mouseInfo.isPressed = true;
    //start timer
    const timerInterval: number = 10;
    const timerIncrement: number = 0.01;
    const maxTime: number = 1.4;
    this.interval = setInterval(() => {
      if (this.m_mouseInfo.secondsClicked < maxTime)
        this.m_mouseInfo.secondsClicked += timerIncrement;
      else
        this.m_mouseInfo.secondsClicked = maxTime;
    }, timerInterval)

  }
  @HostListener('mouseup')
  onMouseup() {
    this.m_mouseInfo.isPressed = false;

    clearInterval(this.interval);
  }


  renderer = new THREE.WebGLRenderer();

  m_sceneWidth: number = 1024;
  m_sceneHeight: number = 540;
  m_scene: PokinoScene;
  m_player: player;
  m_enemy: enemy;
  m_physics: physics;
  m_mouseInfo: mouseInfo;
  m_score: number = 0;
  m_assetPath = '../../assets/';
  m_webSocket: WebSocketConnection = WebSocketConnection.UNDEFINED;
  m_pokemonMaterialSet = false;
  m_pokemonMaterialName = 'Pikachu';
  //connection to database 
  m_apiHandler: apiHandler;

  m_mouseCursor: THREE.Mesh = new THREE.Mesh();
  updated: boolean = false;

  constructor(private apiService: ApiService, private gameStreamingService: GameStreamingService, private router: Router) {

    this.m_apiHandler = new apiHandler(apiService);

    this.m_scene = new PokinoScene();
    this.m_scene.init(this.m_sceneWidth, this.m_sceneHeight);
    this.m_player = new player(this.m_sceneWidth, this.m_sceneHeight);

    this.m_enemy = new enemy(this.m_apiHandler.updateRandomPokemon(), this.m_sceneHeight);

    this.m_scene.addPlayer(this.m_player);
    this.m_scene.addEnemy(this.m_enemy);

    this.m_mouseInfo = new mouseInfo();
    this.m_physics = new physics(this.m_sceneWidth, this.m_sceneHeight);

    //add ball and enemy to physics entities
    this.m_physics.ball = this.m_player.m_ball.m_ballBody;
    this.m_physics.enemy = this.m_enemy.m_enemyBody;

    this.setupMouseCursor();
    this.setupSecondPlayer();
  }

  setupSecondPlayer() {
    var playerSize = 100;
    const geometry = new THREE.PlaneGeometry(playerSize, playerSize);
    const loader = new THREE.TextureLoader();
    const material = new THREE.MeshBasicMaterial({ map: loader.load(this.m_assetPath + 'images/ash.png'), transparent: true, alphaTest: 0.5 });
    const m_mesh = new THREE.Mesh(geometry, material);

    m_mesh.translateX(this.m_sceneWidth / 2 - playerSize / 2);
    m_mesh.translateY(- this.m_sceneHeight / 2 + playerSize / 2);
    m_mesh.scale.x *= -1;
    this.m_scene.add(m_mesh);
  }

  setupMouseCursor() {
    var mouseCursorSize = 30;
    const geometry = new THREE.PlaneGeometry(mouseCursorSize, mouseCursorSize);
    const loader = new THREE.TextureLoader();
    const material = new THREE.MeshBasicMaterial({ map: loader.load(this.m_assetPath + 'images/Arrow_white.png'), transparent: true, alphaTest: 0.5 });
    this.m_mouseCursor = new THREE.Mesh(geometry, material);
    this.m_mouseCursor.position.x = this.m_player.m_mesh.position.x;
    this.m_mouseCursor.position.y = this.m_player.m_mesh.position.y;
    this.m_scene.add(this.m_mouseCursor);
  }
  updateMouseCursor() {

    var direction = new THREE.Vector2(this.m_mouseInfo.x - this.m_player.m_mesh.position.x, this.m_mouseInfo.y - this.m_player.m_mesh.position.y);
    direction.normalize();

    //calculate angle

    var angle = direction.angle();

    this.m_mouseCursor.setRotationFromAxisAngle(new THREE.Vector3(0, 0, 1), angle - Math.PI / 2);

    var distanceFromPlayer = 50;

    this.m_mouseCursor.position.x = this.m_player.m_mesh.position.x + direction.x * distanceFromPlayer;
    this.m_mouseCursor.position.y = this.m_player.m_mesh.position.y + direction.y * distanceFromPlayer;

  }

  ngAfterViewInit() {

    //setup render context
    this.renderer.setSize(this.m_sceneWidth, this.m_sceneHeight);
    if (this.rendererContainer != undefined)
      this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.renderScene();
  }

  renderScene() {
    // render loop
    window.requestAnimationFrame(() => this.renderScene());

    console.log(this.gameStreamingService.player.id);

    if (this.gameStreamingService.isMyTurn()) {

      if (this.m_webSocket == WebSocketConnection.UNDEFINED || this.m_webSocket == WebSocketConnection.OPEN) {
        this.closeDownStreamConnection();
        this.m_webSocket = WebSocketConnection.CLOSED;
      }

      // update
      this.m_physics.update();
      this.m_enemy.update();
      this.m_scene.update();
      this.m_player.update(this.m_mouseInfo);
      this.updateMouseCursor();

      this.fillGameState();
      this.sendGameState();


      if (this.m_enemy.m_enemyBody.collided && !this.updated) {
        this.m_score++;
        this.updated = true;
        if (this.gameState.currentPlayerId == 0)
          this.gameState.currentPlayerId = 1;
        else
          this.gameState.currentPlayerId = 0;
      }
      if (!this.m_enemy.m_enemyBody.collided && this.updated) {
        this.updated = false;
      }

      if (!this.m_enemy.m_alive) {
        this.m_scene.removeEnemy(this.m_enemy);
        // create new enemy
        this.m_enemy = new enemy(this.m_apiHandler.updateRandomPokemon(), this.m_sceneHeight);
        this.m_scene.addEnemy(this.m_enemy);
        this.m_physics.enemy = this.m_enemy.m_enemyBody;
      }
    } else {

      //render game accoring to game state
      this.m_player.m_ball.m_mesh.position.x = this.gameState.ball.x * -1; //flip x axis
      this.m_player.m_ball.m_mesh.position.y = this.gameState.ball.y;
      this.m_enemy.m_mesh.position.x = this.gameState.pokemon.x * -1; //flip x axis
      this.m_enemy.m_mesh.position.y = this.gameState.pokemon.y;
      if (!this.m_pokemonMaterialSet) {
        this.m_enemy.setMaterial(this.gameState.pokemon.name);
        this.m_pokemonMaterialSet = true;
        this.m_pokemonMaterialName = this.gameState.pokemon.name;
      }
      if (this.gameState.pokemon.name != this.m_pokemonMaterialName) {
        this.m_pokemonMaterialSet = false;
      }

      if (this.m_webSocket == WebSocketConnection.UNDEFINED || this.m_webSocket == WebSocketConnection.CLOSED) {
        this.openDownStreamConnection();
        this.m_webSocket = WebSocketConnection.OPEN;
      }

    }

    // render
    this.renderer.render(this.m_scene, this.m_scene.m_camera);

  }


  fillGameState() {
    this.gameState.ball.x = this.m_player.m_ball.m_mesh.position.x;
    this.gameState.ball.y = this.m_player.m_ball.m_mesh.position.y;
    this.gameState.pokemon.isHit = this.m_enemy.m_enemyBody.collided;
    this.gameState.pokemon.name = this.m_enemy.m_pokemon.name;
    this.gameState.pokemon.x = this.m_enemy.m_mesh.position.x;
    this.gameState.pokemon.y = this.m_enemy.m_mesh.position.y;
    //this.gameState.scores.player1Id = this.m_score;

  }

  endGame(gameEndsMessage: JsonGameEndsObject): void {
    // TODO Steven: weiss nicht ob du noch was anzeigen willst wenn das Spiel fertig ist oder so;
    // falls ja wäre hier der Ort dafür, die Methode wird ausgeführt nachdem das Backend die Message
    // schickt mit der das Game beendet wird
    this.router.navigate(['/mainMenu']);
  }

  ngOnInit(): void {
    this.openShutdownConnection();
  }

  ngOnDestroy(): void {
    this.closeDownStreamConnection();
    this.closeShutdownConnection();
  }

  private openShutdownConnection(): void {

    this.webSocket = this.gameStreamingService.getWebSocket();
    this.client = Stomp.over(this.webSocket);

    this.client.connect({}, () => {
      this.client.subscribe(this.gameStreamingService.getGameShutdownTopic(), (item) => {
        const response: JsonGameEndsObject = JSON.parse(item.body);
        const gameEndsMessage: JsonGameEndsObject = response;
        if (gameEndsMessage.gameId === this.gameStreamingService.currentGameId) {
          this.endGame(gameEndsMessage);
        }
      });
    });
  }

  // TODO Leo refactor these into service, would probably make more sense to have them there
  public openDownStreamConnection(): void {
    this.client.subscribe(this.gameStreamingService.getGameDownstreamTopic(), (item) => {
      this.gameStreamingService.downStreamSubscribed = true;
      console.log('got the game state from backend');
      this.gameState = JSON.parse(item.body);
    });
  }

  private sendGameState(): void {
    console.log('Calling sendGameState...');
    this.client.send(this.gameStreamingService.getGameUpstreamTopic(), {}, JSON.stringify(this.gameState));
  }

  private closeDownStreamConnection(): void {
    const gameTopic = this.gameStreamingService.getGameDownstreamTopic();
    if (this.client && this.gameStreamingService.downStreamSubscribed) {
      this.gameStreamingService.downStreamSubscribed = false;
      this.webSocket.close();
      this.client.unsubscribe(gameTopic);
    }
  }

  private closeShutdownConnection(): void {
    const gameTopic = this.gameStreamingService.getGameShutdownTopic();
    if (this.client) {
      this.webSocket.close();
      this.client.unsubscribe(gameTopic);
    }
  }

}
