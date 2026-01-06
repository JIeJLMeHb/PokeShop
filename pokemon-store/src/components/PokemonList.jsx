import React, { useEffect, useState, useMemo } from 'react';
import PokemonCard from './PokemonCard';
import { fetchPokemons } from '../services/pokeAPI';

// Функция для генерации фиксированной случайной цены на основе ID
const generatePrice = (id) => {
  // Используем детерминированный алгоритм на основе ID
  const seed = id * 9301 + 49297; // Простые числа для лучшего распределения
  return (seed % 100) + 50; // Цена от 50 до 149
};

const PokemonList = ({ searchQuery }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const data = await fetchPokemons(151);
        
        // Добавляем фиксированную цену каждому покемону
        const pokemonsWithFixedPrice = data.map((pokemon, index) => ({
          ...pokemon,
          id: index + 1,
          price: generatePrice(index + 1) // Генерируем фиксированную цену
        }));
        
        setPokemons(pokemonsWithFixedPrice);
        setFilteredPokemons(pokemonsWithFixedPrice);
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
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
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
        filteredPokemons.map((pokemon) => (
          <PokemonCard 
            key={pokemon.name} 
            pokemon={pokemon} 
            id={pokemon.id} 
            price={pokemon.price} 
          />
        ))
      )}
    </div>
  );
};

export default PokemonList;