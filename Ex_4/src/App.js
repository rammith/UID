import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'products':
        return <Products addToCart={addToCart} />;
      case 'cart':
        return <Cart cartItems={cartItems} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-Commerce Website</h1>
        <nav>
          <button onClick={() => setCurrentPage('home')}>Home</button>
          <button onClick={() => setCurrentPage('products')}>Products</button>
          <button onClick={() => setCurrentPage('cart')}>Cart ({cartItems.length})</button>
        </nav>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
