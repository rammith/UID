import React from 'react';
import './Cart.css';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty. Add some products!</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
