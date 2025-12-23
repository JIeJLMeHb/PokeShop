import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import { fetchPokemons } from '../services/pokeAPI';

const PokemonList = ({ searchQuery }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const data = await fetchPokemons(151);
        setPokemons(data);
        setFilteredPokemons(data);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      } finally {
        setLoading(false);
      }
    };
    loadPokemons();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery)
      );
      setFilteredPokemons(filtered);
    } else {
      setFilteredPokemons(pokemons);
    }
  }, [searchQuery, pokemons]);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="pokemon-container">
      {filteredPokemons.length === 0 ? (
        <div className="no-results">
          No Pokemon found for "{searchQuery}"
        </div>
      ) : (
        filteredPokemons.map((pokemon, index) => (
          <PokemonCard 
            key={pokemon.name} 
            pokemon={pokemon} 
            id={index + 1} 
          />
        ))
      )}
    </div>
  );
};

export default PokemonList;