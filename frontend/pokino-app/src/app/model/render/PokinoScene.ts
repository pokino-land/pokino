import * as THREE from 'three';
import { player } from "../../model/render/player"
import { enemy } from "../../model/render/enemy"
import {WeatherWind} from "../../api/json-weather-object";
export class PokinoScene extends THREE.Scene {

    m_assetPath = '../../assets/';
    m_camera!: THREE.OrthographicCamera;
    m_windArrow: THREE.Mesh = new THREE.Mesh();
    m_sceneWidth: number = 0;
    m_sceneHeight: number = 0;

    init(width: number, height: number) {

        this.m_sceneWidth = width;
        this.m_sceneHeight = height;
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
        this.initWindArrow();

    }


    initWindArrow(){
        var windArrowSize = 30;
        const geometry = new THREE.PlaneGeometry(windArrowSize, windArrowSize);
        const loader = new THREE.TextureLoader();
        const material = new THREE.MeshBasicMaterial({ map: loader.load(this.m_assetPath + 'images/Arrow_white.png'), transparent: true, alphaTest: 0.5 });
        this.m_windArrow = new THREE.Mesh(geometry, material);
        var margin = 20;
        this.m_windArrow.translateX(- this.m_sceneWidth / 2 + windArrowSize / 2 + margin);
        this.m_windArrow.translateY(this.m_sceneHeight / 2 - windArrowSize / 2 - margin);
 
        this.add(this.m_windArrow);
    }

    update(wind: WeatherWind) {
        var wind_radians = wind.deg * 180.0/Math.PI;
        this.m_windArrow.rotation.z = wind_radians - Math.PI/2;


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
