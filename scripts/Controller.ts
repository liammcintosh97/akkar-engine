import GameObject from "../objects/GameObject"
import { Script } from "./Script"

export enum Direction{
  forward,
  back,
  left,
  right
}

export const keyBindings = {
  KeyW: Direction.forward,
  KeyS: Direction.back,
  KeyA: Direction.left,
  KeyD: Direction.right
}

export enum keyEventType{
  keydown,
  keyup
}


export type ControllerDirection = {
  x:number,
  y:number
}

export default class Controller extends Script{
  gameObject: GameObject
  direction: ControllerDirection
  increment: number

  constructor(){
    super()
    this.direction = {x:0,y:0}
    this.increment = 0.1

    window.addEventListener('keydown', (event) => {
      this.interporateKey(event.code,keyEventType.keydown)
    }, false);

  
    window.addEventListener('keyup', (event) => {
      this.interporateKey(event.code,keyEventType.keyup)
    }, false);
  }

  interporateKey = (code: string,eventType: keyEventType)=>{

    for(const key of Object.keys(keyBindings)){
      if(code === key) var binding = keyBindings[key]
    }

    if(eventType === keyEventType.keydown){
      if(binding === Direction.forward) this.direction.y = 1
      if(binding === Direction.back) this.direction.y = -1
      if(binding === Direction.left) this.direction.x = 1
      if(binding === Direction.right) this.direction.x = -1
    }
    else if(eventType === keyEventType.keyup){
      if(binding === Direction.forward) this.direction.y = 0
      if(binding === Direction.back) this.direction.y = 0
      if(binding === Direction.left) this.direction.x = 0
      if(binding === Direction.right) this.direction.x = 0
    }
  }
}