const Navbar = ({pokemonList, pokemonIndex, setPokemonIndex}) => {

    const handleClick = (index) => {
      setPokemonIndex(index);
      console.log(index, 'index name')
    }
    
      return (
        <nav className="navbar">
      {pokemonList.map((pokemon, index) => (
        
        <button className="buttonNavbar" key={index} onClick={() => handleClick(index)}>{pokemon.name}</button>
      ))
      }


        </nav>
      );
};

export default Navbar;
