import * as THREE from 'three';
import * as CANNON from 'cannon'
import Time from '../util/time';

export default class Scene{
  constructor(camera,objects){
    this.scene = new THREE.Scene();
    this.camera = camera;
    this.objects = objects

    this.world = new CANNON.World();
    this.world.gravity.set(0, 0, -9.82); // m/s² 
    this.fixedTimeStep = 1.0 / 60.0; // seconds
    this.maxSubSteps = 3;

    for(const obj of this.objects){
      const mesh = obj.mesh
      const body = obj.components?.rigidbody?.body

      console.log(body)

      if(mesh)this.scene.add(mesh)
      if(body){
        this.world.addBody(body);
      }
    }

  }

  update = ()=>{
    for(const obj of this.objects){
      if(obj.update) obj.update()
    }

    this.world.step(this.fixedTimeStep, Time.deltaTime, this.maxSubSteps);
  }
}