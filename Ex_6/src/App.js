import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.description && formData.quantity) {
      setItems([...items, formData]);
      setFormData({ name: '', description: '', quantity: '' });
    }
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Item Name"
            className="input-field"
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Item Description"
            className="input-field"
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="input-field"
          />
          <button type="submit" className="submit-button">Add Item</button>
        </form>
      </div>

      <div className="list-container">
        <h2>Item List</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="item">
              <span className="item-name">{item.name}</span>
              <span className="item-desc">{item.description}</span>
              <span className="item-quantity">Qty: {item.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
