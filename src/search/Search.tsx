import { useState } from 'react'
import './Search.css'

const Search = () => {
    const [pokemonName, setPokemonName] = useState<string>('')

  return (
    <form className="search" onSubmit={e =>{
        e.preventDefault()

    }}>
        <input
        className="search__input"
        type="text" value={pokemonName}
        placeholder='Search Pokémon'
        onChange={({ target }) => setPokemonName(target.value)}/>
        <button className="search__button">Go find 'em all!</button>
    </form>
  )
}

export default Search