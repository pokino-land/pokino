import * as THREE from 'three';


export class ballPhysicsObject {

    radius: number = 0;
    position: THREE.Vector2 = new THREE.Vector2(0, 0);

    m_veloctiy: boolean = false;

    force: THREE.Vector2 = new THREE.Vector2(0, 0);
    velocity: THREE.Vector2 = new THREE.Vector2(0, 0);

    activate: boolean = false;

    constructor(r: number, pos: THREE.Vector2) {
        this.radius = r;
        this.position = pos;
    }

    setPosition(x: number, y: number) {
        this.position.x = x;
        this.position.y = y;
    }

}

export class enemyPhysicsObject {
    position: THREE.Vector2 = new THREE.Vector2(0, 0);
    velocity: THREE.Vector2 = new THREE.Vector2(0, 0);
    force: THREE.Vector2 = new THREE.Vector2(0, 0);

    width: number = 0;
    height: number = 0;
    collided: boolean = false;
    constructor(w: number, h: number, position: THREE.Vector2) {
        this.width = w;
        this.height = h;
        this.position = position;

    }

}

export class physics {

    ball: ballPhysicsObject = new ballPhysicsObject(0, new THREE.Vector2(0, 0));
    enemy: enemyPhysicsObject = new enemyPhysicsObject(0, 0, new THREE.Vector2(0, 0));

    x: number = 0;
    updatePositionAccordingToVeloctiy() {
        var h = 0.1;   //step size
        //apply forces until ball is out of screen

        if (this.ball.activate) {

            //using explicit euler numerical integration scheme
            //apply gravity
            const gravitationalConstant = 9.81;
            var f_sum = new THREE.Vector2(this.ball.force.x, this.ball.force.y - gravitationalConstant * 2);
            this.ball.position = new THREE.Vector2(this.ball.position.x + h * this.ball.velocity.x, this.ball.position.y + h * this.ball.velocity.y)
            this.ball.velocity = new THREE.Vector2(this.ball.velocity.x + h * f_sum.x, this.ball.velocity.y + h * f_sum.y)

        } else {
            this.ball.velocity = new THREE.Vector2(0, 0);
            this.ball.position = new THREE.Vector2(0, 300)
        }
        const leftLimit = -300;
        const rightLimit = 300;
        const upperLimit = 250;
        const lowerLimit = -150;
        if (this.ball.position.y < lowerLimit || this.ball.position.y > upperLimit || this.ball.position.x < leftLimit || this.ball.position.x > rightLimit) {
            this.ball.activate = false;
        }

        //update enemy  
        this.enemy.position = new THREE.Vector2(this.enemy.position.x + h * this.enemy.velocity.x, this.enemy.position.y + h * this.enemy.velocity.y)
        this.enemy.velocity = new THREE.Vector2(this.enemy.velocity.x + h * this.enemy.force.x, this.enemy.velocity.y + h * this.enemy.force.y)

        //quick fix for now
        this.x = this.x + 0.05;
        var y = 50 * Math.sin(this.x) + 150;
        this.enemy.position.x = y;

        if (this.checkForCollision()) {
            this.enemy.collided = true;
        } else {
            this.enemy.collided = false;
        }


    }

    checkForCollision(): boolean {

        // temporary variables to set edges for testing

        var cx = this.ball.position.x;
        var cy = this.ball.position.y;
        var radius = this.ball.radius;

        var rx = this.enemy.position.x;
        var ry = this.enemy.position.y;
        var rw = this.enemy.width;
        var rh = this.enemy.height;

        var testX = cx;
        var testY = cy;

        // which edge is closest?
        if (cx < rx) testX = rx;      // test left edge
        else if (cx > rx + rw) testX = rx + rw;   // right edge
        if (cy < ry) testY = ry;      // top edge
        else if (cy > ry + rh) testY = ry + rh;   // bottom edge

        // get distance from closest edges
        var distX = cx - testX;
        var distY = cy - testY;
        var distance = Math.sqrt((distX * distX) + (distY * distY));

        // if the distance is less than the radius, collision!
        if (distance <= radius) {
            return true;
        }
        return false;


    }
}
