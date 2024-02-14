import * as THREE from 'three';
import GameObject from "./GameObject"
import { Script } from '../scripts/Script';
import { Component } from '../components/Component';

/**
 * A Line
 */
export default class Line extends GameObject{
  constructor(points: THREE.Vector3[] | THREE.Vector2[],color: string,script: Script,components: Component[]){
    const material = new THREE.LineBasicMaterial( { color: color } );
    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    const mesh = new THREE.Line( geometry, material );

    super(geometry,material,mesh,script,components)
  }
}