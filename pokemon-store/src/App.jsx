import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import PokemonDetail from './pages/PokemonDetail';
import ShoppingCart from './components/ShoppingCart';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navigation />
          <ShoppingCart />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;