import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import GameObject from './GameObject';
import { Script } from '../scripts/Script';
import { Component } from '../components/Component';

/**
 * Loads the font from directory
 */
const loader = new FontLoader();

/**
 * Instantiates a new Text GameObject 
 */
export default class Text extends GameObject{
  constructor(text:string,fontURL:string,color:string,options:object,script:Script,components: Component[]){
    super(null,null,null,script,components)
    
    loader.load(fontURL,(font)=>{
      this.geometry = new TextGeometry(text, {
        font: font,
        ...options
      } );

      this.material = new THREE.MeshPhongMaterial( { color: color } ) 
      this.mesh = new THREE.Mesh( this.geometry, this.material );
    },this.onProgress,this.onError)
  }

  onProgress = (xhr)=>{
    console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
  }

  onError = (error)=>{
    console.error(error)
  }
}