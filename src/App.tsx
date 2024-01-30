import { useState } from 'react'
import './App.css'
import MainButton from './components/MainButton'
import Apero from './components/Apero'
import { twMerge } from 'tailwind-merge'

function App() {
  const [isAperoTime, setIsAperoTime] = useState<boolean | null>(null)

  const buttonDivHeight = () => {
    return !isAperoTime ? 'h-screen' : 'h-full'
  }

  return (
    <div className='container my-10'>
      {isAperoTime && <Apero />}
      <div
        className={twMerge(
          'flex flex-col items-center justify-center',
          buttonDivHeight()
        )}
      >
        {!isAperoTime && isAperoTime !== null && (
          <h3>Ce n'est pas encore l'heure de l'apero :(</h3>
        )}
        {!isAperoTime && <MainButton setIsAperoTime={setIsAperoTime} />}
      </div>
    </div>
  )
}

export default App
