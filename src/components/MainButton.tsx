interface MainButtonProps {
  setIsAperoTime: React.Dispatch<React.SetStateAction<boolean | null>>
}

const MainButton: React.FC<MainButtonProps> = ({ setIsAperoTime }) => {
  const changeIsAperoTime = () => {
    const itsTimeToDrink = () => {
      const startHour = 19
      const endHourNextDay = 5
      return (
        new Date().getHours() >= startHour ||
        new Date().getHours() < endHourNextDay
      )
    }

    if (itsTimeToDrink()) {
      setIsAperoTime(true)
    } else {
      setIsAperoTime(false)
    }
  }

  return (
    // <div>
    <button
      className='px-6 py-4 text-xl tracking-wide transition-all duration-300 font-heading bg-primary-600 text-text-50 rounded-2xl md:hover:bg-primary-500 md:hover:shadow-xl active:hover:bg-primary-400 active:hover:shadow-2xl'
      onClick={changeIsAperoTime}
    >
      C'est l'heure de l'apero ?
    </button>
    // </div>
  )
}

export default MainButton
