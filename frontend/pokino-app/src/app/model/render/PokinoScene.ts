import * as THREE from 'three';
import {player} from "../../model/render/player"
import {enemy} from "../../model/render/enemy"
export class PokinoScene extends THREE.Scene{


    m_camera!: THREE.OrthographicCamera;

    init(width:number, height:number){
        //setup camera
        this.m_camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2,height / - 2, 1, 1000 );
        this.m_camera.position.z = 1000;
        
       


    }

    update(){

    }

    addPlayer(player:player){
        this.add(player.m_mesh);
        this.add(player.m_ball.m_mesh);
    }

    addEnemy(enemy:enemy){
        this.add(enemy.m_mesh);
    
    }
}