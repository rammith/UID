import React from 'react';
import './Products.css';

const productList = [
  { id: 1, name: 'Product 1', price: '$20' },
  { id: 2, name: 'Product 2', price: '$30' },
  { id: 3, name: 'Product 3', price: '$40' },
];

function Products({ addToCart }) {
  return (
    <div className="products">
      <h2>Products</h2>
      <div className="product-list">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
