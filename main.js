import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// renderer.render(scene, camera);
// * FOG
const color = 'lightblue'; 
const near = 5;
const far = 40;
scene.fog = new THREE.Fog('lightblue', near, far);
scene.background = new THREE.Color(color);

const geomerty = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({
  color: 0xff6347,
});

const tourus = new THREE.Mesh(geomerty, material);

scene.add(tourus);

function animate() {
  requestAnimationFrame(animate);
  tourus.rotation.x += 0.01;
  tourus.rotation.y += 0.005;
  tourus.rotation.z += 0.01;
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    camera.position.z -= 0.3;
  } else if (e.key === 'ArrowDown') {
    camera.position.z += 0.3;
  } else if (e.key === 'ArrowLeft') {
    camera.position.x -= 0.3;
  } else if (e.key === 'ArrowRight') {
    camera.position.x += 0.3;
  }
});
