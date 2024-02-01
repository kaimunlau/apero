import Confetti from './Confetti'
import Recipe from './Recipe'

import { Drink } from '../types/types'

interface AperoProps {
  alcoholicDrink: Drink | null
  nonAlcoholicDrink: Drink | null
}

const Apero = ({ alcoholicDrink, nonAlcoholicDrink }: AperoProps) => {
  const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })

  const Recipes = () => {
    return (
      <div className='flex flex-col w-3/4 gap-4'>
        <div>
          <h3>Au menu...</h3>
          <Recipe drink={alcoholicDrink} />
        </div>
        <div>
          <h3>Sans alcool, la fête est plus folle...</h3>
          <Recipe
            drink={nonAlcoholicDrink}
            nonAlcoholic
          />
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center gap-4 my-10'>
      <Confetti />
      <div>
        <h2>{time}</h2>
        <h1>C'est l'heure de l'apero !</h1>
      </div>
      <Recipes />
    </div>
  )
}

export default Apero
