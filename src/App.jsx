import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gradient-to-r from-black via-red-500 to-black  min-h-screen flex flex-col items-center justify-center text-center'>
        <div className='flex flex-row'>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="w-24 h-24 mr-8" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="w-24 h-24 animate-spin" alt="React logo" style={{ animationDuration: "10s" }} />
          </a>
        </div>
        <h1 className='text-white text-5xl font-bold m-8'>Vite + React</h1>
        <h2 className='text-white text-1xl'>Danendra Nawfal Radhitya</h2>
        <div className="card text-gray-500">
          <button className='bg-white px-4 py-2 rounded-2xl text-xl mt-10 mb-10' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className='text-neutral-200'>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-neutral-300">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
