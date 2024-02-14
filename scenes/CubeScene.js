import * as THREE from 'three';
import Scene from './Scene';
import Cube from '../objects/Cube';
import Line from '../objects/Line'
import Plane from '../objects/Plane'
import Text from '../objects/Text'
import CubeScript from '../scripts/CubeScript';
import CubeScript2 from '../scripts/CubeScript2';
import Planescript from '../scripts/PlaneScript';
import RigidBody from '../components/Rigidbody';

const helvetikerRegular = "../fonts/helvetiker_regular.typeface.json"

export default class CubeScene extends Scene{
  constructor(){
    const cube = new Cube(3,3,3,0xfff,new CubeScript2(),[new RigidBody()])

    const cube2 = new Cube(1,1,1,0x00ff00,new CubeScript2(),[new RigidBody()])
    cube2.setPosition({x:3})

    const cube3 = new Cube(1,1,1,0x00ff00,new CubeScript2(),[new RigidBody()])
    cube3.setPosition({x:-3})

    const points = [
      new THREE.Vector3( - 3, 0, 0 ),
      new THREE.Vector3( 3, 0, 0 )
    ]
    const line = new Line(points,0x00ff00)
    line.setPosition({y:3})

    const plane = new Plane(10,10,0xfff,new Planescript(),[new RigidBody()])
    plane.setPosition({z: -5})

  
    const text = new Text("Hello Worl",helvetikerRegular,0xfff,{
      size: 80,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelOffset: 0,
      bevelSegments: 5
    },null,null)
    
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 1;
    camera.position.y = -7
    camera.rotateX(1);

    super(camera,[text,cube,cube2,cube3,line])
  }

}

