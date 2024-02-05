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
            <div className="miniapp absolute">
                <h1 id="alex-basurto" className="opacity-zero">
                    Alex Basurto
                </h1>
                <p id="full-stack" className="fs-web-dev opacity-zero">
                    Full Stack
                </p>
                <p id="web-developer" className="fs-web-dev opacity-zero">
                    Web Developer
                </p>
                <button
                    id="view-work"
                    onClick={handleViewWork}
                    className="opacity-zero"
                >
                    View Portfolio
                </button>
            </div>
        </>
    );
}

export default App;
