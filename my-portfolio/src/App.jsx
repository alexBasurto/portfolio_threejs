import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="miniapp absolute text-white text-center">
                <h1 className="text-3xl">Alex Basurto</h1>
                <p className="text-3xl">Full Stack Web Developer</p>
                <a href="https://github.com/alexBasurto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl mt-4 border px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 inline-block"
                >
                    View Work
                </a>
            </div>
    </>
  )
}

export default App
