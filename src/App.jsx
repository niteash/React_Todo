import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LudoBoard from './Ludoboard'
import TodoList from './TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoList />
      {/* <LudoBoard /> */}
    </>
  )
}

export default App
