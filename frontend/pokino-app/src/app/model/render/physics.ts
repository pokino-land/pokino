import * as THREE from 'three';

export class physics{

    x: number = -250;
    updatePositionAccordingToVeloctiy(): THREE.Vector2{
        var posY: number = -100;
        
        this.x += 1.0;

        posY = -0.003 * (this.x * this.x) + 100;

        return new THREE.Vector2(this.x, posY);
    }
}
