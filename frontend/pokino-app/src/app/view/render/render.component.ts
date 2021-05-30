import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three'
import { PokinoScene } from "../../model/render/PokinoScene"
import { player } from "../../model/render/player"
import { enemy } from "../../model/render/enemy"
import { mouseInfo } from "../../model/render/handleInput"
import { physics } from '../../model/render/physics';
import { ApiService } from '../../api/api.service';
import { apiHandler } from '../../model/render/apiHandler';
import { Config } from '../../model/render/config'
import TextSprite from '@seregpie/three.text-sprite';
import { JsonGameStateObject } from "../../api/json-game-state.object";
import { JsonGameStatusObject } from "../../api/json-game-status.object";
import { JsonGameEndsObject } from "../../api/json-game-ends-object";
import { JsonGameInitObject } from "../../api/json-game-init-object";
import { JsonPokemonObject } from "../../api/json-pokemon-object";
import * as Stomp from "stompjs";
import { GameStreamingService } from "../websocket-adapter/game-streaming.service";
import { Router } from "@angular/router";



@Component({
    selector: 'app-render',
    templateUrl: './render.component.html',
    styleUrls: ['./render.component.scss']
})
export class RenderComponent implements OnInit, OnDestroy {


    declare webSocket: WebSocket;
    declare downstreamWebSocket: WebSocket;
    declare shutdownWebSocket: WebSocket;
    declare client: Stomp.Client;
    declare shutdownClient: Stomp.Client;
    declare downstreamClient: Stomp.Client;
    gameState: JsonGameStateObject = new JsonGameStateObject();
    standings: Map<string, number> = new Map();

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

    interval = setInterval(() => {
    }, 1000);

    @HostListener('mousedown', ['$event'])
    onMousedown() {
        this.m_mouseInfo.isPressed = true;
        //start timer
        const timerInterval: number = 10;
        const timerIncrement: number = this.config.ballLoadUpSpeed;
        const maxTime: number = this.config.maxTimeLoadUpBall;
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

    m_sceneWidth: number = 1624;
    m_sceneHeight: number = 540;
    m_scene: PokinoScene = new PokinoScene();
    m_player: player = new player(this.m_sceneWidth, this.m_sceneHeight);
    m_enemy: enemy = new enemy(new JsonPokemonObject(), this.m_sceneHeight);
    m_physics: physics = new physics(this.m_sceneWidth, this.m_sceneHeight);
    m_mouseInfo: mouseInfo = new mouseInfo();
    m_assetPath = '../../assets/';
    m_pokemonMaterialSet = false;
    m_pokemonMaterialName = 'Pikachu';
    m_apiHandler: apiHandler;
    config: Config;
    m_infoTextPlayer1: TextSprite = new TextSprite();
    m_infoTextPlayer2: TextSprite = new TextSprite();

    m_mouseCursor: THREE.Mesh = new THREE.Mesh();
    updated: boolean = false;

    constructor(private apiService: ApiService, private gameStreamingService: GameStreamingService, private router: Router) {

        this.config = require('../../model/render/config.json');
        //init scene so camera is not undefined
        this.m_scene.init(100,100);

        
        this.m_apiHandler = new apiHandler(apiService);
        // wait for server response to return pokemon data to fully initialise the game
        this.m_apiHandler.fetchRandomPokemon().then((pokemon) =>  {
            this.m_scene = new PokinoScene();
            this.m_scene.init(this.m_sceneWidth, this.m_sceneHeight);
            this.m_player = new player(this.m_sceneWidth, this.m_sceneHeight);

            this.m_enemy = new enemy(pokemon, this.m_sceneHeight);

            this.m_scene.addPlayer(this.m_player);
            this.m_scene.addEnemy(this.m_enemy);

            this.m_mouseInfo = new mouseInfo();
            this.m_physics = new physics(this.m_sceneWidth, this.m_sceneHeight);

            //add ball and enemy to physics entities
            this.m_physics.ball = this.m_player.m_ball.m_ballBody;
            this.m_physics.enemy = this.m_enemy.m_enemyBody;


            this.setupMouseCursor();
            this.setupSecondPlayer();
            this.setupInfoText();
        });


    }

    setupInfoText() {

        //player info
        this.m_infoTextPlayer1 = new TextSprite({
            alignment: 'left',
            color: '#ff0000',
            fontFamily: '"Times New Roman", Times, serif',
            fontSize: 20,
            fontStyle: 'normal',
            text: [
                'Your Name: ',
                'Your Score: '
            ].join('\n'),
        });
        var margin = 20;
        this.m_infoTextPlayer1.translateX(- this.m_sceneWidth / 2 + margin * 4);
        this.m_infoTextPlayer1.translateY(this.m_sceneHeight / 2 - margin * 4);

        //enemy info
        this.m_infoTextPlayer2 = new TextSprite({
            alignment: 'left',
            color: '#ff00ff',
            fontFamily: '"Times New Roman", Times, serif',
            fontSize: 20,
            fontStyle: 'normal',
            text: [
                'Enemy Name: ',
                'Enemy Score: '
            ].join('\n'),
        });
        var margin = 20;
        this.m_infoTextPlayer2.translateX(this.m_sceneWidth / 2 - margin * 4);
        this.m_infoTextPlayer2.translateY(this.m_sceneHeight / 2 - margin * 4);

        this.m_scene.add(this.m_infoTextPlayer1);
        this.m_scene.add(this.m_infoTextPlayer2);
    }

    updateInfoText() {
        //player info
        this.m_infoTextPlayer1.text = [
            this.gameStreamingService.player.name,
            this.gameState.score.player1Id
        ].join('\n');

        //enemy info
        this.m_infoTextPlayer2.text = [
            "not available yet",
            this.gameState.score.player2Id
        ].join('\n');
    }

    setupSecondPlayer() {
        var playerSize = 100;
        const geometry = new THREE.PlaneGeometry(playerSize, playerSize);
        const loader = new THREE.TextureLoader();
        const material = new THREE.MeshBasicMaterial({
            map: loader.load(this.m_assetPath + 'images/ash.png'),
            transparent: true,
            alphaTest: 0.5
        });
        const m_mesh = new THREE.Mesh(geometry, material);

        m_mesh.translateX(this.m_sceneWidth / 2 - playerSize / 2);
        m_mesh.translateY(-this.m_sceneHeight / 2 + playerSize / 2);
        m_mesh.scale.x *= -1;
        this.m_scene.add(m_mesh);
    }

    setupMouseCursor() {
        var mouseCursorSize = 30;
        const geometry = new THREE.PlaneGeometry(mouseCursorSize, mouseCursorSize);
        const loader = new THREE.TextureLoader();
        const material = new THREE.MeshBasicMaterial({
            map: loader.load(this.m_assetPath + 'images/Arrow_white.png'),
            transparent: true,
            alphaTest: 0.5
        });
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
    highlightTextureSet: boolean = false;
    unhighlightTextureSet: boolean = false;
    ballIsFlying: boolean = false;
    renderScene() {
        // render loop
        window.requestAnimationFrame(() => this.renderScene());

        // console.log('------------')
        // console.log('gameState.currentPlayerId              ' + this.gameState.currentPlayerId);
        // console.log('gameStreamingService.playerTurnId      ' + this.gameStreamingService.playerTurnId);
        // console.log('gameStreamingService.player.id:        ' + this.gameStreamingService.player.id);
        // console.log('------------')

        if (this.gameStreamingService.isMyTurn) {

            //highlight player
            if (!this.highlightTextureSet) {
                const loader = new THREE.TextureLoader();
                this.m_player.m_mesh.material = new THREE.MeshBasicMaterial({ map: loader.load(this.m_assetPath + 'images/ash_highlighted.png'), transparent: true, alphaTest: 0.5 });
                this.highlightTextureSet = true;
                this.unhighlightTextureSet = false;
            }


            //unhide throw progress bar and arrow
            this.m_mouseCursor.visible = true;
            this.m_player.m_throwForceProgressBar.visible = true;

            // update
            this.m_physics.update(this.m_apiHandler.getWind());
            this.m_enemy.update();
            this.m_scene.update(this.m_apiHandler.getWind());
            this.m_player.update(this.m_mouseInfo);
            this.updateMouseCursor();

            this.fillGameState();
            this.sendGameState(this.gameState);



            if (this.m_player.m_ball.m_ballBody.activate == true && this.ballIsFlying == false) {
                //set ball status to flying, does it hit?
                this.ballIsFlying = true;
            }
            if (this.ballIsFlying == true) {
                if (this.m_player.m_ball.m_ballBody.activate == false) {
                    //ball did not hit
                    this.gameStreamingService.sendBallThrown(false);
                    this.ballIsFlying = false;
                }

            }

            if (this.m_enemy.m_enemyBody.collided && !this.updated) {
                this.updated = true;
                //enemy collided with ball, player has hit
                this.gameStreamingService.sendBallThrown(true);
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

            console.log("not my turn")

            //unhighlight player
            if (!this.unhighlightTextureSet) {
                const loader = new THREE.TextureLoader();
                this.m_player.m_mesh.material = new THREE.MeshBasicMaterial({ map: loader.load(this.m_assetPath + 'images/ash.png'), transparent: true, alphaTest: 0.5 });
                this.unhighlightTextureSet = true;
                this.highlightTextureSet = false;
            }

            //hide throw progress bar and arrow
            this.m_mouseCursor.visible = false;
            this.m_player.m_throwForceProgressBar.visible = false;

            //unsquish pokemon
            this.m_enemy.m_mesh.scale.x = 1;
            this.m_enemy.m_mesh.scale.y = 1;


            //render game according to game state
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
        }
        this.updateInfoText();
        this.renderer.render(this.m_scene, this.m_scene.m_camera);
    }


    fillGameState() {
        this.gameState.ball.x = this.m_player.m_ball.m_mesh.position.x;
        this.gameState.ball.y = this.m_player.m_ball.m_mesh.position.y;
        this.gameState.pokemon.isHit = this.m_enemy.m_enemyBody.collided;
        this.gameState.pokemon.name = this.m_enemy.m_pokemon.name;
        this.gameState.pokemon.x = this.m_enemy.m_mesh.position.x;
        this.gameState.pokemon.y = this.m_enemy.m_mesh.position.y;
        this.gameState.sendingPlayerId = this.gameStreamingService.player.id;
    }


    endGame(gameEndsMessage: JsonGameEndsObject): void {
        // TODO Steven: weiss nicht ob du noch was anzeigen willst wenn das Spiel fertig ist oder so;
        // falls ja wäre hier der Ort dafür, die Methode wird ausgeführt nachdem das Backend die Message
        // schickt mit der das Game beendet wird
        const playerScore1: string = gameEndsMessage.playerName1 + "'s score: " + gameEndsMessage.finalStandings.get(gameEndsMessage.playerId1);
        const playerScore2: string = gameEndsMessage.playerName2 + "'s score: " + gameEndsMessage.finalStandings.get(gameEndsMessage.playerId2);
        alert('game ended! final standings: \n' + playerScore1 + '\n' + playerScore2);
        this.router.navigate(['/mainMenu']);
    }

    ngOnInit(): void {
        this.openWebSocketConnections();
    }

    ngOnDestroy(): void {
        this.closeWebsocketConnections();
    }

    public openWebSocketConnections(): void {
        this.webSocket = this.gameStreamingService.getWebSocket();
        this.downstreamWebSocket = this.gameStreamingService.getWebSocket();
        this.shutdownWebSocket = this.gameStreamingService.getWebSocket();
        this.client = Stomp.over(this.webSocket);
        this.downstreamClient = Stomp.over(this.downstreamWebSocket);
        this.shutdownClient = Stomp.over(this.shutdownWebSocket);
        console.log('connecting to downstream topic');
        this.downstreamClient.debug = () => {};
        this.downstreamClient.connect({}, () => {
            this.downstreamClient.subscribe(this.gameStreamingService.getGameDownstreamTopic(), (item) => {
                console.log('receiving game state from backend');
                this.gameState = JSON.parse(item.body);
            });
        });
        this.shutdownClient.debug = () => {};
        this.shutdownClient.connect({}, () => {
            this.shutdownClient.subscribe(this.gameStreamingService.getGameShutdownTopic(), (item) => {
                console.log('game ends!');
                const gameEndsObject: JsonGameEndsObject = JSON.parse(item.body);
                this.endGame(gameEndsObject);
            });
        });
        this.client.debug = () => {};
        this.client.connect({}, () => {
            this.client.subscribe(this.gameStreamingService.getPlayerSwitchTopic(), (item) => {
                console.log('switch message received!');
                const gameStatus: JsonGameStatusObject = JSON.parse(item.body);
                this.standings = gameStatus.standings;
                this.gameStreamingService.isMyTurn = !this.gameStreamingService.isMyTurn;
            });
        });
    }

    public sendGameState(gameState: JsonGameStateObject): void {
        // ignore sending if the players are changing turns because they shouldn't send anymore during the process of it
        this.client.send(this.gameStreamingService.getGameUpstreamTopic(), {}, JSON.stringify(gameState));
    }

    public closeWebsocketConnections(): void {
        if (this.downstreamClient) {
            this.downstreamClient.unsubscribe("sub-0");
            this.downstreamWebSocket.close();
        }
        if (this.shutdownClient) {
            this.shutdownClient.unsubscribe("sub-0");
            this.shutdownWebSocket.close();
        }
        if (this.client) {
            this.client.unsubscribe("sub-0");
            this.webSocket.close();
        }
    }

}