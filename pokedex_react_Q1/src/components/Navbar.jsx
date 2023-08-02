const Navbar = ({pokemonList, pokemonIndex, setPokemonIndex}) => {

    const handleClickNext = () => {
        setPokemonIndex(pokemonIndex + 1)
      }
      
      const handleClickPrevious = () => {
        setPokemonIndex(pokemonIndex - 1)
      }
    
      return (
        <nav>
        {pokemonIndex > 0 ? <button onClick={handleClickPrevious}>Previous</button> : null}
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Next</button> : null}
        </nav>
      );
};

export default Navbar;

