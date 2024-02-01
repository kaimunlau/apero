import { useEffect, useState } from 'react'
import './App.css'
import MainButton from './components/MainButton'
import Apero from './components/Apero'
import { twMerge } from 'tailwind-merge'

import { ApiDrinkResponse, Drink } from './types/types'

function App() {
  const [isAperoTime, setIsAperoTime] = useState<boolean | null>(null)
  const [alcoholicDrink, setAlcoholicDrink] = useState<Drink | null>(null)
  const [nonAlcoholicDrink, setNonAlcoholicDrink] = useState<Drink | null>(null)

  useEffect(() => {
    if (isAperoTime) {
      const buildDrinkObject = (drink: ApiDrinkResponse) => {
        return {
          id: drink.drinks[0].idDrink,
          name: drink.drinks[0].strDrink,
          glass: drink.drinks[0].strGlass,
          ingredients: (
            Object.keys(drink.drinks[0]) as Array<
              keyof (typeof drink.drinks)[0]
            >
          )
            .filter((key) => key.includes('strIngredient'))
            .map((key) => drink.drinks[0][key] as string)
            .filter((ingredient) => ingredient !== null),
          measures: (
            Object.keys(drink.drinks[0]) as Array<
              keyof (typeof drink.drinks)[0]
            >
          )
            .filter((key) => key.includes('strMeasure'))
            .map((key) => drink.drinks[0][key] as string)
            .filter((measure) => measure !== null),
          steps: drink.drinks[0].strInstructions.split('.'),
          imgUrl: drink.drinks[0].strDrinkThumb,
        }
      }

      const fetchDrinksByType = async (alcoholic: boolean) => {
        const baseUrl = '/api/json/v1/1/filter.php?a='
        const url = baseUrl + (alcoholic ? 'Alcoholic' : 'Non_Alcoholic')

        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })

          const drinksData = await response.json()
          return drinksData.drinks
        } catch (error) {
          console.error('Error fetching drinks:', error)
          return []
        }
      }

      const fetchRandomDrinkById = async (id: string) => {
        try {
          const response = await fetch(`/api/json/v1/1/lookup.php?i=${id}`)
          return await response.json()
        } catch (error) {
          console.error('Error fetching random drink:', error)
          return null
        }
      }

      const fetchAndSetDrink = async (alcoholic: boolean) => {
        try {
          const drinks = await fetchDrinksByType(alcoholic)

          if (drinks.length > 0) {
            const randomDrinkIndex = Math.floor(Math.random() * drinks.length)
            const randomDrinkId = drinks[randomDrinkIndex].idDrink
            const randomDrinkData = await fetchRandomDrinkById(randomDrinkId)

            if (randomDrinkData) {
              const drink = buildDrinkObject(randomDrinkData)

              if (alcoholic) {
                setAlcoholicDrink(drink)
              } else {
                setNonAlcoholicDrink(drink)
              }
            }
          }
        } catch (error) {
          console.error('Error fetching and setting drink:', error)
        }
      }

      fetchAndSetDrink(true)
      fetchAndSetDrink(false)
    }
  }, [isAperoTime])

  const buttonDivHeight = () => {
    return !isAperoTime ? 'h-screen' : 'h-full'
  }

  return (
    <div className='container mx-auto'>
      {isAperoTime && (
        <Apero
          alcoholicDrink={alcoholicDrink}
          nonAlcoholicDrink={nonAlcoholicDrink}
        />
      )}
      <div
        className={twMerge(
          'flex flex-col items-center justify-center',
          buttonDivHeight()
        )}
      >
        {!isAperoTime && isAperoTime !== null && (
          <h3>Ce n'est pas encore l'heure de l'apero :(</h3>
        )}
        {!isAperoTime && (
          <MainButton
            isAperoTime={isAperoTime}
            setIsAperoTime={setIsAperoTime}
          />
        )}
      </div>
    </div>
  )
}

export default App
