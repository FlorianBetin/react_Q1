import './App.css';
import PokemonCards from './components/Pokemoncards.jsx';
import { useState } from 'react';



function App() {

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

const [pokemonIndex, setPokemonIndex] = useState(0);

const handleClickNext = () => {
  setPokemonIndex(pokemonIndex + 1)
}

const handleClickPrevious = () => {
  setPokemonIndex(pokemonIndex - 1)
}

  return (
    <div>
      {pokemonIndex > 0 ? <button onClick={handleClickPrevious}>Previous</button> : null}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Next</button> : null}
    <PokemonCards pokemon={pokemonList[pokemonIndex]} />
    </div>
  )
}

export default App
