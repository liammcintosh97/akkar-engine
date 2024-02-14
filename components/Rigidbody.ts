import * as CANNON from 'cannon'
import { Component } from './Component';
import GameObject, { Position } from '../objects/GameObject';

/**
 * Rigidbody is the implementaion of a CANNON Body. It represents a physical entity inside of the scene
 */
export class Rigidbody extends Component{
  /**
   * The physics body
   */
  body: CANNON.Body

  init = (gameObject: GameObject)=>{
    super.init(gameObject)
    //this.gameObject.mesh.useQuaternion()

    const geometry =  gameObject.geometry;
    geometry.computeVertexNormals();

    const positions = geometry.attributes.position.array;
    const indices = geometry.index?.array;
    const scale = this.gameObject.mesh.scale;

    if(!indices){
      console.error("Indicies on GameObject geometry are undefinded",this.gameObject)
      return
    }

    const vertices: Array<CANNON.Vec3> = [];
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i] * scale.x;
      const y = positions[i + 1] * scale.y;
      const z = positions[i + 2] * scale.z;
      vertices.push(new CANNON.Vec3(x, y, z));
    }

    const faces: Array<Array<number>> = [];
    for (let i = 0; i < indices.length; i += 3) {
      const idx1 = indices[i];
      const idx2 = indices[i + 1];
      const idx3 = indices[i + 2];
      faces.push([idx1, idx2, idx3]);
    }

    const shape = new CANNON.ConvexPolyhedron(vertices, faces);
  
    this.body = new CANNON.Body({
      mass: 1, // Adjust the mass as needed
      shape: shape,
    });

    const p = this.gameObject.mesh.position
    const newP = new CANNON.Vec3(p.x,p.y,p.z)

    this.body.position.copy(newP);
  }

  update = ()=>{
    if(this.body){
      this.gameObject.mesh.position.x = this.body.position.x;
      this.gameObject.mesh.position.y = this.body.position.y;
      this.gameObject.mesh.position.z = this.body.position.z;
      this.gameObject.mesh.quaternion.x = this.body.quaternion.x;
      this.gameObject.mesh.quaternion.y = this.body.quaternion.y;
      this.gameObject.mesh.quaternion.z = this.body.quaternion.z;
      this.gameObject.mesh.quaternion.w = this.body.quaternion.w;
    }
  }

  /**
   * Sets the postions of the body
   * @param position 
   */
  setPosition = (position: Position)=>{
    if(!position) console.error("Position is undefined")

    if(this.body){
      if(position.x || position.x === 0) this.body.position.x = position.x
      if(position.y || position.y === 0) this.body.position.y = position.y
      if(position.z || position.z === 0) this.body.position.z = position.z
    }
  }
}