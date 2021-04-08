import { HostListener, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three'
import {PokinoScene} from "../../model/render/PokinoScene"
import {player} from "../../model/render/player"
import {enemy} from "../../model/render/enemy"
import {mouseInfo} from "../../model/render/handleInput"
import { physics, ballPhysicsObject, enemyPhysicsObject } from '../../model/render/physics';


@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss']
})
export class RenderComponent implements OnInit {

  @ViewChild('rendererContainer') rendererContainer: ElementRef | undefined;


  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    this.m_mouseInfo.x = (event.x - this.width/2);
    this.m_mouseInfo.y = (event.y - this.height/2)* -1;
  }
  @HostListener('mousedown', ['$event'])
    onMousedown() {
      this.m_mouseInfo.isPressed = true;
    }
    @HostListener('mouseup')
    onMouseup() {
      this.m_mouseInfo.isPressed = false;
    }


  renderer = new THREE.WebGLRenderer();

  width: number = 600;
  height: number = 300;
  m_scene: PokinoScene;
  m_player: player;
  m_enemy: enemy;
  m_physics: physics;
  m_mouseInfo: mouseInfo;
  constructor() { 
    this.m_scene = new PokinoScene();
    this.m_scene.init(this.width, this.height);
    this.m_player = new player();
    
    this.m_enemy = new enemy();

    this.m_scene.addPlayer(this.m_player);
    this.m_scene.addEnemy(this.m_enemy);

    this.m_mouseInfo = new mouseInfo();
    this.m_physics = new physics();

    //add ball and enemy to physics entities
    this.m_physics.ball = this.m_player.m_ball.m_ballBody;
    this.m_physics.enemy = this.m_enemy.m_enemyBody;

  }

  ngAfterViewInit() {

    //setup render context
    this.renderer.setSize(this.width, this.height);
    if(this.rendererContainer != undefined)
     this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.renderScene();
}

  renderScene(){
    //render loop
    window.requestAnimationFrame(() => this.renderScene());

    //update
    this.m_physics.updatePositionAccordingToVeloctiy();

    this.m_player.update(this.m_mouseInfo);
    this.m_enemy.update();
    this.m_scene.update();

    //render
    this.renderer.render(this.m_scene, this.m_scene.m_camera);
  }

  ngOnInit(): void {
  }

}
