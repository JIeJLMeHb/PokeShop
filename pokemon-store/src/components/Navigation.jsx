import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navigation = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navigation">
      <Link to="/" className="nav-logo">
        <h1>Pokémon Store</h1>
      </Link>
      <div className="cart-info">
        <span className="cart-count">
          Cart: {cartItems.length} items
        </span>
      </div>
    </nav>
  );
};

export default Navigation;