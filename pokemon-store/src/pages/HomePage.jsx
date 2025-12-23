import React, { useState } from 'react';
import PokemonList from '../components/PokemonList';
import SearchBox from '../components/SearchBox';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <div className="home-page">
      <h1 className="page-title">Pokemon Store</h1>
      <SearchBox onSearch={handleSearch} />
      <PokemonList searchQuery={searchQuery} />
    </div>
  );
};

export default HomePage;