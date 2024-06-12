import * as THREE from 'three';
/* 
    Template to import main THREE.js compoments (e.g camera) 
    for code reusability and better readbility.
*/
export function threeJS(width, height, sceneBg, container, near = 0.1, end = 100) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(sceneBg);

    const camera = new THREE.PerspectiveCamera(75, width / height, near, end);

    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById(container),
    });
    renderer.setSize(width, height);

    return {
        scene: scene,
        camera: camera,
        renderer: renderer,
    };
}