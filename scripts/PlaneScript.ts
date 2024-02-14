
import { Rigidbody } from "../components/Rigidbody"
import GameObject from "../objects/GameObject"
import { Script } from "./Script"

export default class PlaneScript implements Script{
  gameObject: GameObject

  init = (gameObject: GameObject) =>{
    this.gameObject = gameObject
    const rigidbody = this.gameObject.components.rigidbody as Rigidbody
    rigidbody.body.sleep()
  }

  update = ()=>{
    
  }
}