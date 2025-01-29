// frontend/src/components/ViewItems.js

import React, { useState, useEffect } from 'react';
import { getItems, deleteItem } from '../services/itemService';
import { useNavigate } from 'react-router-dom';
import './ViewItems.css';

function ViewItems({ setEditItem }) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      fetchItems(); // Refresh items list
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEditItem = (item) => {
    setEditItem(item);
    navigate('/add-item');
  };

  return (
    <div className="list-container">
      <h1>Contacts</h1>
      {items.map(item => (
        <div className="card" key={item._id}>
          <div className="card-info">
            <span><strong>Name:</strong> {item.name}</span>
            <span><strong>Phone:</strong> {item.phone}</span>
            <span><strong>Email:</strong> {item.email}</span>
          </div>
          <div className="action-buttons">
            <button className="edit-btn" onClick={() => handleEditItem(item)}>Edit</button>
            <button className="delete-btn" onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewItems;
