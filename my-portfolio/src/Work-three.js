import * as THREE from "three";
import gsap from "gsap";

// Fn aparte

const workWelcomeAnimation = () => {
    const duration = 1.5;
    const easing = "power4.out";
    let delay = 0.5;
    const opacity = 1;
    const y = 0;
    const x = 0;

    gsap.to("header", {
        duration: 0.5,
        opacity: opacity,
    });

    gsap.to("footer", {
        duration: 0.5,
        opacity: opacity,
    });

    gsap.to("#box-1", {
        duration: duration,
        delay: delay,
        opacity: opacity,
        y: y,
        x: x,
        ease: easing,
    });

    gsap.to("#box-2", {
        duration: duration,
        delay: delay + 0.5,
        opacity: opacity,
        y: y,
        x: x,
        ease: easing,
    });

    gsap.to("#box-3", {
        duration: duration,
        delay: delay + 1,
        opacity: opacity,
        y: y,
        x: x,
        ease: easing,
    });

    gsap.to("#box-4", {
        duration: duration,
        delay: delay + 1.5,
        opacity: opacity,
        y: y,
        x: x,
        ease: easing,
    });
};

export { workWelcomeAnimation };