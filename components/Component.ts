import GameObject from "../objects/GameObject";

/**
 * Components are objects that are added to GameObjects that provide additional functionality
 * to them
 */
export class Component{
  /**
   * The GameObject of the component
   */
  gameObject: GameObject

  /**
   * Init runs before the first game loop. It's used for intialiseing the component gameObject
   * @param gameObject 
   */
  init = (gameObject: GameObject)=>{
    this.gameObject = gameObject
  }

  /** 
   * Runs every game loop
   */
  update = ()=>{

  }
}