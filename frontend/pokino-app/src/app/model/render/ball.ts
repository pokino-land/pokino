import * as THREE from 'three';
import { ballPhysicsObject, physics } from './physics';
import { Config } from '../../model/render/config'
export class ball {

    m_mesh: THREE.Mesh;
    m_sceneWidth: number;
    m_sceneHeight: number;

    m_ballBody: ballPhysicsObject;

    radius: number;
    position: THREE.Vector2 = new THREE.Vector2(0, 0);
    m_assetPath = '../../assets/';
    config: Config;

    constructor(radius: number, width: number, height: number) {

        this.config = require('../../model/render/config.json');

        this.m_sceneWidth = width;
        this.m_sceneHeight = height;

        this.radius = radius;
        const geometry = new THREE.CircleGeometry(radius);

        const loader = new THREE.TextureLoader();
        const material = new THREE.MeshBasicMaterial({ map: loader.load(this.m_assetPath + 'images/pokeball.png'), transparent: true, alphaTest: 0.5 });
        this.m_mesh = new THREE.Mesh(geometry, material);

        //move ball out of screen when its not needed
        const restPositionOfBall = new THREE.Vector2(1000, 0);
        this.setPosition(restPositionOfBall.x, restPositionOfBall.y);

        this.m_ballBody = new ballPhysicsObject(radius, new THREE.Vector2(restPositionOfBall.x, restPositionOfBall.y));

    }

    setPosition(x: number, y: number) {
        this.m_mesh.position.set(x, y, 0);
    }

    updateForce(forceDir: THREE.Vector2, strength: number) {
        if (!this.m_ballBody.activate) {

            const playerWidth = 100;
            const playerHeight = 100;

            const playerPosX = - this.m_sceneWidth / 2 + playerWidth / 2;
            const playerPosY = - this.m_sceneHeight / 2 + playerHeight / 2;
            this.m_ballBody.setPosition(playerPosX, playerPosY);
            const multiplicator = this.config.ballForceMultiplicator;
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
