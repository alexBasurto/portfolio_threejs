import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import gsap from "gsap";

const gui = new dat.GUI();
const world = {
    plane: {
        width: 400,
        height: 400,
        widthSegments: 50,
        heightSegments: 50,
    },
};

gui.add(world.plane, "width", 1, 500).onChange(generatePlane);

gui.add(world.plane, "height", 1, 500).onChange(generatePlane);

gui.add(world.plane, "widthSegments", 1, 100).onChange(generatePlane);

gui.add(world.plane, "heightSegments", 1, 100).onChange(generatePlane);

const blueColor = {
    r: 0.059,
    g: 0.059,
    b: 0.196,
};

function generatePlane() {
    planeMesh.geometry.dispose();
    planeMesh.geometry = new THREE.PlaneGeometry(
        world.plane.width,
        world.plane.height,
        world.plane.widthSegments,
        world.plane.heightSegments
    );

    // vertice position randomization
    const { array } = planeMesh.geometry.attributes.position;
    const randomValues = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 3 === 0) {
            const x = array[i];
            const y = array[i + 1];
            const z = array[i + 2];

            array[i] = x + (Math.random() - 0.5) * 3;
            array[i + 1] = y + (Math.random() - 0.5) * 3;
            array[i + 2] = z + (Math.random() - 0.5) * 3;
        }

        randomValues.push(Math.random() * Math.PI * 2);
    }

    planeMesh.geometry.attributes.position.randomValues = randomValues;

    planeMesh.geometry.attributes.position.originalPosition =
        planeMesh.geometry.attributes.position.array;

    const colors = [];
    for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
        colors.push(blueColor.r, blueColor.g, blueColor.b);
    }

    planeMesh.geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(new Float32Array(colors), 3)
    );
}

const raycaster = new THREE.Raycaster();

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

new OrbitControls(camera, renderer.domElement);
camera.position.z = 50;

const planeGeometry = new THREE.PlaneGeometry(
    world.plane.width,
    world.plane.height,
    world.plane.widthSegments,
    world.plane.heightSegments
);
const planeMaterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    flatShading: true,
    wireframe: false,
    vertexColors: true,
});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);

generatePlane();

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1);
scene.add(light);

const backLight = new THREE.DirectionalLight(0xffffff, 1);
backLight.position.set(0, 0, -1);
scene.add(backLight);

const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
});

const starVertices = [];
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000; //revisar

    starVertices.push(x, y, z);
}

starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starVertices, 3)
);

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

const mouse = {
    x: undefined,
    y: undefined,
};

let frame = 0;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    raycaster.setFromCamera(mouse, camera);
    frame += 0.01;

    const { array, originalPosition, randomValues } =
        planeMesh.geometry.attributes.position;

    for (let i = 0; i < array.length; i += 3) {
        // x
        array[i] =
            originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.01;

        // y
        array[i + 1] =
            originalPosition[i + 1] +
            Math.sin(frame + randomValues[i + 1]) * 0.01;

        // z
        /* array[i + 2] = originalPosition[i + 2] + Math.sin(frame + randomValues[i + 2]) * 0.01; */
    }

    planeMesh.geometry.attributes.position.needsUpdate = true;

    const intersects = raycaster.intersectObject(planeMesh);
    if (intersects.length > 0) {
        const { color } = intersects[0].object.geometry.attributes;

        color.needsUpdate = true;

        const initialColor = {
            r: blueColor.r,
            g: blueColor.g,
            b: blueColor.b,
        };

        const hoverColor = {
            r: 0.2,
            g: 0.2,
            b: 1,
        };

        gsap.to(hoverColor, {
            r: initialColor.r,
            g: initialColor.g,
            b: initialColor.b,
            onUpdate: () => {
                // Vertice 1
                color.setX(intersects[0].face.a, hoverColor.r);
                color.setY(intersects[0].face.a, hoverColor.g);
                color.setZ(intersects[0].face.a, hoverColor.b);
                // Vertice 2
                color.setX(intersects[0].face.b, hoverColor.r);
                color.setY(intersects[0].face.b, hoverColor.g);
                color.setZ(intersects[0].face.b, hoverColor.b);
                // Vertice 3
                color.setX(intersects[0].face.c, hoverColor.r);
                color.setY(intersects[0].face.c, hoverColor.g);
                color.setZ(intersects[0].face.c, hoverColor.b);

                color.needsUpdate = true;
            },
        });
    }
    stars.rotation.y += 0.002;
}

animate();

addEventListener("mousemove", (event) => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / innerHeight) * 2 + 1;
});

const viewWorkCameraMove = () => {
    gsap.to(camera.position, {
        z: 25,
        duration: 1.5,
        ease: "power3.inOut",
    });
    gsap.to(camera.rotation, {
        x: 1.57,
        duration: 2,
        ease: "power3.inOut",
    });
    gsap.to(camera.position, {
        y: 1000,
        duration: 1.5,
        ease: "power3.in",
        delay: 1.5,
        onComplete: () => {
            window.location = 'https://github.com/alexBasurto';
        },
    });
};

const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};

export { viewWorkCameraMove, handleResize };
