import * as THREE from 'three';
import { player } from "../../model/render/player"
import { enemy } from "../../model/render/enemy"
export class PokinoScene extends THREE.Scene {

    m_assetPath = '../../assets/';
    m_camera!: THREE.OrthographicCamera;

    init(width: number, height: number) {
        //setup camera
        const cameraDistanceFromScene = 1000;
        this.m_camera = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 1, cameraDistanceFromScene);
        this.m_camera.position.z = cameraDistanceFromScene;

        const loader = new THREE.TextureLoader();

        const hours = new Date().getHours();
        const START_DAYLIGHT_HOUR = 7;
        const END_DAYLIGHT_HOUR  = 20;
        const isDayTime = hours > START_DAYLIGHT_HOUR && hours < END_DAYLIGHT_HOUR;
        var bgTexture;
        if (isDayTime) {
            bgTexture = loader.load(this.m_assetPath + 'images/bg_day.png');
        }
        else {
            bgTexture = loader.load(this.m_assetPath + 'images/bg_night.png');
        }


        this.background = bgTexture;


    }

    update() {

    }

    addPlayer(player: player) {
        this.add(player.m_mesh);
        this.add(player.m_ball.m_mesh);
        this.add(player.m_throwForceProgressBar);
    }

    addEnemy(enemy: enemy) {
        this.add(enemy.m_mesh);
    }
    removeEnemy(enemy: enemy) {
        this.remove(enemy.m_mesh);
    }
}
