import * as THREE from 'three';
import { enemyPhysicsObject } from './physics';

export enum Pokemons { Pikachu = 1, Shiggy = 2 };

export class enemy {

    //the players mesh
    m_mesh: THREE.Mesh;
    amplitude: number = 10;

    m_enemyBody: enemyPhysicsObject;
    m_alive: boolean = true;
    playDeathAnimation: boolean = false;
    help: number = 0;
    switchDirections: boolean = false;
    force: number = 10;
    m_assetPath = '../../assets/';

    constructor(Pokemon: Pokemons) {

        const enemySize = 50;
        const geometry = new THREE.PlaneGeometry(enemySize, enemySize, 32);
        const loader = new THREE.TextureLoader();
        var material;
        if (Pokemon == Pokemons.Pikachu) {
            material = new THREE.MeshBasicMaterial({ map: loader.load(this.m_assetPath + 'images/pikachu.png'), transparent: true, alphaTest: 0.5 });
        }
        if (Pokemon == Pokemons.Shiggy) {
            material = new THREE.MeshBasicMaterial({ map: loader.load(this.m_assetPath + 'images/squirtle_probably_copyrighted.png'), transparent: true, alphaTest: 0.5 });
        }

        this.m_mesh = new THREE.Mesh(geometry, material);
        this.m_mesh.translateX(250);
        this.m_mesh.translateY(- 300 / 2 + 50 / 2);

        this.m_enemyBody = new enemyPhysicsObject(enemySize, enemySize, new THREE.Vector2(this.m_mesh.position.x, this.m_mesh.position.y));
    }

    setPosition(x: number, y: number) {
        this.m_mesh.position.set(x, y, 0);
    }

    update() {

        this.setPosition(this.m_enemyBody.position.x, this.m_enemyBody.position.y);
        //handle collision
        if (this.m_enemyBody.collided) {

            this.m_mesh.scale.x = 2;
            this.m_mesh.scale.y = 0.5;
            this.playDeathAnimation = true;
        }

        if (this.playDeathAnimation) {
            this.help++;
            if (this.help > 50) {
                this.playDeathAnimation = false;
                this.m_alive = false;
            }

        }
    }

}
