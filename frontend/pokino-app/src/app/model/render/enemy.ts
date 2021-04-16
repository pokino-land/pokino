import * as THREE from 'three';
import { enemyPhysicsObject } from './physics';

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
    m_pokemonPath = '../../assets/images/pokemons/';

    constructor(name: string, height: number) {

        const enemySize = 50;
        const geometry = new THREE.PlaneGeometry(enemySize, enemySize, 32);
        
        var material = this.getMaterialFromName(name);

        this.m_mesh = new THREE.Mesh(geometry, material);
        //this.m_mesh.translateX(250);
        this.m_mesh.translateY(- height / 2 + enemySize / 2);

        this.m_enemyBody = new enemyPhysicsObject(enemySize, enemySize, new THREE.Vector2(this.m_mesh.position.x, this.m_mesh.position.y));
    }

    getMaterialFromName(name: string): THREE.MeshBasicMaterial{
        const loader = new THREE.TextureLoader();
        
        if (name == "Pikachu") {
             return new THREE.MeshBasicMaterial({ map: loader.load(this.m_pokemonPath + 'pikachu.png'), transparent: true, alphaTest: 0.5 });
        }
        if (name == "Squirtle") {
            return new THREE.MeshBasicMaterial({ map: loader.load(this.m_pokemonPath + 'squirtle.png'), transparent: true, alphaTest: 0.5 });
        }
        if (name == "Bulbasaur") {
            return new THREE.MeshBasicMaterial({ map: loader.load(this.m_pokemonPath + 'bulbasaur.png'), transparent: true, alphaTest: 0.5 });
        }
        if (name == "Machop") {
            return new THREE.MeshBasicMaterial({ map: loader.load(this.m_pokemonPath + 'machop.png'), transparent: true, alphaTest: 0.5 });
        }
        if (name == "Psyduck") {
            return new THREE.MeshBasicMaterial({ map: loader.load(this.m_pokemonPath + 'psyduck.png'), transparent: true, alphaTest: 0.5 });
        }
        if (name == "Golbat") {
            return new THREE.MeshBasicMaterial({ map: loader.load(this.m_pokemonPath + 'golbat.png'), transparent: true, alphaTest: 0.5 });
        }
        if (name == "Charmander") {
            return new THREE.MeshBasicMaterial({ map: loader.load(this.m_pokemonPath + 'charmander.png'), transparent: true, alphaTest: 0.5 });
        }

        //if pokemon name is not found just return pikachu
        return new THREE.MeshBasicMaterial({ map: loader.load(this.m_pokemonPath + 'bulbasaur.png'), transparent: true, alphaTest: 0.5 });
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
