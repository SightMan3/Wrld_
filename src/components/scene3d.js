import React, { Component } from 'react'
import * as THREE from 'three'
import { Clock } from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

var mixer;
var action;

class Scene extends Component 
{
  constructor(props) 
  {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() 
  {
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
    slight.position.set(-20, 200, -30)
    slight.intensity = 4.5;

    slight.castShadow = true;

    scene.add(slight) 

    const slight_jelper = new THREE.SpotLightHelper(slight);
    //scene.add(slight_jelper);




    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
    const cube = new THREE.Mesh(geometry, material)

    camera.position.set(0, 0, 0);

    scene.add(cube)
    renderer.setClearColor('#f9dec9')
    renderer.setSize(width, height)
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.material = material
    this.cube = cube

    const loader = new GLTFLoader()
    loader.load
    (
        "./models/druhy/scene.gltf",
        function(gltf)
        {
            
            gltf.scene.children.forEach(child => {
                child.rotation.set(-1.3, 0.0, -0.9);
                child.position.z = -155;
                child.position.y = -90;
                child.position.x = -50;
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

    window.addEventListener('resize', this.onWindowResize, false);


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

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.renderScene();

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

export default Scene