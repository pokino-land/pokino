import { HostListener, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three'
import { PokinoScene } from "../../model/render/PokinoScene"
import { player } from "../../model/render/player"
import { enemy } from "../../model/render/enemy"
import { mouseInfo } from "../../model/render/handleInput"
import { physics, ballPhysicsObject, enemyPhysicsObject } from '../../model/render/physics';
import { ApiService } from '../../api/api.service';
import { apiHandler } from '../../model/render/apiHandler';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss']
})
export class RenderComponent implements OnInit {

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
    const maxTime: number = 1.2;
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

  //connection to database 
  m_apiHandler: apiHandler;

  m_mouseCursor: THREE.Mesh = new THREE.Mesh();
  updated: boolean = false;

  constructor(private apiService: ApiService) {

    this.m_apiHandler = new apiHandler(apiService);

    this.m_scene = new PokinoScene();
    this.m_scene.init(this.m_sceneWidth, this.m_sceneHeight);
    this.m_player = new player(this.m_sceneWidth, this.m_sceneHeight);

    this.m_enemy = new enemy(this.m_apiHandler.getRandomPokemonName(), this.m_sceneHeight);

    this.m_scene.addPlayer(this.m_player);
    this.m_scene.addEnemy(this.m_enemy);

    this.m_mouseInfo = new mouseInfo();
    this.m_physics = new physics(this.m_sceneWidth, this.m_sceneHeight);

    //add ball and enemy to physics entities
    this.m_physics.ball = this.m_player.m_ball.m_ballBody;
    this.m_physics.enemy = this.m_enemy.m_enemyBody;

    this.setupMouseCursor();
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
    //render loop
    window.requestAnimationFrame(() => this.renderScene());

    //update
    this.m_physics.updatePositionAccordingToVeloctiy();
   
    this.m_enemy.update();
    this.m_scene.update();
    this.m_player.update(this.m_mouseInfo);
    this.updateMouseCursor();
  

    if (this.m_enemy.m_enemyBody.collided && !this.updated) {
      this.m_score++;
      this.updated = true;
    }
    if (!this.m_enemy.m_enemyBody.collided && this.updated) {
      this.updated = false;
    }

    if (!this.m_enemy.m_alive) {
      this.m_scene.removeEnemy(this.m_enemy);
      //create new enemy
      this.m_enemy = new enemy(this.m_apiHandler.getRandomPokemonName(), this.m_sceneHeight);
      this.m_scene.addEnemy(this.m_enemy);
      this.m_physics.enemy = this.m_enemy.m_enemyBody;
    }
  
    //render
    this.renderer.render(this.m_scene, this.m_scene.m_camera);
  }

  ngOnInit(): void {
  }

}
