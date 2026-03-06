import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as dat from "dat.gui";
import gsap from "gsap";

// GUI
// const gui = new dat.GUI();
const world = {
    plane: {
        width: 400,
        height: 400,
        widthSegments: 50,
        heightSegments: 50,
    },
};

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

// blue colors
const blueColor = { r: 0.059, g: 0.059, b: 0.196 };

// Frame counter
let frame = 0;

// Lights
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1);
scene.add(light);

const backLight = new THREE.DirectionalLight(0xffffff, 1);
backLight.position.set(0, 0, -1);
scene.add(backLight);

// Stars
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
});

const starVertices = [];
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    starVertices.push(x, y, z);
}

starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starVertices, 3)
);

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Raycaster para detectar el mouse y cambiar el color de los triangulos
const raycaster = new THREE.Raycaster();

const mouse = {
    x: undefined,
    y: undefined,
};

addEventListener("mousemove", (event) => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / innerHeight) * 2 + 1;
});

const generatePlane = () => {
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
};

// gui.add(world.plane, "width", 1, 500).onChange(generatePlane);
// gui.add(world.plane, "height", 1, 500).onChange(generatePlane);
// gui.add(world.plane, "widthSegments", 1, 100).onChange(generatePlane);
// gui.add(world.plane, "heightSegments", 1, 100).onChange(generatePlane);

let animationFrameId;

const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
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
};

const setup3DEnvironment = () => {
    generatePlane();
    animate();
};

// Fn aparte
const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};

const welcomeAnimation = () => {
    const duration = 1.5;
    const easing = "power4.out";
    let delay = 0.5;
    const opacity = 1;
    const y = 0;

    gsap.to("#alex-basurto", {
        duration: duration,
        delay: delay,
        opacity: opacity,
        y: y,
        ease: easing,
    });

    gsap.to("#full-stack", {
        duration: duration,
        delay: delay + 0.8,
        opacity: opacity,
        y: y,
        ease: easing,
    });

    gsap.to("#web-developer", {
        duration: duration,
        delay: delay + 1.6,
        opacity: opacity,
        y: y,
        ease: easing,
    });

    gsap.to("#view-work", {
        duration: duration,
        delay: delay + 2.4,
        opacity: opacity,
        y: y,
        ease: easing,
    });
};

const clickViewWork = () => {
    return new Promise((resolve) => {
        gsap.to(".miniapp", {
            opacity: 0,
            duration: 1,
            ease: "power4.out",
        });
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
                resolve(); // navigate to /work
            },
        });
    });
};


const stopThreeEnvironment = () => {
    // Detener el bucle de animación
    cancelAnimationFrame(animationFrameId);

    // Limpiar la escena
    scene.children.forEach(object => {
        if (object.geometry && typeof object.geometry.dispose === 'function') {
            object.geometry.dispose();
        }

        if (object.material) {
            if (Array.isArray(object.material)) {
                // En caso de que el objeto tenga varios materiales
                object.material.forEach(material => {
                    if (typeof material.dispose === 'function') {
                        material.dispose();
                    }
                });
            } else if (typeof object.material.dispose === 'function') {
                object.material.dispose();
            }
        }
    });

    scene.clear();

    // Eliminar el canvas del DOM
    if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
    }

    // Limpiar otros recursos (como event listeners)
    window.removeEventListener('resize', handleResize);
    // Si hay otros event listeners, también deberían eliminarse aquí

    // Otras limpiezas necesarias, por ejemplo, resetear las configuraciones de la cámara
    // Por ejemplo: camera.position.set(0, 0, 0), camera.rotation.set(0, 0, 0), etc.
};


export { setup3DEnvironment, handleResize, welcomeAnimation, clickViewWork, stopThreeEnvironment };
