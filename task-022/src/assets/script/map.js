// Import THREE.js.
import * as THREE from 'three';
import { threeJS } from './renderer';

{
// Get screen resolution.
const height = screen.availHeight * .9;
const width = height;

// Import THREE.js compoments.
const template = threeJS(width, height, 0xe0f2fe, '3dMap');

// Create scene.
const scene = template.scene;

// Create camera and set its position and rotation.
const camera = template.camera;
camera.position.z = 10;
camera.position.y = 2;
camera.position.x = 6;
camera.rotateZ(2);
camera.rotateX(0.65);
camera.updateProjectionMatrix();

// Create renderer and put ligth.
const renderer = template.renderer;
const light = new THREE.DirectionalLight(0xefffef, 10);
light.position.x = .5;
light.position.y = 2;
light.position.z = 1;
scene.add( light );

// Create RNG function.
function rng(n,d=n) {
    return Math.floor(Math.random()*n)/d;
}
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
// Special Assets
const specialAssets = [
    0xf59e0b,
    0x4d7c0f,
]
// Create function that creates cubes.
function randomHeight(n) {
    return n + Math.floor(Math.random()*10)/40;
}
function randomColor(n) {
    if(rng(4,1)===0) return specialAssets[n];
}
function createDetail(x,y,z,color) {
    const mesh = new THREE.BoxGeometry(x,y,z);
    const material = new THREE.MeshStandardMaterial({color: color})
    return {
        mesh: mesh,
        material: material,
    }
}
const stone = createDetail(.15,.1,.25,0xa8a29e)
const grass = createDetail(.08,.08,.35,0x4d7c0f);
function addDetail(x, y, z, freq, detailMesh, material) {
    for (let i = 0; i < freq; i++) {
        const mesh = new THREE.Mesh(detailMesh,material);
        mesh.position.x = x+rng(10)-0.5;
        mesh.position.y = y+rng(10)-0.5;
        mesh.position.z = z - 1;
        scene.add(mesh);
    }
}
function cube(n, x, y) {
    let height;
    let color = assets[n];
    switch (n) {
        case 0:
        case 1:
            height = 1;
            break;
        case 2:
            height = randomHeight(n); color = randomColor(0);
            addDetail(x,y,n,1,stone.mesh,stone.material);
            break;
        case 3:
            height = randomHeight(n); color = randomColor(1);
            addDetail(x,y,n,3,grass.mesh,grass.material);
            break;
        case 7:
            height = n*n*0.2;
            break;
        default:
            height = n*n*0.25;
            break;
    }
    if(color === undefined) color = assets[n];
    const cube = new THREE.BoxGeometry(1,1,height);
    const material = new THREE.MeshStandardMaterial({color: color});
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