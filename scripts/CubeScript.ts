import Controller, { ControllerDirection } from "./Controller";
import Time from "../util/time"
import { Script } from "./Script";
import GameObject from "../objects/GameObject";

export default class CubeScript extends Script{
  controller: Controller
  speed: number

  constructor(){
    super()
    this.controller = new Controller()
    this.speed = 2
  }

  init = (gameObject: GameObject) =>{
    super.init(gameObject)
    this.gameObject.components.rigidbody.body.sleep()
  }

  update = () =>{
    super.update()
    this.move(this.controller.direction)
  }

  /**
   * Moves the GameObject based on the direction inputted from the controller
   * @param direction 
   */
  move = (direction: ControllerDirection)=>{
    if(direction.y) this.gameObject.mesh.position.y += direction.y * (this.speed * Time.deltaTime)
    if(direction.x) this.gameObject.mesh.position.x -= direction.x * (this.speed * Time.deltaTime)
  }
}
