import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setup3DEnvironment, handleResize, clickViewWork, welcomeAnimation, stopThreeEnvironment } from "./App-three.js";

function App() {
    const navigate = useNavigate();

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

    const handleViewWork = async () => {
        await clickViewWork().then(() => {
            stopThreeEnvironment();
            navigate("/work");
        });
    }
  

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
                    onClick={handleViewWork}
                    className="text-2xl mt-4 border px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 inline-block opacity-0"
                >
                    View Portfolio
                </button>
            </div>
        </>
    );
}

export default App;
