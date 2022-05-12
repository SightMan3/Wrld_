import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react'
import * as THREE from 'three'
import { Clock } from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

var mixer;
var action;

class Table extends Component 
{
  constructor(props) 
  {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)

    this.viewSize = 20;
    this.originalAspect = 0;

    this.move = 0;
  }

  componentDidMount() 
  {
    this.originalAspect = window.innerWidth / window.innerHeight;

    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    let zoom = 3.9;
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(
    width / - zoom, width / zoom, height / zoom, height / - zoom,
      0.1,
      1000
    )

    const slight = new THREE.SpotLight()
    slight.position.set(0, 700, 800)
    slight.intensity = 4.5;

    slight.castShadow = true;

    scene.add(slight) 

    const slight_jelper = new THREE.SpotLightHelper(slight);
    // scene.add(slight_jelper);




    const renderer = new THREE.WebGLRenderer({ antialias: true })

  

    camera.position.set(0, 0, 250);

    renderer.setClearColor('#f9dec9')
    renderer.setSize(width, height)
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    

    const loader = new GLTFLoader()
    loader.load
    (
        "./models/table/scene.gltf",
        function(gltf)
        {
            
            gltf.scene.children.forEach(child => {
                child.rotation.set(-1.1, 0.0, -2.3);
                child.position.z = 0;
                child.position.y = -40;
                child.position.x = 80;

                child.scale.set(150, 150, 150);
            })

           
            gltf.scene.traverse( function( node ) {

                if ( node.isMesh ) { node.castShadow = true; node.receiveShadow = true; }

            } ); 

            scene.add(gltf.scene);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
            console.log(error);
        }
    )

    window.addEventListener('resize', this.onWindowResize);


    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount() 
  {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() 
  {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() 
  {
    cancelAnimationFrame(this.frameId)
  }


  onWindowResize() 
  {

    var aspect = window.innerWidth / window.innerHeight;
    var change = this.originalAspect / aspect;
    var newSize = this.viewSize * change;
    this.camera.left = -aspect * newSize / 2;
    this.camera.right = aspect * newSize  / 2;
    this.camera.top = newSize / 2;
    this.camera.bottom = -newSize / 2;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    
    this.animate();

    
  }

  animate()
  {
    
    this.frameId = window.requestAnimationFrame(this.animate)
    this.renderScene()
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        style={{ width: '100%', height: '90%' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default Table