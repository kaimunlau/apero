import { useState } from 'react'
import './App.css'
import MainButton from './components/MainButton'
import Apero from './components/Apero'

function App() {
  const [isAperoTime, setIsAperoTime] = useState(false)

  return (
    <div className='container my-10'>
      {isAperoTime ? <Apero /> : <MainButton setIsAperoTime={setIsAperoTime} />}
    </div>
  )
}

export default App
