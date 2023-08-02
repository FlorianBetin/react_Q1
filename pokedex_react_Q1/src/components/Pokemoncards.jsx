import "../styles/pokemoncards.css";
import PropTypes from "prop-types";

const PokemonCards = ({pokemon}) => {
  PokemonCards.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgScr: PropTypes.string,
    }).isRequired,
  }

  //Alerte transferée ici
  {pokemon.name ==="pikachu" ? (alert('Pikachuuuu')) : null}

  return (
    
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

export default PokemonCards;
