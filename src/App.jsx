import React, { useState } from 'react'
import bbLogo from './assets/BBLogo2018.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={bbLogo} className="logo" alt="Blood Bowl logo" />
        </a>
      </div>
      <h1>Grungle Cup - A Blood Bowl Tournament</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
    </>
  )
}

export default App
