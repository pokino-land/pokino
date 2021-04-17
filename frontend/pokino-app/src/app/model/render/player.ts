import * as THREE from 'three';

import { ball } from "./ball"
import { mouseInfo } from "./handleInput"

export class player {

    //the players mesh
    m_mesh: THREE.Mesh;
    m_ball: ball;
    m_sceneWidth: number;
    m_sceneHeight: number;
    mouseWasDown: boolean = false;
    m_assetPath = '../../assets/';

    constructor(width: number, height: number) {

        this.m_sceneWidth = width;
        this.m_sceneHeight = height;

        var playerWidth = 100;
        var playerHeight = 100;

        const geometry = new THREE.PlaneGeometry(playerWidth, playerHeight);
        const loader = new THREE.TextureLoader();
        const material = new THREE.MeshBasicMaterial({ map: loader.load(this.m_assetPath + 'images/ash.png'), transparent: true, alphaTest: 0.5 });
        this.m_mesh = new THREE.Mesh(geometry, material);

        this.m_mesh.translateX(- this.m_sceneWidth / 2 + playerWidth / 2);
        this.m_mesh.translateY(- this.m_sceneHeight / 2 + playerHeight / 2);
        const ballRadius = 20;
        this.m_ball = new ball(ballRadius, this.m_sceneWidth, this.m_sceneHeight);
    }

    help = 0;
    forceapplied = false;

    update(mouseInfo: mouseInfo) {
        if (mouseInfo.isPressed) {
            this.mouseWasDown = true;
        }

        if (!mouseInfo.isPressed && this.mouseWasDown) {
            var forceDir = new THREE.Vector2(mouseInfo.x - this.m_mesh.position.x, mouseInfo.y - this.m_mesh.position.y);
            forceDir.normalize();

            this.m_ball.updateForce(forceDir, mouseInfo.secondsClicked);
            this.mouseWasDown = false;
            //we dont start at 0 so the ball has some more force even when the click is really short
            const startTimeForSecondsClicked = 0.5;
            mouseInfo.secondsClicked = startTimeForSecondsClicked;
            this.forceapplied = true;
        }
        if (this.forceapplied) {
            //I should use a timer for this...
            this.help++;
            if (this.help > 2) {
                this.m_ball.updateForce(new THREE.Vector2(0, 0), 0);
                this.forceapplied = false;
                this.help = 0;
            }

        }

        this.m_ball.update();

    }
}
