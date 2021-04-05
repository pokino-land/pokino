import * as THREE from 'three';
import { physics } from './physics';

export class ball{
   
    m_mesh: THREE.Mesh;
    m_physics: physics;
    m_veloctiy: boolean = false;
    constructor(){

        const geometry = new THREE.PlaneGeometry(25,25,32);
        const loader = new THREE.TextureLoader();
        const material = new THREE.MeshBasicMaterial({map: loader.load('../../assets/images/pokeball.png'), transparent: true, alphaTest: 0.5});
        this.m_mesh = new THREE.Mesh(geometry, material);
        this.m_physics = new physics();
        this.setPosition(400, 0);

    }

    setPosition(x: number, y: number){
        this.m_mesh.position.set(x, y, 0);
    }

    updateVelocity(){
        this.m_veloctiy = true;
    }

    update(){
        if(this.m_veloctiy){
            var newPos: THREE.Vector2 = this.m_physics.updatePositionAccordingToVeloctiy();
            this.setPosition(newPos.x, newPos.y);
        }       
    }
}
