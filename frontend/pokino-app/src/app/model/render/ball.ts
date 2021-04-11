import * as THREE from 'three';
import { ballPhysicsObject, physics } from './physics';

export class ball {

    m_mesh: THREE.Mesh;


    m_ballBody: ballPhysicsObject;

    radius: number;
    position: THREE.Vector2 = new THREE.Vector2(0, 0);
    m_assetPath = '../../assets/';
    constructor(radius: number) {

        this.radius = radius;
        const geometry = new THREE.CircleGeometry(radius, 32);

        const loader = new THREE.TextureLoader();
        const material = new THREE.MeshBasicMaterial({ map: loader.load(this.m_assetPath + 'images/pokeball.png'), transparent: true, alphaTest: 0.5 });
        this.m_mesh = new THREE.Mesh(geometry, material);

        //move ball out of screen when its not needed
        const restPositionOfBall = 400;
        this.setPosition(restPositionOfBall, 0);

        this.m_ballBody = new ballPhysicsObject(radius, new THREE.Vector2(restPositionOfBall, 0));

    }

    setPosition(x: number, y: number) {
        this.m_mesh.position.set(x, y, 0);
    }

    updateForce(forceDir: THREE.Vector2, strength: number) {
        if (!this.m_ballBody.activate) {

            const playerPosX = -250;
            const playerPosY = -100;
            this.m_ballBody.setPosition(playerPosX, playerPosY);
            const multiplicator = 500;
            this.m_ballBody.force = new THREE.Vector2(forceDir.x * multiplicator * strength, forceDir.y * multiplicator * strength);
            this.m_ballBody.activate = true;
        } else {
            this.m_ballBody.force = new THREE.Vector2(0, 0);
        }

    }

    update() {

        this.setPosition(this.m_ballBody.position.x, this.m_ballBody.position.y);

    }
}
