import * as THREE from 'three';


export class ballPhysicsObject{

    radius:number = 0;
    position:THREE.Vector2 = new THREE.Vector2(0,0);

    m_veloctiy: boolean = false;

    constructor(r:number, pos:THREE.Vector2){
        this.radius = r;
        this.position = pos;
    }

}

export class enemyPhysicsObject{
    x:number = 0;
    y:number = 0;
    width:number = 0;
    height:number = 0;
    constructor(w:number, h:number){
        this.width = w;
        this.height = h;

    }

}

export class physics{

    ball:ballPhysicsObject = new ballPhysicsObject(0, new THREE.Vector2(0,0));
    enemy:enemyPhysicsObject = new enemyPhysicsObject(0,0);

    x: number = -250;
    updatePositionAccordingToVeloctiy(){

        if(this.ball.m_veloctiy){
            var posY: number = -100;
        
            this.x += 1.0;
    
            posY = -0.003 * (this.x * this.x) + 100;
    
            this.ball.position.x = this.x;
            this.ball.position.y = posY;
        }

        //should also update enemy
       
    }

    checkForCollision():boolean{

        /*
        boolean circleRect(float cx, float cy, float radius, float rx, float ry, float rw, float rh) {

            // temporary variables to set edges for testing
            float testX = cx;
            float testY = cy;
          
            // which edge is closest?
            if (cx < rx)         testX = rx;      // test left edge
            else if (cx > rx+rw) testX = rx+rw;   // right edge
            if (cy < ry)         testY = ry;      // top edge
            else if (cy > ry+rh) testY = ry+rh;   // bottom edge
          
            // get distance from closest edges
            float distX = cx-testX;
            float distY = cy-testY;
            float distance = sqrt( (distX*distX) + (distY*distY) );
          
            // if the distance is less than the radius, collision!
            if (distance <= radius) {
              return true;
            }
            */
            return false;
            
        
    }
}
