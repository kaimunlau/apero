import Recipe from './Recipe'

const Apero = () => {
  const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div className='flex flex-col items-center gap-4'>
      <div>
        <h2>{time}</h2>
        <h1>C'est l'heure de l'apero !</h1>
      </div>
      <div className='flex flex-col w-3/4 gap-4'>
        <div>
          <h3>Au menu...</h3>
          <Recipe />
        </div>
        <div>
          <h3>Sans alcool, la fête est plus folle...</h3>
          <Recipe />
        </div>
      </div>
    </div>
  )
}

export default Apero
