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
    const ingredientsWithMeasures = Object.entries(
      drink?.ingredients || {}
    ).map(([key, value]: [string, string]) => {
      const measure = drink?.measures[key as keyof typeof drink.measures] || ''
      return {
        name: value,
        measure: measure,
      }
    })

    return (
      <>
        <h4>{drink?.name}</h4>
        <div className='w-3/4 h-40 mx-auto md:h-80 md:w-1/2 rounded-xl'>
          <img
            className='object-cover w-full h-full rounded-xl'
            src={drink?.imgUrl}
            alt={drink?.name}
          />
        </div>
        <div className='w-3/4 md:w-1/2'>
          <h5>Ingrédients</h5>
          <ul>
            {ingredientsWithMeasures.map((ingredient, index) => {
              return (
                <li key={index}>
                  {String(ingredient.measure)} {ingredient.name}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='w-3/4 md:w-1/2'>
          <h5>Etapes</h5>
          <ol>
            {drink?.steps.map((step, index) => {
              if (step === '') return null
              return <li key={index}>{step}</li>
            })}
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
