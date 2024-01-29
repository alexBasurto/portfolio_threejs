# APUNTES
## Box Geometry
- scene, camera, renderer
- geometry + material = mesh

```js
import './style.css'
import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const boxGeometry = new THREE.BoxGeometry(
    1, // width
    1, // height
    1 // depth
);

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

const mesh = new THREE.Mesh(boxGeometry, material);

scene.add(mesh);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
}

animate();
```

## Plane Geometry

```js
import './style.css'
import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

/* const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true});

const mesh = new THREE.Mesh(boxGeometry, material);

scene.add(mesh); */
camera.position.z = 5;

const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide, wireframe: true});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

scene.add(planeMesh);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
/*     mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01; */
    planeMesh.rotation.x += 0.01;
}

animate();
```