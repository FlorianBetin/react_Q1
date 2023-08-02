import './App.css';
import Navbar from './components/Navbar';
import PokemonCards from './components/Pokemoncards.jsx';
import { useEffect, useState } from 'react';



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

useEffect(
  () => {
    alert('Hello Pemon trainer !')
  },
  []
);

// Solution avec useEffect
// useEffect(
//   () => {
//     console.log(pokemonList[pokemonIndex].name, "here")
//     {pokemonList[pokemonIndex].name == "pikachu" ? alert('Pikachuuuuu') : null}
    
//   },
//   []
// )

  return (
    <div>
    <Navbar 
    pokemonList = {pokemonList} 
    pokemonIndex={pokemonIndex} 
    setPokemonIndex={setPokemonIndex}
    />
    <PokemonCards pokemon={pokemonList[pokemonIndex]} />
    </div>
  )
}

export default App
