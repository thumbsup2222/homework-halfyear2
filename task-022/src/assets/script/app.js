// Import THREE.js.
import * as THREE from 'three';

// Get screen resolution.
const width = window.screen.availWidth;
const height = window.screen.availHeight;

// Get container and set size.
document.getElementById('heroContent').setAttribute('style', `height: ${height}px`);

// Create scene and give background.
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x270071);

// Create camera.
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
camera.position.z = 10;
camera.position.y = 2.75;
camera.rotation.x = -0.75;

// Create renderer and append canvas to webpage.
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('waweContainer')
});
renderer.setSize(width, height);

// Create the dots.
let dots = [];

const waweMaterial = new THREE.MeshBasicMaterial({color: 0xeeddff});
const waweGeometry = new THREE.PlaneGeometry(.05, .05);

for (let x = -30; x < 30; x++) {
    for (let z = 0; z < 30; z++) {
        const plane = new THREE.Mesh(waweGeometry, waweMaterial);
        plane.position.set(x/2, 1, z/2);
        dots.push(plane);
    }
}

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
}
animate();