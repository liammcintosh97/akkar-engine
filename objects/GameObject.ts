import { BufferGeometry,Line,LineBasicMaterial,Material, Mesh, NormalBufferAttributes, Quaternion, Vector3 } from "three";
import { Script } from "../scripts/Script";
import { Component } from "../components/Component";
import { Vec3 } from "cannon";

export interface Update{
  /**
   * Runs every game loop
   */
  update():void
}

/**
 * An array of components
 */
interface Components {
  /**
   * Class name of the component in camelCase format
   */
  [key: string]: Component;
}

/**
 * A Vector3 value representing the postions of the GameObject within the scene.
 * Its type is a combination of Three.js Vector3 & CANNON Vec3
 */
export type Position = Vector3 & Vec3

/**
 * A GameObject is the representation of an object within the scene. It's the parent class
 * of all entities. 
 */
export default class GameObject implements Update{
  /**
   * The Geometry of the gameObject
   */
  geometry: BufferGeometry
  /**
   * The material of the gameObject
   */
  material: Material
  /**
   * The script of the gameObject
   */
  script: Script
  /**
   * The Mesh of the gameObject
   */
  mesh: Mesh | Line
  /**
   * An gameObject which contain the components of the gameObject
   */
  components: Components

  constructor(geometry: BufferGeometry,material: Material, mesh: Mesh | Line, script:Script,components: Array<Component>){
    this.geometry = geometry;
    this.material = material
    this.mesh = mesh
    this.components = {}
    this.script = script

    if(components){
      for(const c of components){
        this.components[c.constructor.name.toLowerCase()] = c
        c.init(this)
      }
    }

    if(this.script){
      this.script.init(this)
    }
  }

   /**
   * Run every game loop
   */
  update = ()=>{
    if(this.script?.update) this.script?.update()
  }

  /**
   * Sets the mesh postion of the gameObject to the passed postion
   * @param position 
   */
  setPosition = (position: Position)=>{

    if(!position) console.error("Position is undefined")

    if(position.x || position.x === 0) this.mesh.position .setX(position.x)
    if(position.y || position.y === 0) this.mesh.position .setY(position.y)
    if(position.z || position.z === 0) this.mesh.position .setZ(position.z)
  }

}