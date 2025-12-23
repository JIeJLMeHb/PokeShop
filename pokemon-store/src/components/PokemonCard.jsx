import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const PokemonCard = ({ pokemon, id }) => {
  const { addToCart } = useContext(CartContext);
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({
      id,
      name: pokemon.name,
      price: 100,// Math.floor(Math.random() * 100) + 50,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    });
  };

  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${id}`}>
        <img 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
          alt={pokemon.name}
        />
        <h3>{pokemon.name}</h3>
      </Link>
      <div className="card-actions">
        <span className="price">${100}</span>
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;