import { useState } from 'react'

import './App.css';
import NavBar from './components/navbar/Navbar';
import Blockinic from './components/inic-conten/Blockinic';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Blockinic />
    </>
  )
}

export default App
