import { useState, useEffect } from "react";
import gsap from "gsap";
import "./App.css";

function App() {
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

    useEffect(() => {
        welcomeAnimation();
    }, []);

    return (
        <>
            <div className="miniapp absolute text-white text-center">
                <h1 id="alex-basurto" className="text-3xl opacity-0">
                    Alex Basurto
                </h1>
                <p id="full-stack" className="fs-web-dev text-3xl opacity-0">
                    Full Stack
                </p>
                <p id="web-developer" className="fs-web-dev text-3xl opacity-0">
                    Web Developer
                </p>
                <a
                    id="view-work"
                    href="https://github.com/alexBasurto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl mt-4 border px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 inline-block opacity-0"
                >
                    View Work
                </a>
            </div>
        </>
    );
}

export default App;
