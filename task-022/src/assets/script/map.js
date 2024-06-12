// Import THREE.js.
import * as THREE from 'three';
import { threeJS } from './renderer';

function map(){
// Get screen resolution.
const height = screen.availHeight * .9;
const width = height;

// Import THREE.js compoments.
const template = threeJS(width, height, 0xe0f2fe, '3dMap');

// Create scene.
const scene = template.scene;

// Create camera and set its position and rotation.
const camera = template.camera;
camera.position.z = 12;
camera.position.y = 2;
camera.position.x = 5;
camera.rotateZ(2);
camera.rotateX(0.5);
camera.updateProjectionMatrix();

// Create renderer and put ligth.
const renderer = template.renderer;
const light = new THREE.DirectionalLight(0xefffef, 10);
light.position.x = .5;
light.position.y = 2;
light.position.z = 1;
scene.add( light );

// Create cube assets.
const assets = [
    0x1e3a8a, // Deep sea
    0x075985, // Sea
    0xfacc15, // Shore
    0x84cc16, // Grass
    0x166534, // Forest
    0xa8a29e, // Lower mountain
    0x404040, // Upper mountain
    0xf1f5f9, // Snow
]
// Create function that creates cubes.
function cube(n, x, y) {
    const cube = new THREE.BoxGeometry(1,1,(n < 2 ? 0.9 : (n === 7 ? 8 : n*n / 5)));
    const material = new THREE.MeshStandardMaterial({color: assets[n]});
    const mesh = new THREE.Mesh(cube, material);
    mesh.position.x = x;
    mesh.position.y = y;
    scene.add(mesh);
}
// Create map grid.
const map = [
    '7776655544',
    '7766554443',
    '6655544333',
    '5544443333',
    '4444333322',
    '4333322221',
    '3322222111',
    '2221111100',
    '2111000000',
    '1100000100',
]
// Create the terrain.
for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
        const element = map[i][j];
        cube(Number(element), i-5, j-5);
    }
}
renderer.render(scene, camera);
}

map();