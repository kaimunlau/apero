const Recipe = () => {
  return (
    <div className='flex flex-col items-center gap-4 p-4 rounded-xl bg-accent-700 text-text-50'>
      <h4>Recipe Name</h4>
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
    </div>
  )
}

export default Recipe
