import { HostListener, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import {PokinoScene} from '../../model/render/PokinoScene';
import {player} from '../../model/render/player';
import {enemy} from '../../model/render/enemy';
import {mouseInfo} from '../../model/render/handleInput';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss']
})
export class RenderComponent implements OnInit {
  constructor() {
    this.m_scene = new PokinoScene();
    this.m_scene.init(this.width, this.height);
    this.m_player = new player();
    this.m_player.width = this.width;
    this.m_player.height = this.height;
    this.m_enemy = new enemy();

    this.m_scene.addPlayer(this.m_player);
    this.m_scene.addEnemy(this.m_enemy);

    this.m_mouseInfo = new mouseInfo();

  }

  @ViewChild('rendererContainer') rendererContainer: ElementRef | undefined;


  renderer = new THREE.WebGLRenderer();

  width = 600;
  height = 300;
  m_scene: PokinoScene;
  m_player: player;
  m_enemy: enemy;
  m_mouseInfo: mouseInfo;


  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    this.m_mouseInfo.x = (event.x - this.width / 2);
    this.m_mouseInfo.y = (event.y - this.height / 2) * -1;
  }
  @HostListener('mousedown', ['$event'])
    onMousedown() {
      this.m_mouseInfo.isPressed = true;
    }
    @HostListener('mouseup')
    onMouseup() {
      this.m_mouseInfo.isPressed = false;
    }

  ngAfterViewInit() {

    // setup render context
    this.renderer.setSize(this.width, this.height);
    if (this.rendererContainer != undefined) {
     this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    }
    this.renderScene();
}

  renderScene(){
    // render loop
    window.requestAnimationFrame(() => this.renderScene());

    // update
    this.m_player.update(this.m_mouseInfo);
    this.m_enemy.update();
    this.m_scene.update();

    // render
    this.renderer.render(this.m_scene, this.m_scene.m_camera);
  }

  ngOnInit(): void {
  }

}
