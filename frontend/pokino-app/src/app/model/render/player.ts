import { sharedStylesheetJitUrl } from '@angular/compiler';
import * as THREE from 'three';

import { ball } from "./ball"
import { mouseInfo } from "./handleInput"
import { Config } from '../../model/render/config'

export class player {

    //the players mesh
    m_mesh: THREE.Mesh;
    m_ball: ball;
    m_sceneWidth: number;
    m_sceneHeight: number;
    mouseWasDown: boolean = false;
    m_assetPath = '../../assets/';
    m_throwForceProgressBar: THREE.Mesh = new THREE.Mesh();
    m_playerWidth = 100;
    m_playerHeight = 100;
    config: Config;

    constructor(width: number, height: number) {

        this.m_sceneWidth = width;
        this.m_sceneHeight = height;
        this.config = require('../../model/render/config.json');


        const geometry = new THREE.PlaneGeometry(this.m_playerWidth, this.m_playerHeight);
        const loader = new THREE.TextureLoader();
        const material = new THREE.MeshBasicMaterial({ map: loader.load(this.m_assetPath + 'images/ash.png'), transparent: true, alphaTest: 0.5 });
        this.m_mesh = new THREE.Mesh(geometry, material);

        this.m_mesh.translateX(- this.m_sceneWidth / 2 + this.m_playerWidth / 2);
        this.m_mesh.translateY(- this.m_sceneHeight / 2 + this.m_playerHeight / 2);
        const ballRadius = this.config.ballSize;
        this.m_ball = new ball(ballRadius, this.m_sceneWidth, this.m_sceneHeight);

        this.createThrowForceProgressBar();
    }

    createThrowForceProgressBar() {

        const geometry = new THREE.PlaneGeometry(20, 20);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        this.m_throwForceProgressBar = new THREE.Mesh(geometry, material);

        this.m_throwForceProgressBar.translateX(- this.m_sceneWidth / 2 + this.m_playerWidth / 2 - this.m_playerWidth / 2 + 10);
        this.m_throwForceProgressBar.translateY(- this.m_sceneHeight / 2);
    }

    help = 0;
    forceapplied = false;
    updateThrowForceProgressBar(secondsClicked: number, startTimeForSecondsClicked: number) {

        const ProgressBarLengthMultiplier = 5;
        this.m_throwForceProgressBar.scale.y = (secondsClicked - startTimeForSecondsClicked) * ProgressBarLengthMultiplier;
        const currentPositionY = - this.m_sceneHeight / 2;
        this.m_throwForceProgressBar.position.y = currentPositionY + (secondsClicked) * ProgressBarLengthMultiplier * 10; //10 to convert from scale to pixel
    }

    update(mouseInfo: mouseInfo) {

        //we dont start at 0 so the ball has some more force even when the click is really short
        const startTimeForSecondsClicked = this.config.ballStartForce;

        //only update progress bar when ball is not currently thrown
        if (!this.m_ball.m_ballBody.activate)
            this.updateThrowForceProgressBar(mouseInfo.secondsClicked, startTimeForSecondsClicked);


        if (mouseInfo.isPressed) {
            this.mouseWasDown = true;
        }
        if (!mouseInfo.isPressed && this.mouseWasDown) {
            var forceDir = new THREE.Vector2(mouseInfo.x - this.m_mesh.position.x, mouseInfo.y - this.m_mesh.position.y);
            forceDir.normalize();

            this.m_ball.updateForce(forceDir, mouseInfo.secondsClicked);
            this.mouseWasDown = false;

            mouseInfo.secondsClicked = startTimeForSecondsClicked;
            this.forceapplied = true;
        }

        //clear force after short time!
        if (this.forceapplied) {
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
