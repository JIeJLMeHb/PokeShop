import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h3>Shopping Cart ({cartItems.length} items)</h3>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>${item.price} each</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
          
          <div className="cart-total">
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

// ВАЖНО: Это должен быть экспорт по умолчанию
export default ShoppingCart;