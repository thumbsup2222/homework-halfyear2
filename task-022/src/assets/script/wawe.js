// Import THREE.js.
import * as THREE from 'three';
import { threeJS } from './renderer';

function wawe(){
// Get screen resolution.
const dpr = window.devicePixelRatio;
const width = screen.availWidth;
const height = screen.availHeight;
    
// Import THREE.js compoments.
const template = threeJS(width, height, 0x270071, 'waweContainer');

// Give container size.
document.getElementById('heroContent').
setAttribute('style', `height: ${height}px`)

// Create scene.
const scene = template.scene;

// Create camera and set its position and rotation.
const camera = template.camera;
camera.position.z = 10;
camera.position.y = 2.75;
camera.rotation.x = -0.65;

// Create renderer.
const renderer = template.renderer;

// Create the dots.
let dots = [];

const waweMaterial = new THREE.MeshBasicMaterial({color: 0xeeddff});
const waweGeometry = new THREE.PlaneGeometry(.05, .05);

for (let x = -30; x < 30; x++) {
    for (let z = 0; z < 30; z++) {
        const plane = new THREE.Mesh(waweGeometry, waweMaterial);
        plane.position.set(x/1.8, 1, z/1.8);
        dots.push(plane);
    }
}

// Auto resize canvas when window is resized.
window.addEventListener('resize', () => {
    renderer.setSize(window.screen.availWidth, window.screen.availHeight);
    camera.aspect = window.screen.availWidth / window.screen.availHeight;
    camera.updateProjectionMatrix();
}, true);

// Animate dots and create wawe.
let a = 0;
function animate() {
    requestAnimationFrame(animate);
    a += .01;
    const speed = Math.sin(a) / 40;
    scene.remove(...dots);
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        dot.position.x = dot.position.x + speed;
        dot.position.y = Math.sin(dot.position.x*0.5)*Math.sin(dot.position.z*0.4)*1.4;
        scene.add(dot);
    }
    renderer.render(scene, camera);
}; animate(); }

wawe();