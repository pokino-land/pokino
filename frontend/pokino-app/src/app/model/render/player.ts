import * as THREE from 'three';

import {ball} from "../../model/render/ball"
import {mouseInfo} from "../../model/render/handleInput"

export class player{

    //the players mesh
    m_mesh: THREE.Mesh;
    m_ball: ball;
    width = 600;
    height = 300;
    constructor(){

        var playerWidth = 100;
        var playerHeight = 100;

        const geometry = new THREE.PlaneGeometry(playerWidth,playerHeight,32);
        const loader = new THREE.TextureLoader();
        const material = new THREE.MeshBasicMaterial({map: loader.load('../../assets/images/ash.png')});
        this.m_mesh = new THREE.Mesh(geometry, material);

        this.m_mesh.translateX(- this.width/2 + playerWidth/2);
        this.m_mesh.translateY(- this.height/2 + playerHeight/2);

        this.m_ball = new ball();
    }



    update(mouseInfo:mouseInfo){
        if(mouseInfo.isPressed){
            console.log(mouseInfo.x);
            console.log(mouseInfo.y);
        }
         

         //if clicked update m_ball with some velocity 
         //if mouse is pressed
         //m_ball.update(velocitiy: 100m/s)

    }
}
