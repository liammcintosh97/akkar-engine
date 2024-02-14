import GameObject, { Update } from "../objects/GameObject";

export class Script implements Update{
  gameObject: GameObject
  
  /**
   * Init runs before the first game loop. It's used for intialiseing the script gameObject
   * @param gameObject 
   */
  init = (gameObject: GameObject) => {
    this.gameObject = gameObject
  }

  /**
   * Runs every game loop
   */
  update(): void {
    
  }
}
