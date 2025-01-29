// frontend/src/components/AddItem.js

import React, { useState, useEffect } from 'react';
import { createItem, updateItem } from '../services/itemService';
import { useNavigate } from 'react-router-dom';
import './AddItem.css';

function AddItem({ editItem, setEditItem }) {
  const [currentItem, setCurrentItem] = useState({ name: '', phone: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (editItem) {
      setCurrentItem(editItem);
    }
  }, [editItem]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleSaveItem = async () => {
    if (!currentItem.name || !currentItem.phone || !currentItem.email) {
      alert('Please fill in all fields');
      return;
    }

    try {
      if (editItem) {
        await updateItem(editItem._id, currentItem);
        setEditItem(null);
      } else {
        await createItem(currentItem);
      }
      setCurrentItem({ name: '', phone: '', email: '' });
      navigate('/view-items');
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>{editItem ? 'Edit Contact' : 'Add Contact'}</h1>
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={currentItem.name}
          onChange={handleInputChange}
          placeholder=" "
        />
      </div>
      <div className="input-container">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={currentItem.phone}
          onChange={handleInputChange}
          placeholder=" "
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={currentItem.email}
          onChange={handleInputChange}
          placeholder=" "
        />
      </div>
      <button onClick={handleSaveItem}>
        {editItem ? 'Update Contact' : 'Add Contact'}
      </button>
    </div>
  );
}

export default AddItem;
