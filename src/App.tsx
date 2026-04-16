import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>Добро пожаловать!</h1>
        <p>Это главная страница вашего проекта.</p>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Счётчик: {count}
          </button>
        </div>

        <p className="read-the-docs">
          Нажмите на кнопку, чтобы увеличить счётчик
        </p>
      </div>
    </>
  )
}

export default App
