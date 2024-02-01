import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { Drink } from '../types/types'

interface RecipeProps {
  drink: Drink | null
  nonAlcoholic?: boolean
}

const Recipe = ({ drink, nonAlcoholic = false }: RecipeProps) => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (drink) {
      setTimeout(() => {
        setLoading(false)
      }, 150)
    }
  }, [drink])

  const Drink = () => {
    return (
      <>
        <h4>{drink?.name}</h4>
        <div className='w-3/4 h-20 mx-auto bg-gray-400 rounded-xl'></div>
        <div className='w-3/4'>
          <h5>Ingrédients</h5>
          <ul>
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
        </div>
        <div className='w-3/4'>
          <h5>Etapes</h5>
          <ol>
            <li>Etape 1</li>
            <li>Etape 2</li>
            <li>Etape 3</li>
          </ol>
        </div>
      </>
    )
  }

  return (
    <div
      className={twMerge(
        'flex flex-col items-center gap-4 p-4 rounded-xl text-text-50',
        nonAlcoholic ? 'bg-accent-400 ' : 'bg-accent-700'
      )}
    >
      {loading ? <p>Loading...</p> : <Drink />}
    </div>
  )
}

export default Recipe
