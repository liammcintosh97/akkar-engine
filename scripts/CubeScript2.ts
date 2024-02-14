import GameObject from "../objects/GameObject"
import { Script } from "./Script"

export default class CubeScript2 implements Script{
  gameObject: GameObject

  init = (gameObject: GameObject) =>{
    this.gameObject = gameObject
  }

  update = () =>{
  }
}
