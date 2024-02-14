import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import CubeScene from './scenes/CubeScene'
import Time from './util/time'
import util from './util/util'

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const cubeScene = new CubeScene()

function main(_time) {
  Time.tick(_time)

  cubeScene.update()
  renderer.render( cubeScene.scene, cubeScene.camera );

  requestAnimationFrame(main);
}

if ( WebGL.isWebGLAvailable() ) {
	// Initiate function or other initializations here
	main();
} else {
	const warning = WebGL.getWebGLErrorMessage();
	document.body.appendChild( warning );
}
