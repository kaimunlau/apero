const MainButton = () => {
  const handleClick = () => {
    // TODO: trigger apero logic
    console.log('Clique')
  }

  return (
    <button
      className='px-6 py-4 text-xl tracking-wide transition-all duration-300 font-heading bg-primary-600 text-text-50 rounded-2xl md:hover:bg-primary-500 md:hover:shadow-xl active:hover:bg-primary-400 active:hover:shadow-2xl'
      onClick={handleClick}
    >
      C'est l'heure de l'apero ?
    </button>
  )
}

export default MainButton
