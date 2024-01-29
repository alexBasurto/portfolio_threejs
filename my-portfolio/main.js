import "./style.css";
import * as THREE from "three";
import * as dat from "dat.gui";

const gui = new dat.GUI();
const world = {
    plane: {
        width: 10,
        height: 10,
        widthSegments: 10,
        heightSegments: 10,
    },
};

gui.add(world.plane, "width", 1, 20).onChange(generatePlane);

gui.add(world.plane, "height", 1, 20).onChange(generatePlane);

gui.add(world.plane, "widthSegments", 1, 50).onChange(generatePlane);

gui.add(world.plane, "heightSegments", 1, 50).onChange(generatePlane);

function generatePlane() {
    planeMesh.geometry.dispose();
    planeMesh.geometry = new THREE.PlaneGeometry(
        world.plane.width,
        world.plane.height,
        world.plane.widthSegments,
        world.plane.heightSegments
        );
    const { array } = planeMesh.geometry.attributes.position;
    for (let i = 0; i < array.length; i += 3) {
        const x = array[i];
        const y = array[i + 1];
        const z = array[i + 2];
        array[i + 2] = z + Math.random();
    }
}

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
const planeMaterial = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    side: THREE.DoubleSide,
    flatShading: true,
    wireframe: false,
});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);

const { array } = planeMesh.geometry.attributes.position;
for (let i = 0; i < array.length; i += 3) {
    const x = array[i];
    const y = array[i + 1];
    const z = array[i + 2];
    array[i + 2] = z + Math.random();
}

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 0, 1);
scene.add(light);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    /* planeMesh.rotation.x += 0.01; */
}

animate();
