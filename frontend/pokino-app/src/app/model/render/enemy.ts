import * as THREE from 'three';
import { enemyPhysicsObject } from './physics';
import { JsonPokemonObject } from "../../api/json-pokemon-object";


enum FaceDirection { RIGHT, LEFT };

export class enemy {

    //the players mesh
    m_mesh: THREE.Mesh;
    amplitude: number = 10;
    m_startPosition: THREE.Vector2 = new THREE.Vector2(0, 0);


    m_velocity: THREE.Vector2;
    m_movementRadius: number = 30;
    m_pokemon: JsonPokemonObject;

    m_enemyBody: enemyPhysicsObject;
    m_alive: boolean = true;
    playDeathAnimation: boolean = false;
    playDeathAnimationTimer: number = 0;
    switchDirections: boolean = false;
    force: number = 10;
    m_pokemonPath = '../../assets/images/pokemons/';
    m_faceDirection: FaceDirection = FaceDirection.RIGHT;
    m_changeDirection: boolean = false;

    constructor(pokemon: JsonPokemonObject, height: number) {

        const enemySize = 50;
        const geometry = new THREE.PlaneGeometry(enemySize, enemySize);

        var material = this.getMaterialFromName(pokemon.name);
        this.m_mesh = new THREE.Mesh(geometry, material);
        this.m_mesh.translateY(- height / 2 + enemySize / 2);
        const pokemonStartHeight = 200;
        this.m_mesh.translateX(pokemonStartHeight);

        this.m_startPosition = new THREE.Vector2(this.m_mesh.position.x, this.m_mesh.position.y);
        this.m_enemyBody = new enemyPhysicsObject(enemySize, enemySize, new THREE.Vector2(this.m_mesh.position.x, this.m_mesh.position.y));

        this.m_pokemon = pokemon;
        this.m_velocity = new THREE.Vector2(pokemon.healthPoints / 2, 0);
        this.m_movementRadius = pokemon.defensePoints * 1.6;

    }

    getMaterialFromName(name: string): THREE.MeshBasicMaterial {
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
        return new THREE.MeshBasicMaterial({ map: loader.load(this.m_pokemonPath + 'squirtle.png'), transparent: true, alphaTest: 0.5 });
    }

    setPosition(x: number, y: number) {
        this.m_mesh.position.set(x, y, 0);
    }


    changeDirectionTimer = 0;
    allowedToChangeDirection = true;
    startChangeDirectionTimer = false;
    changeDirectionHelper() {
        if (this.startChangeDirectionTimer) {
            this.changeDirectionTimer++;
            const timeToChangeDirection = 20;
            if (this.changeDirectionTimer > timeToChangeDirection) {
                this.startChangeDirectionTimer = false;
                this.allowedToChangeDirection = true;
                this.changeDirectionTimer = 0;
            }
        }
    }

    update() {

        //check if pokemon is hit
        if (!this.playDeathAnimation) {
            //apply velocity
            if (Math.abs(this.m_startPosition.x - this.m_mesh.position.x) > this.m_movementRadius && this.allowedToChangeDirection) {
                // *= -1 to flip direction
                this.m_velocity.x *= -1;

                this.allowedToChangeDirection = false;
                this.startChangeDirectionTimer = true;

                this.m_mesh.scale.x *= -1;
            }
            this.changeDirectionHelper();

            if (this.m_pokemon.type2 == 'Flying') {
                const pokemonFlyHeight = 80;
                this.m_enemyBody.position.y = pokemonFlyHeight;
            }


            this.m_enemyBody.velocity = this.m_velocity;


        } else {
            this.m_enemyBody.velocity = new THREE.Vector2(0, 0);
        }



        //handle collision
        if (this.m_enemyBody.collided) {

            this.m_mesh.scale.x = 2;
            this.m_mesh.scale.y = 0.5;
            this.playDeathAnimation = true;
        }

        if (this.playDeathAnimation) {
            this.playDeathAnimationTimer++;
            if (this.playDeathAnimationTimer > 50) {
                this.playDeathAnimation = false;
                this.m_alive = false;
            }
        }


        this.setPosition(this.m_enemyBody.position.x, this.m_enemyBody.position.y);
    }

}
