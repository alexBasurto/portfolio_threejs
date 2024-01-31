import { useEffect } from "react";
import { setup3DEnvironment, handleResize, clickViewWork, welcomeAnimation } from "./main-three.js";
import "./App.css";

function App() {

    useEffect(() => {
        setup3DEnvironment();
        welcomeAnimation();
    }, []);

    useEffect(() => {
      // Agregar el event listener cuando el componente se monta
      window.addEventListener('resize', handleResize);
  
      // Limpiar (remover) el event listener cuando el componente se desmonte
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  

    return (
        <>
            <div className="miniapp absolute text-white text-center w-full max-w-2xl px-6">
                <h1 id="alex-basurto" className="text-3xl opacity-0">
                    Alex Basurto
                </h1>
                <p id="full-stack" className="fs-web-dev text-3xl opacity-0">
                    Full Stack
                </p>
                <p id="web-developer" className="fs-web-dev text-3xl opacity-0">
                    Web Developer
                </p>
                <button
                    id="view-work"
                    onClick= { (e) => clickViewWork(e) }
                    className="text-2xl mt-4 border px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 inline-block opacity-0"
                >
                    View Work
                </button>
            </div>
        </>
    );
}

export default App;
