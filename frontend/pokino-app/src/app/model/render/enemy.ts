import * as THREE from 'three';


export class enemy{

 //the players mesh
 m_mesh: THREE.Mesh;
 amplitude: number = 10;

 constructor(){

     const geometry = new THREE.PlaneGeometry(50,50,32);
     const loader = new THREE.TextureLoader();
    const material = new THREE.MeshBasicMaterial({map: loader.load('../../assets/images/pikachu.png'), transparent: true, alphaTest: 0.5});
     this.m_mesh = new THREE.Mesh(geometry, material);
     this.m_mesh.translateX(-this.amplitude * 10);
     this.m_mesh.translateY(- 300/2 + 50/2);
 }


x: number = 0;
 update(){

    this.x+=0.1;
    var f = Math.sin(this.x)*this.amplitude;
    this.m_mesh.translateX(f);
  
    if(f >= this.amplitude -0.05)
     this.m_mesh.scale.x = -1;
     if(f <= -this.amplitude +0.05)
     this.m_mesh.scale.x = 1;


 }

}
