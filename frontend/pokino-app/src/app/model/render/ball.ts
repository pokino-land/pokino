import * as THREE from 'three';
import { physics } from './physics';

export class ball{
   
    m_mesh:THREE.Mesh;
    m_physics:physics;
    constructor(){

        const geometry = new THREE.PlaneGeometry(5,5,32);
        const material = new THREE.MeshBasicMaterial({color: 0x04ff61});
        this.m_mesh = new THREE.Mesh(geometry, material);
        this.m_physics = new physics();

    }

    update(){

        this.m_physics.updatePositionAccordingToVeloctiy();
        
    }

}