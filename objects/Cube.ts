import * as THREE from 'three';
import GameObject from "./GameObject"
import { Script } from '../scripts/Script';
import { Component } from '../components/Component';

/**
 * A Basic Cude
 */
export default class Cube extends GameObject{
  constructor(width: number,height: number,depth: number,color: string,script: Script, components: Component[]){
    const geometry = new THREE.BoxGeometry( width, height, depth );
    const material = new THREE.MeshBasicMaterial( { color: color } );
    const mesh = new THREE.Mesh( geometry, material );
    
    super(geometry,material,mesh,script,components)
  }
}