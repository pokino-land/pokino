import * as THREE from 'three';
import {ball} from "../../model/render/ball"
import {mouseInfo} from "../../model/render/handleInput"

export class player{

    //the players mesh
    m_mesh:THREE.Mesh;
    m_ball:ball;

    constructor(){

        const geometry = new THREE.PlaneGeometry(50,50,32);
        const material = new THREE.MeshBasicMaterial({color: 0x00ff11});
        this.m_mesh = new THREE.Mesh(geometry, material);
        this.m_mesh.translateX(-50);

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