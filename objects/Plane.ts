import * as THREE from 'three';
import GameObject from "./GameObject"
import { Script } from '../scripts/Script';
import { Component } from '../components/Component';

/**
 * A plane
 */
export default class Plane extends GameObject{
  constructor(width: number,height: number,color: string,script: Script, components: Component[]){
    const geometry = new THREE.PlaneGeometry( width, height );
    const material = new THREE.MeshBasicMaterial( {color: color, side: THREE.DoubleSide} );
    const mesh = new THREE.Mesh( geometry, material );

    super(geometry,material,mesh,script,components)
  }
}