import * as THREE from 'three';
import { ballPhysicsObject, physics } from './physics';

export class ball{
   
    m_mesh: THREE.Mesh;
    

    m_ballBody:ballPhysicsObject; 

    radius:number;
    position:THREE.Vector2 = new THREE.Vector2(0,0);

    constructor(r:number){

        this.radius = r;
        const geometry = new THREE.CircleGeometry(r, 32);

        const loader = new THREE.TextureLoader();
        const material = new THREE.MeshBasicMaterial({map: loader.load('../../assets/images/pokeball.png'), transparent: true, alphaTest: 0.5});
        this.m_mesh = new THREE.Mesh(geometry, material);
        
        this.setPosition(400, 0);

        this.m_ballBody = new ballPhysicsObject(r, new THREE.Vector2(400,0));

    }

    setPosition(x: number, y: number){
        this.m_mesh.position.set(x, y, 0);
    }

    updateVelocity(){
        this.m_ballBody.m_veloctiy = true;
    }

    update(){
        
        this.setPosition(this.m_ballBody.position.x, this.m_ballBody.position.y);
            
    }
}
