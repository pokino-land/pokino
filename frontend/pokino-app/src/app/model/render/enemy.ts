import * as THREE from 'three';

export class enemy{

 //the players mesh
 m_mesh:THREE.Mesh;


 constructor(){

     const geometry = new THREE.PlaneGeometry(50,50,32);
     const material = new THREE.MeshBasicMaterial({color: 0xff0000 });
     this.m_mesh = new THREE.Mesh(geometry, material);
 
 }


x:number = 0;
 update(){

    this.x+=0.1;
    this.m_mesh.translateX(Math.sin(this.x)*5);

 }

}